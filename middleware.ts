import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './next-i18next.config.mjs';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest) {
  const headers = {};
  request.headers.forEach((v, k) => headers[k] = v);
  return matchLocale(
    new Negotiator({ headers }).languages(),
    i18n.locales,
    i18n.defaultLocale
  );
}

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith('/api') || pathname.includes('/_next') || /\.(.*)$/.test(pathname)) {
    return NextResponse.next();
  }

  const pathnameHasLocale = i18n.locales.some(locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
  if (!pathnameHasLocale) {
    const locale = getLocale(req);
    return NextResponse.rewrite(new URL(`/${locale}${pathname}`, req.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\..*).*)']
};
