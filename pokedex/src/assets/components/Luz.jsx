// Luz.jsx
import { useState, useEffect } from "react";

export default function Luz({ color }) {
  const [luzPisca, setLuzPisca] = useState(false);

  useEffect(() => {
    if (color === "red") {
      const intervalo = setInterval(() => setLuzPisca(prev => !prev), 500);
      return () => clearInterval(intervalo);
    }
  }, [color]);

  let estiloFinal = {
    width: "55px",
    height: "50px",
    borderRadius: "50%",
    transition: "all 0.3s ease-in-out"
  };

  if (color === "blue") {
    estiloFinal.background = "radial-gradient(circle, #4db8ff 40%, #0066cc 100%)";
    estiloFinal.boxShadow = "0 0 15px 5px rgba(0, 153, 255, 0.8)";
  } else if (color === "green") {
    estiloFinal.background = "radial-gradient(circle, #66ff66 40%, #009900 100%)";
    estiloFinal.boxShadow = "0 0 15px 5px rgba(0, 255, 0, 0.8)";
  } else if (color === "red") {
    estiloFinal.background = luzPisca
      ? "radial-gradient(circle, #ff4d4d 40%, #990000 100%)"
      : "radial-gradient(circle, #cc0000 40%, #660000 100%)";
    estiloFinal.boxShadow = luzPisca
      ? "0 0 20px 8px rgba(255, 0, 0, 0.9)"
      : "0 0 10px 4px rgba(255, 0, 0, 0.6)";
  }



  return <div className="luz" style={estiloFinal}></div>;
}
