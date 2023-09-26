
import Hero from './components/molecules/Hero';
import Text from './components/molecules/Text';
import Footer from './components/molecules/Footer';
import ImgGroup from './components/molecules/ImgGroup';
import HeaderWrapper from './components/molecules/HeaderWrapper';


export default function Home() {
  return (
    <main className="flex flex-col overflow-y-hidden">
      
      <HeaderWrapper />
      <div id="home">
      <Hero />
      </div>
      <div id="sobre">
      <Text />
      </div>
      <div id="servicos">
      <ImgGroup />
      </div>
      <Footer />
    </main>
  );
}
