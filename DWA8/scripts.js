/**
 * Changes made to the code to Implement SOLID Principles have been explained in the "info.md" file
 */

// @ts-check

import { books, authors, genres, BOOKS_PER_PAGE } from './data.js';

let page = 1;
let matches = books;

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

/**
 * Create a document fragment containing genre options.
 * @returns {DocumentFragment} - The created document fragment.
 */
function createGenreOptions() {
    const genreOptionsHtml = document.createDocumentFragment();  // Renamed variable
    const firstGenreElement = document.createElement('option');
    firstGenreElement.value = 'any';
    firstGenreElement.innerText = 'All Genres';
    genreOptionsHtml.appendChild(firstGenreElement);

    for (const [id, name] of Object.entries(genres)) {
        const element = document.createElement('option');
        element.value = id;
        element.innerText = name;
        genreOptionsHtml.appendChild(element);
    }

    return genreOptionsHtml;
}

/**
 * Create a document fragment with options.
 * @param {string} defaultOptionText - The text for the default option.
 * @param {Object} data - The data object containing options.
 * @returns {DocumentFragment} - The created document fragment.
 */

function createOptionsDocumentFragment(defaultOptionText, data) {
    const optionsFragment = document.createDocumentFragment();
    const defaultOptionElement = createOptionElement('any', defaultOptionText);
    optionsFragment.appendChild(defaultOptionElement);

    for (const [id, name] of Object.entries(data)) {
        const element = createOptionElement(id, name);
        optionsFragment.appendChild(element);
    }

    return optionsFragment;
}

/**
 * Create an option element.
 * @param {string} value - The value for the option.
 * @param {string} text - The text for the option.
 * @returns {HTMLOptionElement} - The created option element.
 */
function createOptionElement(value, text) {
    const element = document.createElement('option');
    element.value = value;
    element.innerText = text;
    return element;
}

/**
 * Append a document fragment to a specified dropdown.
 * @param {string} selector - The selector for the dropdown.
 * @param {DocumentFragment} fragment - The document fragment to append.
 */
function appendToDropdown(selector, fragment) {
    document.querySelector(selector).appendChild(fragment);
}

// Create a document fragment for preview buttons
const starting = document.createDocumentFragment();

// Display the first page of books
for (const book of matches.slice(0, BOOKS_PER_PAGE)) {
    const element = createPreviewButton(book);
    starting.appendChild(element);
}

// Append preview buttons to the list items container
document.querySelector('[data-list-items]').appendChild(starting);

// Create a document fragment containing genre options
const genreHtml = createGenreOptions();

// Append genre options to the search genres dropdown
appendToDropdown('[data-search-genres]', genreHtml);

// Create a document fragment with author options
const authorsHtml = createOptionsDocumentFragment('All Authors', authors);

// Append author options to the search authors dropdown
appendToDropdown('[data-search-authors]', authorsHtml);





/**
 * Set theme properties based on prefers-color-scheme using the provided theme applier.
 * @param {ThemeApplier} themeApplier - The theme applier object implementing the ThemeApplier interface.
 */
class ThemeApplier {
    /**
     * Method to apply the dark theme.
     */
    applyDarkTheme() {
        throw new Error('Method not implemented.');
    }

    /**
     * Method to apply the light theme.
     */
    applyLightTheme() {
        throw new Error('Method not implemented.');
    }
}

/**
 * Class for applying dark theme.
 * @implements {ThemeApplier}
 */
class DarkThemeApplier extends ThemeApplier {
    /**
     * Apply dark theme.
     */
    applyDarkTheme() {                                                                                                  //Changed to override the applyDarkTheme method to set the dark theme styles.
        document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
        document.documentElement.style.setProperty('--color-light', '10, 10, 20');
    }

    /**
     * Method to apply the light theme.
     * Overriding base class method to ensure consistency.
     */
    applyLightTheme() {
        // No implementation needed for dark theme applier
        // Keeping this method for consistency with the interface
    }
}

/**
 * Class for applying light theme.
 * @implements {ThemeApplier}
 */
class LightThemeApplier extends ThemeApplier {
    /**
     * Apply light theme.
     */
    applyLightTheme() {
        document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
        document.documentElement.style.setProperty('--color-light', '255, 255, 255');
    }

    /**
     * Method to apply the dark theme.
     * Overriding base class method to ensure consistency.
     */
    applyDarkTheme() {
        // No implementation needed for light theme applier
        // Keeping this method for consistency with the interface
    }
}

/**
 * Set theme properties based on prefers-color-scheme.
 */
function setTheme() {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeElement = document.querySelector('[data-settings-theme]');
    const themeApplier = isDarkMode ? new DarkThemeApplier() : new LightThemeApplier();

    themeElement.value = isDarkMode ? 'night' : 'day';
    themeApplier.applyDarkTheme(); // Always applying dark theme initially
}





/**
 * Update 'Show more' button text and state.
 */
function updateShowMoreButton() {
    const listButton = document.querySelector('[data-list-button]');
    const remaining = Math.max(0, matches.length - (page * BOOKS_PER_PAGE));
    
    listButton.innerText = `Show more (${books.length - BOOKS_PER_PAGE})`;
    listButton.disabled = remaining > 0;
    listButton.innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${remaining})</span>
    `;
}

/**
 * Toggle the visibility of the overlay identified by the given selector.
 * @param {string} selector - The selector for the overlay.
 * @param {HTMLElement} focusElement - The element to focus on when the overlay opens.
 */
function toggleOverlay(selector, focusElement = null) {
    const overlay = document.querySelector(selector);
    
    if (overlay) {
        overlay.open = !overlay.open;
        if (focusElement) focusElement.focus();
    }
}

/**
 * Handle form submission for changing theme.
 * @param {Event} event - The form submission event.
 */
function handleThemeChange(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { theme } = Object.fromEntries(formData);
    
    if (theme === 'night') {
        document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
        document.documentElement.style.setProperty('--color-light', '10, 10, 20');
    } else {
        document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
        document.documentElement.style.setProperty('--color-light', '255, 255, 255');
    }
    
    toggleOverlay('[data-settings-overlay]');
}

/**
 * Handle form submission for searching.
 * @param {Event} event - The form submission event.
 */
function handleSearch(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    const result = [];
    
    for (const book of books) {
        let genreMatch = filters.genre === 'any';
        
        for (const singleGenre of book.genres) {
            if (genreMatch) break;
            if (singleGenre === filters.genre) { genreMatch = true; }
        }
        
        if (
            (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) && 
            (filters.author === 'any' || book.author === filters.author) && 
            genreMatch
        ) {
            result.push(book);
        }
    }
    
    page = 1;
    matches = result;
    
    const listMessage = document.querySelector('[data-list-message]');
    const listItems = document.querySelector('[data-list-items]');
    
    if (result.length < 1) {
        listMessage.classList.add('list__message_show');
    } else {
        listMessage.classList.remove('list__message_show');
    }
    
    listItems.innerHTML = '';
    const newItems = document.createDocumentFragment();
    
    for (const { author, id, image, title } of result.slice(0, BOOKS_PER_PAGE)) {
        const element = createPreviewButton({ author, id, image, title });
        newItems.appendChild(element);
    }
    
    listItems.appendChild(newItems);
    updateShowMoreButton();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    toggleOverlay('[data-search-overlay]');
}

/**
 * Handle 'Show more' button click.
 */
function handleShowMore() {
    const fragment = document.createDocumentFragment();
    const startIdx = page * BOOKS_PER_PAGE;
    const endIdx = (page + 1) * BOOKS_PER_PAGE;

    for (const { author, id, image, title } of matches.slice(startIdx, endIdx)) {
        const element = createPreviewButton({ author, id, image, title });
        fragment.appendChild(element);
    }

    document.querySelector('[data-list-items]').appendChild(fragment);
    page += 1;
}

/**
 * Handle click on a preview item.
 * @param {Event} event - The click event.
 */
function handlePreviewItemClick(event) {
    const pathArray = Array.from(event.path || event.composedPath());
    let active = null;
    
    for (const node of pathArray) {
        if (active) break;
        
        if (node?.dataset?.preview) {
            active = books.find((book) => book.id === node.dataset.preview);
        }
    }
    
    if (active) {
        const listActive = document.querySelector('[data-list-active]');
        const listBlur = document.querySelector('[data-list-blur]');
        const listImage = document.querySelector('[data-list-image]');
        const listTitle = document.querySelector('[data-list-title]');
        const listSubtitle = document.querySelector('[data-list-subtitle]');
        const listDescription = document.querySelector('[data-list-description]');
        
        listActive.open = true;
        listBlur.src = active.image;
        listImage.src = active.image;
        listTitle.innerText = active.title;
        listSubtitle.innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
        listDescription.innerText = active.description;
    }
}

// Add event listeners
document.querySelector('[data-search-authors]').appendChild(authorsHtml);
setTheme();
updateShowMoreButton();
document.querySelector('[data-search-cancel]').addEventListener('click', () => toggleOverlay('[data-search-overlay]'));
document.querySelector('[data-settings-cancel]').addEventListener('click', () => toggleOverlay('[data-settings-overlay]'));
document.querySelector('[data-header-search]').addEventListener('click', () => toggleOverlay('[data-search-overlay]', document.querySelector('[data-search-title]')));
document.querySelector('[data-header-settings]').addEventListener('click', () => toggleOverlay('[data-settings-overlay]'));
document.querySelector('[data-list-close]').addEventListener('click', () => toggleOverlay('[data-list-active]'));
document.querySelector('[data-settings-form]').addEventListener('submit', handleThemeChange);
document.querySelector('[data-search-form]').addEventListener('submit', handleSearch);
document.querySelector('[data-list-button]').addEventListener('click', handleShowMore);
document.querySelector('[data-list-items]').addEventListener('click', handlePreviewItemClick);
