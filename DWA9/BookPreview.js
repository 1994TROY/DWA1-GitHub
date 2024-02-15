import { authors} from './data.js';

class BookPreview extends HTMLElement {
  connectedCallback() {
    const book = JSON.parse(this.getAttribute('data-book'));
    const previewElement = this.createBookPreview(book);
    this.appendChild(previewElement);
  }

  createBookPreview(book) {
    const container = document.createElement('div');
    container.classList.add('preview-container');

    const element = document.createElement('button');
    element.classList.add('preview');
    element.setAttribute('data-preview', book.id);

    element.innerHTML = `
        <img
            class="preview__image"
            src="${book.image}"
        />
        
        <div class="preview__info">
            <h3 class="preview__title">${book.title}</h3>
            <div class="preview__author">${authors[book.author]}</div>
        </div>
    `;

    // Add event listener for click event
    element.addEventListener('click', () => this.handlePreviewItemClick(book));

    container.appendChild(element);
    return container;
  }

  handlePreviewItemClick(book) {
    console.log(`Preview for ${book.title} has been clicked`);
    // Implement further actions here, such as opening a detailed view
  }
}

customElements.define('book-preview', BookPreview);
