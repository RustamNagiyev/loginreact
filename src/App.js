import './App.css';
import UserLogin from './UserLogin';
import React from "react";
import ReactDOM from "react-dom";


function App() {

  const handleSubmit = (email, password) => {
  console.log(`Email: ${email}, Password: ${password}`);
};
console.log("salam");
ReactDOM.render(
  <React.StrictMode>
    <UserLogin onSubmit={handleSubmit} />
  </React.StrictMode>,
  document.getElementById("root")
);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
