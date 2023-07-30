import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Service from './Service';
import Contact from './Contact';
import Gallery from './Gallery';
import Footer from './Footer';



const App = () => {
    return(
        <>
<Navbar/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/gallery" component={Gallery} />
        </Switch>
<Footer/>
        </>
    );

}

export default App;
