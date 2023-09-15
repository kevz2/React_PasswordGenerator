import useApp from './generatePassword';
import './styles.css';
import React, { useState } from "react";

function App() {

  const [passwordProperties, setPasswordProperties] = useState({
    length: 8,
    uppercaseLetters: false,
    lowercaseLetters: false,
    numbers: false,
    symbols: false
  });

  const {password, errorMessage, generatePassword} = useApp();


  function changeLength(newVal) {
    setPasswordProperties({
      ...passwordProperties,
      length: newVal
    });
  }

  function changeUppercase() {
    setPasswordProperties({
      ...passwordProperties,
      uppercaseLetters: !passwordProperties.uppercaseLetters
    });
  }

  function changeLowercase() {
    setPasswordProperties({
      ...passwordProperties,
      lowercaseLetters: !passwordProperties.lowercaseLetters
    });
  }

  function changeNumbers() {
    setPasswordProperties({
      ...passwordProperties,
      numbers: !passwordProperties.numbers
    });
  }

  function changeSymbols() {
    setPasswordProperties({
      ...passwordProperties,
      symbols: !passwordProperties.symbols
    });
  }

  function copyPassword() {
    navigator.clipboard.writeText(password);
  }


  return (
    <div className="app">

      <div className="header">
        <h3>Password Generator</h3>
      </div>

      <div className="container">

        <div className="password-box">
          <input type="text" value={password} placeholder="" autoComplete="off" readOnly/>
        </div>

        {errorMessage !== "" && 
          <p className="error-message-box">{errorMessage}</p>
        }

        <div className="criteria">

          <div className="password-length-part criterion">
            <label>Password Length</label>
            <input type="number" min="8" max="50" value={passwordProperties.length} 
              onChange={function(event) {
                changeLength(event.target.value)
              }}
            />
          </div>

          <div className="uppercase-part criterion checkbox">
            <label>Uppercase Letters</label>
            <input type="checkbox" checked={passwordProperties.uppercaseLetters} 
              onChange={function() {
                changeUppercase()
              }}
            />
          </div>

          <div className="lowercase-part criterion checkbox">
            <label>Lowercase Letters</label>
            <input type="checkbox" checked={passwordProperties.lowercaseLetters} 
              onChange={function() {
                changeLowercase()
              }}
            />
          </div>

          <div className="numbers-part criterion checkbox">
            <label>Numbers</label>
            <input type="checkbox" checked={passwordProperties.numbers} 
              onChange={function() {
                changeNumbers()
              }}
            />
          </div>

          <div className="symbols-part criterion checkbox">
            <label>Symbols</label>
            <input type="checkbox" checked={passwordProperties.symbols} 
              onChange={function() {
                changeSymbols()
              }}
            />
          </div>

        </div>

        <br />

        <div className="buttons">
          <button className="generate-btn button" 
            onClick={function() {generatePassword(passwordProperties)}}>Generate Password</button>
          <button className="copy-btn button" onClick={function() {copyPassword()}}>Copy Password</button>
        </div>

      </div>

    </div>
  );
}

export default App;
