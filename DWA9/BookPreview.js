
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
    // Implement the logic that should happen on click
    // This might involve showing more details about the book, for example
    console.log('Preview item clicked. Implement the desired behavior here.');
  }
}

customElements.define('book-preview', BookPreview);
