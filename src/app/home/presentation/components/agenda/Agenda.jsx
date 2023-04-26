import React from 'react';

/* External Libraries */
import { useNavigate } from "react-router-dom";


const Agenda = () => {
  const navigate = useNavigate();
  return (
    <div>
       <button onClick={() => navigate(-1)}>
          Volver atras
        </button>
      Agenda
    </div>
  );
};

export default Agenda;