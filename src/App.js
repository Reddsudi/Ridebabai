import Login from "./login";
import Signup from "./signup";
import {BrowserRouter, Routes, Route} from  "react-router-dom";


export default function App(){

  return(

     <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
        </BrowserRouter>
      
     </div>
 )

  }

