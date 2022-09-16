/** @format */

import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Weather />
        <footer>
          This project was created by{" "}
          <a
            href='https://melodious-narwhal-23c1bb.netlify.app/'
            target='_blank'>
            Viktoriia Prominska
          </a>{" "}
          and is{" "}
          <a
            href='https://github.com/ViktoriiaProm/westher-react-app-first'
            target='_blank'>
            open-source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
