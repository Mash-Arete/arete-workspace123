# Arete Workspace

A modern workspace booking platform built with Next.js 14, Tailwind CSS, and Supabase.

## Features

- 🏢 Browse and book workspaces, meeting rooms, and virtual offices
- 🗺️ Interactive map integration with Mapbox
- 📅 Real-time availability calendar
- 💳 Secure payment processing with Stripe
- 🔐 User authentication with Supabase
- 📱 Fully responsive design
- 🎨 Modern UI with Framer Motion animations
- ⭐ Review and rating system

## Tech Stack

- **Frontend:**
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS
  - Shadcn/ui components
  - Framer Motion
  - Lucide Icons

- **Backend:**
  - Supabase (Auth, Database, Storage)
  - Stripe (Payments)
  - Mapbox (Maps)
  - Google Places API (Location search)

## Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Supabase account
- Stripe account
- Mapbox account
- Google Cloud account (for Places API)

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# Mapbox
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token

# Google Places API
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your_google_places_api_key
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/arete-workspace.git
   cd arete-workspace
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up your environment variables as described above.

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # User dashboard
│   ├── workspaces/        # Workspace listings and details
│   └── bookings/          # Booking management
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── layout/           # Layout components
│   ├── workspaces/       # Workspace-related components
│   └── bookings/         # Booking-related components
├── lib/                  # Utility functions and configurations
│   ├── supabase/        # Supabase client and helpers
│   ├── stripe/          # Stripe integration
│   └── utils/           # Utility functions
└── types/               # TypeScript type definitions
```

## Database Schema

### Workspaces
```sql
create table workspaces (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  location text not null,
  price decimal not null,
  capacity integer not null,
  amenities jsonb,
  images text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

### Bookings
```sql
create table bookings (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users not null,
  workspace_id uuid references workspaces not null,
  start_date timestamp with time zone not null,
  end_date timestamp with time zone not null,
  status text not null,
  total_price decimal not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

### Reviews
```sql
create table reviews (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users not null,
  workspace_id uuid references workspaces not null,
  rating integer not null,
  comment text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/)
- [Stripe](https://stripe.com/)
- [Mapbox](https://www.mapbox.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
