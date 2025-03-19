# The Clubhouse Website

A modern, responsive website for The Clubhouse - London's premier business club and workspace.

## Features

- Responsive design for all device sizes
- Modern UI built with Next.js, Tailwind CSS, Shadcn UI, and Framer Motion
- Animated hero section with video background
- Interactive components with smooth animations
- Search engine optimized

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd clubhouse-main
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Add media assets:
   - Add video file `clubhouse-hero.mp4` to the `/public/videos/` directory
   - Add image files to the `/public/images/` directory:
     - `workspace.jpg` - Main workspace image
     - `location-1.jpg` - Mayfair location image
     - `location-2.jpg` - Bank location image
   
   See placeholder text files in the respective directories for detailed specifications.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/src/app` - Next.js app router pages and layouts
- `/src/components` - React components
- `/src/components/ui` - Shadcn UI components
- `/public` - Static assets like images and videos

## Customization

### Adding New Pages

Create new pages in the `/src/app` directory. For example:
- `/src/app/about/page.js` for an About page
- `/src/app/contact/page.js` for a Contact page

### Modifying the Theme

Tailwind CSS styles can be adjusted in:
- `tailwind.config.js` - Main theme configuration
- `src/app/globals.css` - Global CSS styles

## Deployment

This website can be deployed with any platform that supports Next.js applications, such as Vercel, Netlify, or AWS Amplify.

For optimal performance, consider using a CDN to serve the video and image assets.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - Component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## License

This project is proprietary and confidential.
