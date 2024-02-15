// Adjust the import path as necessary
import { authors } from './data.js';

class BookPreview extends HTMLElement {
  connectedCallback() {
    const book = JSON.parse(this.getAttribute('data-book'));
    this.innerHTML = `
      <button class='preview' data-preview='${book.id}'>
        <img class="preview__image" src="${book.image}" />
        <div class="preview__info">
          <h3 class="preview__title">${book.title}</h3>
          <div class="preview__author">${authors[book.author]}</div>
        </div>
      </button>
    `;
    this.querySelector('button').addEventListener('click', this.handlePreviewItemClick.bind(this));
  }

  handlePreviewItemClick() {
    console.log('button has been clicked');
  }
}

customElements.define('book-preview', BookPreview);
