import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import store from './redux/store';
import Header from './components/header/Header';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="App">
        <h1>Acid Playhouse</h1>
      </div>
    </Provider>
  );
};

export default App;
