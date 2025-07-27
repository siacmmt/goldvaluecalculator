import React, { useState } from 'react';

function OuroCalculator() {
  const [valorGrama, setValorGrama] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const valor = parseFloat(valorGrama) * parseFloat(peso);
    setResultado(valor.toFixed(2));
  };

  return (
    <div>
      <div>
        <label>Valor da Grama (R$): </label>
        <input type="number" value={valorGrama} onChange={e => setValorGrama(e.target.value)} />
      </div>
      <div>
        <label>Peso (g): </label>
        <input type="number" value={peso} onChange={e => setPeso(e.target.value)} />
      </div>
      <button onClick={calcular}>Calcular</button>
      {resultado && <p>Total: R$ {resultado}</p>}
    </div>
  );
}

export default OuroCalculator;
