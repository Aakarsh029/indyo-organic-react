import React from 'react';
import './App.css';
import './components/index.css';
import './components/media.css';
import './components/form.css';
import './components/testimonials.css';
import Navbar from './components/navbar';
import Home from './components/2dhome';
import Aboutt from './components/about';
import Counter from './components/counter';
import Carousal3d from './components/3dcarousal';
import Testimonials from './components/testimonials';
import Form from './components/form';
function App() {
  return (
    <React.Fragment>
    <Navbar />
    <Home />
    <Aboutt />
    <Counter />
    <Carousal3d />
    <Testimonials />
    <Form />
    </React.Fragment>

  );
}

export default App;
