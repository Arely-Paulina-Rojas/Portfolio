import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, WorksMobile } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <div className = "hidden sm:flex">
          <Works/>
        </div>
        <div className = "sm:hidden">
          <WorksMobile/>
        </div>
        <Contact/>
      </div>
    </BrowserRouter>
  )
}

export default App
