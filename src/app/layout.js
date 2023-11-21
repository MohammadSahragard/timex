// public
import { Roboto } from 'next/font/google';
import './globals.css';
import '@/FontAwesome.Pro.6.4.2/css/all.css';
import Providers from './providers';

// components
import MainNavbar from '@/components/shared/navigation-bar/MainNavbar';
import Menu from '@/components/shared/navigation-bar/Menu';
import FullMenu from '@/components/shared/modals/FullMenu';
import SearchBar from '@/components/shared/modals/SearchBar';
import Footer from '@/components/shared/footers/Footer';
import Basket from '@/components/shared/modals/Basket';

// font
const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] });


export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`app ${roboto.className} overflow-x-hidden`}>
        <Providers>

          <MainNavbar />
          <Menu />
          {/* modals */}
          <FullMenu />
          <SearchBar />
          <Basket />

          <main className='min-h-screen'>
            {children}
          </main>

          <Footer />

        </Providers>
      </body>
    </html>
  );
};