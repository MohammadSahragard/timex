import { Roboto } from 'next/font/google';
import './globals.css';
import '@/FontAwesome.Pro.6.4.2/css/all.css';

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] });

export const metadata = {
  title: 'Timex',
  description: 'Watch store',
  image: '/public/fav-icon.svg'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>{children}</body>
    </html>
  );
};