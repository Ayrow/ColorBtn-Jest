import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isBtnDisabled}>
        Change to {newButtonColor}
      </button>
      <input
        type='checkbox'
        onChange={(e) => setIsBtnDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
