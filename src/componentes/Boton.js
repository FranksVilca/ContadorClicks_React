import React from 'react';

function Boton({texto,esBotonDeClic}) {
    return (
      <button
        className={esBotonDeClic ? 'Boton-clic' : 'boton-reiniciar'}>
        {texto}
      </button>
    )
}