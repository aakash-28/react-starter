import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppName from "./components/AppName";

function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />

        <div class="container text-center">
          <div class="row">
            <div class="col-6">
              <input type="text" placeholder="Enter to do here"></input>
            </div>
            <div class="col-4">
              <input type="date"></input>
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-success">
                Add
              </button>
            </div>
          </div>

          <div class="row">
            <div class="col-6">Buy milk</div>
            <div class="col-4">4/10/2023</div>
            <div class="col-2">
              <button type="button" class="btn btn-danger">
                Delete
              </button>
            </div>
          </div>

          <div class="row">
            <div class="col-6">Go to college</div>
            <div class="col-4">4/10/2023</div>
            <div class="col-2">
              <button type="button" class="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
