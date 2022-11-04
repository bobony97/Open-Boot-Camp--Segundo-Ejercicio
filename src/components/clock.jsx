import React, { useState, useEffect } from "react";

const Clock = () => {
  const datos = {
    fecha: new Date(),
    edad: 0,
    nombre: "Martin",
    apellido: "San Jose",
  };

  const [dato, setDato] = useState(datos);

  useEffect(() => {
    const interval = setInterval(() => {
      setDato({
        ...dato,
        edad: dato.edad + 1,
        fecha: new Date()
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [dato]);

  return (
    <div>
      <h2>
        Hora Actual:
        {dato.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {dato.nombre} {dato.apellido}
      </h3>
      <h1>Edad: {dato.edad}</h1>
    </div>
  );
};

export default Clock;
