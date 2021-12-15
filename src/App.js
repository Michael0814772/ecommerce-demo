import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import Additem from './components/Additem';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Items from './components/Items';
import Navigation from './components/Navigation';
import { persistor, store } from './reducer/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation />
          <Router>
            <Switch>
              <Route path="/" exact>
                <Items />
              </Route>
              <Route path="/additem" >
                <Additem />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </PersistGate>
      </Provider>
    </div>
    // <Route path="/" component={Items} exact />
    // <Route path="/additem" component={Additem} />
    // <Route path="/cart" component={Cart} />
  );
}

export default App;
