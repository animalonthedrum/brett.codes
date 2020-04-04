import React, { Fragment, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  useLocation
} from "react-router-dom";
import {AnimatePresence, motion} from 'framer-motion';
import Scrollbar from './Scrollbar';

function RouteTransition(props){
  
  const pageVariants = {
    initial: {
      opacity: 0,
      y: "-80vh",
      scale: 0.8
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      y: "80vh",
      scale: 1.2
    }
  };
  
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
  };
  
  const pageStyle = {
    position: "absolute"
  };
  return (
    <motion.div
    style= {pageStyle}
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    >
  {props.children}
  </motion.div>
  )
}



export default function Nav() {
  const [toggleState, setToggleState] = useState("closed");
  

  function toggle() {
    setToggleState(toggleState === "closed" ? "open" : "closed");
    if(toggleState === 'closed'){
      document.body.classList.add('menu-open');
      document.body.classList.remove('menu-closed');
    }
    if(toggleState === 'open'){
      document.body.classList.add('menu-closed');
      document.body.classList.remove('menu-open');
    }
  }

  useEffect(() => {
    var isScrolling;
    const stopScroll = () => {
      window.clearTimeout( isScrolling );

      isScrolling = setTimeout(function() {
        document.body.classList.add('stopShow');
      }, 1000);
      document.body.classList.remove('stopShow');
    }
    window.addEventListener("scroll", stopScroll);
    return () => {
      window.removeEventListener("scroll", stopScroll);
    };
  }, []);

  return (
    
    <Router>
    <Fragment>
    <Scrollbar name='navbar'>
      <nav className={`nav ${toggleState}`} >
      <div className='navTitle'>
      <Link to="/">BRETT.CODES</Link>
      </div>
      
      <button className='menuToggle' onClick={toggle}>
        <span></span>
        <span></span>
      </button>
      <div className='menu' onClick={toggle}>
      <Link to="/" onClick={toggle}>Home</Link>
        <ul>
          <li>
            <NavLink activeClassName='active' to="/about" onClick={toggle}>About</NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to="/work" onClick={toggle}>Work</NavLink>
          </li>
        </ul>
      </div>
      </nav>
      </Scrollbar>

        <AnimatePresence>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
          <About />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="*" onChange={toggle}>
            <NoMatch />
          </Route>
        </Switch>
        </AnimatePresence>
    </Fragment>
    </Router>
  )
}

function Home() {
  return (
    <RouteTransition>
      <div>
        <h1>HOME</h1>
      </div>
      <div>
        <h2>hey ya this is the home page</h2>
      </div>
    </RouteTransition>
  )
}
function About() {
    return (
      <RouteTransition>
        <h1>ABOUT</h1>
        <h1>ABOUT</h1>
        <h1>ABOUT</h1>
        <h1>ABOUT</h1>
      </RouteTransition>
    )
  }

function Work() {
  return (
    <RouteTransition>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    <h3>Work</h3>
    </RouteTransition>
  )
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
      <h1>Woah stranger that isnt a page</h1>
      <Link to='/'>Why dont ya get ya ass home jerome</Link>
    </div>
  );
}
