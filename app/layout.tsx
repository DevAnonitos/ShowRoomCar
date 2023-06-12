import './globals.css';
import Head from 'next/head';
import { Footer, Navbar } from '@/components';

export const metadata = {
  title: 'ShowroomCar',
  description: "Discover world's best car showcase application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
};
