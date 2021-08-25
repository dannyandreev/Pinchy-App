import React from 'react';
import { isPropertySignature } from 'typescript';
import './App.css';
import Collection from './Pages/Collection';
import HomePage from './Pages/Home';

interface props {
  text: string;
  url: string;
}


function App() {
  return (
    <div className="bg-gradient-to-tr flex flex-col text-white from-purple-400 to-blue-500 min-h-screen">
      <NavBar/>
      {/* <HomePage/> */}
      <Collection/>
      <Footer/>
    </div>
  );
}

function Footer(){
  return(
    <div className="py-8 border-t border-opacity-25 border-white mt-20">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-white">
          <div className="">Pinchy © 2021 All rights reserved.</div>
          <a href="legal" className="block text-white">Legal</a>
        </div>
      </div>
    </div>
  )
}

function NavBar() {
  const [scrollTop, setScrollTop] = React.useState(false);
  const [navOpen, setNavOpen] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      if (currentPosition > 0) { // if at the top of the page
        setScrollTop(false);
      } else {

        setScrollTop(true);
      }

    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });


  return (
    <div className={`fixed top-0 left-0 right-0 z-10 transition ${scrollTop ? "bg-transparent" : "bg-blue-500"}`}>
      <div className="py-4 px-4 flex items-center container mx-auto max-w-screen-xl justify-between">
        <div></div>
        <div className="hidden md:flex items-center">
          <NavButton
            text="Add to Chrome"
            url="Add to Chrome"/>
          <NavButton
            text="App Store"
            url="App Store"/>
          <NavButton
            text="Play Store"
            url="Play Store"/>
        </div>
        <div className="hidden">
            <img src={navOpen ? "./icons/close.png" : "./icons/menu.png"} className="h-10 cursor-pointer" alt="" onClick={()=> setNavOpen(!navOpen)}/>
        </div>
      </div>
    </div>

  );
}

function NavButton(props: props) {
  return (
    <div className="mx-4">
      <a href={props.url} target="_blank" rel="noreferrer">
        <div className="w-full border-2 rounded-full flex flex-row justify-center py-2 px-3 items-center border-white">
          <p className="text-white">{props.text}</p>
        </div>
      </a>
    </div>
  )
}

export default App;
