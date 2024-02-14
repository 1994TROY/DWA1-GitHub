<!-- omit in toc -->
# Table of content
- [Features](#features)
- [Usage](#usage)
- [DWA8 Changes Made](#dwa8-changes-made)
  - [Changes Made to encapsulated abstraction of the book preview:](#changes-made-to-encapsulated-abstraction-of-the-book-preview)
  - [Encapsulated Abstraction of Book Preview](#encapsulated-abstraction-of-book-preview)
- [New vs Old Code](#new-vs-old-code)



<!-- omit in toc -->
# My Book Catalog App

Welcome to the My Book Catalog App! This app allows you to search and browse a collection of books. You can filter books by genre, author, and title, and view detailed information about each book. Additionally, you can switch between day and night themes for a personalized reading experience.

## Features

- 💚 Search for books based on genre, author, and title.
- 🫎 Browse a collection of books with detailed previews.
- 📅 Switch between day and night themes for optimal reading comfort.



## Usage
1. Clone the repository to your local machine:


## DWA8 Changes Made 
    
### Changes Made to encapsulated abstraction of the book preview:

   This file provides an overview of the changes made to the codebase, explaining the rationale behind each modification and highlighting the implementation of an encapsulated abstraction for the book preview functionality.

### Encapsulated Abstraction of Book Preview
In the original version of the code, the functionality to display a preview of a book was contained within the createPreviewButton function. However, in order to follow the principle of encapsulation and to enhance the code's maintainability and reusability, a new function called createBookPreview was created. This new function serves as a single factory for generating book previews, making the code more organized and easier to manage.


## New vs Old Code
```javascript

New Code

/**
 * An encapsulated abstraction of the book preview using a single factory function as requested in DWA8
 *
 * @param {Object} book - The book object containing author, id, image, and title.
 * @returns {HTMLElement} - The created book preview element.
 */
function createBookPreview(book) {
    const element = document.createElement('button');
    element.classList = 'preview';
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
    element.addEventListener('click', handlePreviewItemClick);

    return element;
}



OLD CODE


/**
 * Create a preview button element.
 * @param {Object} book - The book object containing author, id, image, and title.
 * @returns {HTMLElement} - The created button element.
 */
function createPreviewButton({ author, id, image, title }) {                                
    const element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview', id);

    element.innerHTML = `
        <img
            class="preview__image"
            src="${image}"
        />
        
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `;

    return element;
}
