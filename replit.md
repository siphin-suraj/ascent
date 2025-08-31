# Overview

This is a full-stack React application for Ascent Group, a wholesale and retail supplier based in Riyadh, Saudi Arabia. The application serves as a company website showcasing their services (footwear, plywood, travel & tourism, safety equipment, industrial clothing, and logistics) with a contact form system for customer inquiries.

The application is built with a modern tech stack featuring React with TypeScript on the frontend, Express.js as the backend API server, and includes a comprehensive contact management system with form validation and data persistence.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The client-side application uses **React 18** with **TypeScript** and is built with **Vite** as the build tool. The architecture follows a component-based structure with:

- **Routing**: Uses `wouter` for client-side routing with pages for Home, Services, About, and Contact
- **UI Framework**: Implements **shadcn/ui** components with **Radix UI** primitives for accessibility
- **Styling**: **Tailwind CSS** with custom CSS variables for theming and responsive design
- **State Management**: **TanStack Query (React Query)** for server state management and API calls
- **Forms**: **React Hook Form** with **Zod** validation for type-safe form handling

The frontend is organized into:
- `/pages` - Route components (home, services, about, contact, not-found)
- `/components/ui` - Reusable UI components from shadcn/ui
- `/components/sections` - Business logic components (hero, services grid, contact form)
- `/components/layout` - Layout components (navbar, footer)

## Backend Architecture

The server uses **Express.js** with **TypeScript** running on **Node.js**. Key architectural decisions include:

- **API Design**: RESTful API structure with `/api` prefix
- **Database Layer**: **Drizzle ORM** configured for **PostgreSQL** with type-safe schema definitions
- **Data Storage**: Abstracted storage interface with both in-memory implementation (for development) and database support
- **Validation**: Server-side validation using **Zod** schemas shared between client and server
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

The backend provides endpoints for:
- `POST /api/contact` - Contact form submission with validation
- `GET /api/contact-messages` - Retrieve all contact messages (admin functionality)

## Data Storage Solutions

- **Database**: **PostgreSQL** with **Neon Database** serverless integration
- **ORM**: **Drizzle ORM** with TypeScript-first approach and automatic migrations
- **Schema**: Shared schema definitions between frontend and backend using **drizzle-zod**
- **Development Storage**: In-memory storage implementation for development/testing

Database tables include:
- `users` - User authentication (prepared for future use)
- `contact_messages` - Customer inquiry storage with full contact details

## Authentication and Authorization

The application has infrastructure prepared for user authentication but currently operates without authentication requirements. The schema includes a users table with username/password fields, suggesting future authentication implementation.

## Build and Deployment Strategy

- **Development**: Vite dev server with HMR for frontend, tsx for backend development
- **Production Build**: 
  - Frontend: Vite build process generating static assets
  - Backend: esbuild bundling for Node.js deployment
- **Environment**: Monorepo structure with shared TypeScript configuration

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database for production
- **Drizzle Kit**: Database migration and schema management tools

## UI and Styling
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Accessible component primitives for complex UI components
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Vite**: Frontend build tool and development server
- **esbuild**: Fast JavaScript bundler for backend production builds
- **TypeScript**: Type system for both frontend and backend
- **ESLint/Prettier**: Code quality and formatting tools

## Form and Data Handling
- **React Hook Form**: Performant forms with easy validation
- **Zod**: TypeScript-first schema validation library
- **TanStack Query**: Data fetching and caching solution

## Third-party Integrations
- **Font Awesome**: Icon fonts for additional iconography
- **Google Fonts**: Custom typography (Inter, Outfit, Space Grotesk)
- **Unsplash**: High-quality stock imagery for service showcases
- **WhatsApp**: Direct messaging integration for customer support

The application is designed to be easily deployable on Replit with automatic environment detection and includes development-specific features like runtime error overlays and cartographer integration.