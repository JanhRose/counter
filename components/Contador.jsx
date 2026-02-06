import { useState } from "react";
import "../src/contador.css";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <div className="container">
        <div className="d-flex text-center justify-content-center align-items-center vh-100 pb-5">
          <button
            className="circle-btn"
            onClick={() => {
              setContador((prev) => (prev >= 9999 ? 0 : contador + 1));
            }}
          >
            <svg className="progress-ring" width="140" height="140">
              <circle className="ring" cx="70" cy="70" r="65" />
            </svg>
            <span key={contador}>{contador}</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Contador;
