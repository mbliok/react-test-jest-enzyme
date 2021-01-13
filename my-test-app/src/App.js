import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Posts from './components/post/Posts';
import './App.css';

//const store = createStore(() => [], {}, applyMiddleware());

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <section className="main">
            <Sidebar header="NIKE AIR MAX 270 GS" price="299.00" />
            <Posts />
          </section>
          <Footer />
        </div>
      </Provider>
    );
  }

}

export default App;