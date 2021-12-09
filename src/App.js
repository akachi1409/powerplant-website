// import logo from './logo.svg';
import './App.css';

//import components
import Header from './components/header/header';
import Team from './components/team/team';
import JoinCommunity from './components/join-community/join-community';
import Footer from './components/footer/footer';
import RoadMap from './components/roadmap/roadmap';
import TopItems from './components/top-items/top-items';
import Mint from './components/mint/mint';
import About from './components/about/about';
import Meet from './components/meet/meet';
import FounderThing from './components/founderthing/founderthing';
import Utility from './components/utility/utility';
import State from './components/state/state';
import il from './assets/CenterPic.png';
import Partners from './components/partners/footer';
import Metaverse from './components/metaverse/metaverse';
import './assets/newStyle.css';
import './assets/mainstyle.css'

function App() {
  return (
    <div>
      <Header />
      {/* <img className="thePicture" src={il}/> */}
      <State />
      <About />
      <Utility className="utilitysec"/>
      <Meet />

      <Mint />
      {/* <TopItems /> */}
      <RoadMap />
      <Metaverse/>

      {/* <FounderThing /> */}
      <Team />
      {/* <JoinCommunity /> */}
      <Partners />
      <Footer />
    </div>
  );
}
// FONT REPLACEMENT
// @font-face {
//   font-family: newThing;
//   src: url(/src/components/header/ArchivoNarrow-VariableFont_wght.ttf);
// }

export default App;
