//import { LitElement, html, css } from "./lit-html";
import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

/**
 * @element tally-app
 * @prop {number} count
 */
class TallyApp extends LitElement {
    static properties = {
        count: {type: Number},
      };

           
static styles = css `
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #add,
  #subtract,
  .reset {
    font-size: 20px;
    padding: 10px 20px;
    margin: 10px;
    border: none;
    color: #000;
    cursor: pointer;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }

  #add {
    background: linear-gradient(145deg, #f9f9f9, #e0e0e0);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
  }

  #subtract {
    background: linear-gradient(145deg, #f9f9f9, #e0e0e0);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
  }

  #count {
    width: 100px;
    text-align: center;
    font-size: 30px;
    padding: 30px;
    margin: 20px auto;
    background-color: #f9f9f9;
    color: #000;
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.1),
      inset -5px -5px 10px rgba(255, 255, 255, 0.7);
    border: none;
    border-radius: 8px;
  }

  .body {
    background-color: #f5f5f5;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    padding: 20px;
  }

  .header {
    text-align: center;
    text-decoration: none;
    font-size: 24px;
    color: #333;
    padding: 20px 0;
  }

  .reset {
    background: linear-gradient(145deg, #f9f9f9, #e0e0e0);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  }

  /* Enhancements for interaction */
  #add:hover,
  #subtract:hover,
  .reset:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  }

  #add:active,
  #subtract:active,
  .reset:active {
    transform: scale(0.95);
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2);
  }

`
    constructor() {
        super()
        this.count = 0;
    }

    /**
     * @returns {any}
     */
    render() {
return html `
<div class="body">
<h1 class="header">Tally App</h1>
    <p id="count">${this.count}</p>
        <button id="add" @click=${this._addTally}>+</button>
        <button id="subtract" @click=${this._subtractTally}>-</button>
    <button class="reset" @click=${this._resetTally}>Reset</button>
    </div>
`
}
_addTally(e) {
    if (this.count === 15) {
        button.disabled == true
    } else {
        this.count++;
    }
  }

  _subtractTally(e) {
    if (this.count === -14) {
        button.disabled == true
    } else {
        this.count--;
    }
  }
  _resetTally(e) {
    this.count = 0;
  }}

customElements.define("tally-app", TallyApp)