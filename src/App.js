import React from 'react';
import './App.css';

import{ Footer, Blog, Possibility, About, Features, Header} from './containers';
import{ Article, Brand, Cta, Feature, Navbar } from './components';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>

        </div>
        {/* <Brand/> */}
        <About/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>

    </div>
  )
}

export default App