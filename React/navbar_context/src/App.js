import FormWrapper from './components/FormWrapper';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import './App.css';
import React, { useState } from "react";

function App() {
  return (
    <Wrapper>
      <Navbar />
      <FormWrapper />
    </Wrapper>
  );
}

export default App;
