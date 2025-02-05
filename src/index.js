import sdk from "@twa-dev/sdk";
import React from "react";
import ReactDOM from "react-dom/client"; // Импортируем createRoot
import App from "./App";

console.log("Telegram SDK:", sdk); // Проверим, импортируется ли библиотека
sdk.ready(); // Убедимся, что SDK инициализировано

const root = ReactDOM.createRoot(document.getElementById("root")); // Создаем корень с createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
