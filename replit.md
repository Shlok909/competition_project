# Overview

This is a React-based web application called "RTMNU विद्यार्थी योजना ॲप" (RTMNU Student Scheme App), designed to provide information about student schemes, employment opportunities, and educational opportunities. The application is built as a full-stack solution with Express.js backend and React frontend, featuring a modern UI with Hindi language support and animations.

# User Preferences

Preferred communication style: Simple, everyday language.

## Design Preferences (Updated August 10, 2025)
- Student-friendly design with vibrant colors (purple, pink, yellow gradients)
- Eye-attractive interface that appeals to students
- Easy to understand navigation and interactions
- Multi-language support (English, Hindi, Marathi)
- Smooth animations and modern UI effects

## User Experience Requirements
- Founder introduction screen (2.5 seconds) with Rashtrasant Tukadoji Maharaj
- Splash screen with permanent "Get Started" button (no auto-redirect)
- Language selection functionality in splash screen
- All text should change based on selected language throughout the app
- IMPORTANT: The specific Marathi verse "या भारतात बंधुभाव नित्य वसू दे | हे सर्व पंथ - संप्रदाय एक दिसू दे | मतभेद नसू दे ||" must NEVER change and always remain in Marathi regardless of language selection

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development and building
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **Routing**: Wouter for client-side routing with founder intro → splash screen → main app flow
- **State Management**: TanStack Query (React Query) for server state management + Context API for language
- **Internationalization**: Custom React Context with translations for English, Hindi, Marathi
- **Animations**: Framer Motion for smooth transitions and interactive animations
- **Styling**: Tailwind CSS with custom design tokens and student-friendly gradient color scheme
- **Fonts**: Google Fonts integration with Noto Sans Devanagari for proper Indic script support

## Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **Database ORM**: Drizzle ORM configured for PostgreSQL with migrations support
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development
- **Session Management**: Express sessions with PostgreSQL store (connect-pg-simple)
- **Development Setup**: Vite middleware integration for seamless development experience

## Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon Database serverless connection
- **ORM**: Drizzle ORM with schema-first approach and Zod validation
- **Migration System**: Drizzle Kit for database schema migrations
- **Development Storage**: In-memory storage implementation for rapid prototyping

## Authentication and Authorization
- **Session-based Authentication**: Express sessions with secure cookie configuration
- **Database Integration**: User management through Drizzle ORM with PostgreSQL backend
- **Storage Abstraction**: Interface-based user CRUD operations for flexible implementation

## Project Structure
- **Monorepo Layout**: Client, server, and shared code in organized directories
- **Shared Schema**: Common TypeScript types and Zod schemas in `/shared` directory
- **Path Aliases**: Configured aliases for clean imports (@, @shared, @assets)
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared code

## Build and Deployment
- **Development**: Concurrent client and server development with hot reload
- **Production Build**: Vite build for client, esbuild for server bundling
- **Asset Management**: Optimized asset handling with proper caching strategies
- **Environment Configuration**: Environment-based configuration for database and services

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Connection**: @neondatabase/serverless for optimized serverless connections

## UI and Styling
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide Icons**: Modern icon library for consistent iconography
- **Framer Motion**: Advanced animation library for smooth transitions

## Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment optimizations for Replit platform

## Form and Data Management
- **React Hook Form**: Performant form library with validation
- **Zod**: Schema validation for type-safe data handling
- **TanStack Query**: Server state synchronization and caching
- **Date-fns**: Date manipulation and formatting utilities

## Utility Libraries
- **Class Variance Authority**: Type-safe variant API for component styling
- **clsx**: Conditional className utility for dynamic styling
- **CMDK**: Command palette component for enhanced user experience