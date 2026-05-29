# Vietbotics

A modern web application built with Next.js, React, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vietbotics
```

2. Install dependencies:
```bash
npm install
```

### Running the Development Server

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

Open your browser and navigate to the URL to see your application running. The page will automatically reload as you make changes.

### Building for Production

Build the application for production:
```bash
npm run build
```

### Starting the Production Server

Start the production server:
```bash
npm start
```

### Linting

Check code quality and style:
```bash
npm run lint
```

## Project Structure

- `app/` - Next.js app directory with layouts and pages
- `components/` - Reusable React components
- `public/` - Static assets
- `data/` - Data files and constants
- `hooks/` - Custom React hooks
- `utils/` - Utility functions
- `tailwind.config.ts` - Tailwind CSS configuration
- `next.config.mjs` - Next.js configuration

## Technologies Used

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Tabler Icons, Heroicons, React Icons
- **Animations**: Framer Motion
- **Internationalization**: next-i18next
- **Theme**: next-themes
- **UI Components**: Radix UI

## Environment Setup

Create a `.env.local` file in the root directory if needed for any environment variables.

## Development Tips

- Hot reload is enabled - changes to files will automatically refresh the browser
- ESLint is configured for code quality checks
- TypeScript is used for type safety
- The application uses Tailwind CSS for styling
- Internationalization support is included with i18next

## License

[Add your license here]
