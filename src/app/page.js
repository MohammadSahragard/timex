//* components
import Button from '@/components/ui/Button';
import LastPrice from '@/components/ui/LastPrice';
import Price from '@/components/ui/Price';
import NavLink from '@/components/ui/NavLink';
import Logo from '@/components/ui/Logo';
import Title from '@/components/ui/Title';
import Subtitle from '@/components/ui/Subtitle';
import ProductName from '@/components/ui/ProductName';
import QuickLink from '@/components/ui/QuickLink';
import PageLink from '@/components/ui/PageLink';
import Heading from '@/components/ui/Heading';
import Rate from '@/components/ui/Rate';
import SmallTitle from '@/components/ui/SmallTitle';
import Tooltip from '@/components/ui/Tooltip';
import ArrowButton from '@/components/ui/SliderButton';
import SlideCounter from '@/components/ui/SliderCounter';
import SectionTitle from '@/components/ui/SectionTitle';



export default function Home() {
  return (
    <main className="flex flex-col flex-wrap items-start justify-start min-h-screen gap-4 p-24">
      <Logo />

      <Button>Button</Button>

      <Price value={98} />
      <LastPrice value={116} />

      <NavLink href='/'>Home</NavLink>
      <NavLink href='/about'>About</NavLink>

      <Tooltip content='Custom tooltip' placement='bottom'><Title>this is title</Title></Tooltip>
      <Subtitle>This is subtitle</Subtitle>

      <ProductName>The Timex UFC</ProductName>

      <SmallTitle>Small Title</SmallTitle>
      <QuickLink href='/'>Quick Link</QuickLink>
      <PageLink href='/'>Page Link</PageLink>
      <PageLink href='/' isButton>Page Link</PageLink>

      <Heading>The Heading Component</Heading>

      <Rate value={4} />

      <ArrowButton />
      <ArrowButton orientation='right' />

      <SlideCounter />

      <SectionTitle>Section Title</SectionTitle>
    </main>
  )
}
