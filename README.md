# Blogify

A modern, responsive blog app built with [Next.js](https://nextjs.org/) (App Router), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/).

## Features

- **Homepage**: Lists blog posts fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) at build time.
- **Dynamic Post Pages**: Each post has its own statically generated page.
- **About & Contact Pages**: Static pages with clean, responsive design.
- **Contact Form**: Validates input and shows a success alert.
- **Responsive Layout**: Mobile-first, accessible, and beautiful on all devices.
- **SEO**: Each page has a unique `<title>` and `<meta name="description">`.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Hermela440/-blogify.git
cd -blogify
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Deployment

This project is ready to deploy on [Vercel](https://vercel.com/):

1. Push your code to GitHub.
2. Import your repo at [vercel.com/import/git](https://vercel.com/import/git).
3. Vercel will auto-detect Next.js and deploy your site.

## Project Structure

- `src/app/` - App Router pages and layouts
- `src/components/` - Reusable UI components
- `src/app/page.tsx` - Homepage
- `src/app/posts/[id]/page.tsx` - Dynamic post pages
- `src/app/about/page.tsx` - About page
- `src/app/contact/page.tsx` - Contact page

## Customization

- Update the API endpoint in `src/app/page.tsx` and `src/app/posts/[id]/page.tsx` to use your own backend.
- Edit Tailwind config in `tailwind.config.js` for custom themes.

## License

MIT
