import React from "react";
import "./App.css";
import IntroJumbotron from "./components/IntroJumbotron/IntroJumbotron";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <div className="App">
      <IntroJumbotron />
      <ContactForm />
    </div>
  );
}

export default App;
