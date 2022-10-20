import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const newButtonColor =
    buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div>
      <button
        style={{ backgroundColor: isBtnDisabled ? 'gray' : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isBtnDisabled}>
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input
        type='checkbox'
        id='disable-button-checkbox'
        defaultChecked={isBtnDisabled}
        onChange={(e) => setIsBtnDisabled(e.target.checked)}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
