import './App.css';
import { Outlet } from "react-router-dom";
import Approutes from "./Approutes";

function App(){

  return(

    <>
      <Outlet/>
      <Approutes/>
      <div className="go-top">
        <a href="#" className="go-to-top" aria-label="go-to-top">
          <i class="bi bi-arrow-up"></i>
        </a>
      </div>
    </>

  )

}

export default App