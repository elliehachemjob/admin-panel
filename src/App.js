import React, {
  Component,
  useState,
  createRef,
  useEffect,
  useRef,
} from "react";

import "./App.css";
import ChatContent from "./ChatContent";
import ChatList from "./ChatList";

function App() {


  
  return (
    <div className="__main">
    <div className="main__chatbody">

      <ChatList/>
      <ChatContent/>
      
    </div>
    </div>

  );
}

export default App;
