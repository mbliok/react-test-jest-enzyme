import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HeadLine from './components/headline/HeadLine';


function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <HeadLine header="Title" description="Content description" />
      </section>
      <Footer />
    </div>
  );
}

export default App;