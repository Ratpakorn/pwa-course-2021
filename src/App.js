import React, { useState } from 'react';
import './App.css';
import {Link} from "react-router-dom";

function App() {

const [text,setText] = useState("");

const [lines, setLines] = useState(["Welcome to my Lobby"]);



const onTextChange = (event) => {
    setText(event.target.value);
};

const onSend = () => {
  setLines(line => [...lines,text]);
    setText("")
}

    

  return (
    <div className="App col-12">
      <div className="App-header">
          <div className="profile-read-ju-on"></div>
          <div className="RoomName">Room Ju-on</div>
          <div className="RoomID">RID 123456</div>
          <div className="profile-read-tar"></div>
          <div className="profile-read-pruek"></div>
          <div className="profile-read-phai"></div>
          <div className="Chat-header"></div>
          </div>
      <div className="App-chatroom">
        {
          lines.map(x=>{
          return <div className="App-chatroom-text">
              {x}
          </div>
          })
        }

      </div>
      <div className="App-textbox">
          <div className="App-Botton col-3"></div>
        <input type="text" placeholder="Type Ready to Start!" className="App-textbox-input col-10" value = {text} onChange={onTextChange}/>
        <div className="App-textbox-send col-2" onClick={onSend}>Send!</div>
            
      </div>
    </div>
  );
}

export default App;
