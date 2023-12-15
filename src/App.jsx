import React from "react";
import { Navbar } from "./components";
import {Landing} from "./components";
import './App.css'
import Companies from "./components/Companies";

const App = () => {
  return ( 
    <div className="bg-slate-900">
      <Navbar/>
      <Landing/>
      <Companies/>
    </div>
   );
}
 
export default App;