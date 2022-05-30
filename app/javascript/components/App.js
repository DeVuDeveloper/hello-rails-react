import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Greeting from './Greeting';


class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Homepage />} />
          <Route path="/greetings" element={<Greeting greeting = 'Test 1' />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App

