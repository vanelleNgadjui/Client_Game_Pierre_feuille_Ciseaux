import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { io } from "socket.io-client";
import { SocketContextProvider } from './context/SocketContext';

// Connexion au serveur WebSocket
const socket = io('http://localhost:8080');

ReactDOM.render(
  <BrowserRouter>
    <SocketContextProvider socket={socket}>
      <App />
    </SocketContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
