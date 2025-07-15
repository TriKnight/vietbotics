import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './next-i18next.config.mjs';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest) {
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });

  return matchLocale(
    new Negotiator({ headers }).languages(),
    i18n.locales,
    i18n.defaultLocale
  );
}

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Skip API, _next, and static files
  if (
    pathname.startsWith('/api') ||
    pathname.includes('/_next') ||
    /\.(.*)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = i18n.locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    const locale = getLocale(req);

    // 🚀 Redirect instead of rewrite
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\..*).*)'],
};
