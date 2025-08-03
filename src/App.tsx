import AOS from "aos";
import "aos/dist/aos.css";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import {
  About,
  Contact,
  Footer,
  Header,
  Main,
  Profile,
  Skills,
  Work,
} from "./components";

function App() {
  AOS.init({
    duration: 500,
    easing: "ease-out-back",
  });
  return (
    <>
      <ReactLenis root />
      <Header />
      <Main>
        <Profile />
        <About />
        <Skills />
        <Work />
        <Contact />
      </Main>
      <Footer />
    </>
  );
}

export default App;
