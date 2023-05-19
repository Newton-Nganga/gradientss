import { useRef, useState } from "react";
import { FiCopy, FiGithub } from "react-icons/fi";
import {SlRefresh} from 'react-icons/sl'


import useGenerateGradients from "./Utils/useGenerateGradients";
function App() {
  //const copy = useRef({ index: "", state: false });

   const [copy,setCopy] = useState({index:'',state:false})
  function handleCopy(col, index) {
   
    setCopy({ index: index, state: true })
    navigator.clipboard.writeText(col);
    setTimeout(() => setCopy({ index: "", state: false }), 2000);
  }
  
  const handleReload =()=>window.location.reload()

  const { grad } = useGenerateGradients(30);

  return (
    <section>
      <h1 className="header">Gradientss</h1>

      {/* //map over the gradients*/}
      <div className="display">
        {grad?.map((gradient, index) => {
          return (
            <button
              key={"grad" + index}
              style={{ background: gradient }}
              className="hue-color"
              onClick={e => {
                e.preventDefault()
                handleCopy(gradient,'grad'+index);
              }}
            >
              {(copy.state === true) && (copy.index === "grad" + index) ? (
                <div className="copied">
                  <FiCopy />
                  <p>copied</p>{" "}
                </div>
              ) : (
                <div className="copied">
                  <FiCopy />
                  <p>click to copy</p>{" "}
                </div>
              )}
            </button>
          );
        })}
      </div>

      
      <div className="git-repo">
        <a href="https://github.com/Newton-Nganga/gradientss.git">
          <FiGithub />
          Github
        </a>
      </div>
      <div className="brandy">
        <span>🥳</span> by Newton
      </div>
      <button className="refresh" onClick={handleReload}>
          <SlRefresh/> 
      </button>
    </section>
  );
}

export default App;
