import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HeadLine from './components/headline/HeadLine';
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
            <HeadLine header="Title" description="Content description" />
            <Posts />
          </section>
          <Footer />
        </div>
      </Provider>
    );
  }

}

export default App;