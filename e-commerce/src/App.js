import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';
import ProdiuctScreen from './screens/ProdiuctScreen';
import CartScreen from './screens/CartScreen';
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProdiuctScreen} />
          <Route path="/cart/:id?" component={CartScreen} /> 
        </Container>   
      </main>
      <Footer />
    </Router>
  );
}

export default App;
