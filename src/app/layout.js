// public
import { Roboto } from 'next/font/google';
import './globals.css';
import '@/FontAwesome.Pro.6.4.2/css/all.css';
import Providers from './providers';

// components
import MainNavbar from '@/components/shared/navbar and menu/MainNavbar';
import Menu from '@/components/shared/navbar and menu/Menu';
import FullMenu from '@/components/shared/modals/FullMenu';
import SearchBar from '@/components/shared/modals/SearchBar';

// font
const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] });

// metadata
export const metadata = {
  title: 'Timex',
  description: 'Watch store',
  image: '/public/fav-icon.svg'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} overflow-x-hidden`}>
        <Providers>

          <MainNavbar />
          <Menu />
          {/* modals */}
          <FullMenu />
         <SearchBar /> 

          <main className='app min-h-screen'>
            {children}
          </main>

        </Providers>
      </body>
    </html>
  );
};