<!-- omit in toc -->
# Table of content
- [Features](#features)
- [Usage](#usage)
- [DWA7 Changes Made](#dwa7-changes-made)
  - [Changes Made to Implement SOLID Principles in setTheme Function:](#changes-made-to-implement-solid-principles-in-settheme-function)
  - [Changes Made to Implement SOLID Principles in toggleOverlay Function:](#changes-made-to-implement-solid-principles-in-toggleoverlay-function)
  - [Changes Made to Implement SOLID Principles in handlePreviewItemClick Function:](#changes-made-to-implement-solid-principles-in-handlepreviewitemclick-function)

<!-- omit in toc -->
# My Book Catalog App

Welcome to the My Book Catalog App! This app allows you to search and browse a collection of books. You can filter books by genre, author, and title, and view detailed information about each book. Additionally, you can switch between day and night themes for a personalized reading experience.

## Features

- 💚 Search for books based on genre, author, and title.
- 🫎 Browse a collection of books with detailed previews.
- 📅 Switch between day and night themes for optimal reading comfort.




## Usage
1. Clone the repository to your local machine:


## DWA7 Changes Made
    
### Changes Made to Implement SOLID Principles in setTheme Function:

1. Single Responsibility Principle (SRP):
   - Simplified setTheme function to only handle determining the current color scheme.
   - Moved the actual theme application logic into separate classes named DarkThemeApplier and LightThemeApplier. Each class now handles applying the theme based on the color scheme.
   - This change ensures that each part of the code has a clear and single responsibility: setTheme figures out the color scheme, while the theme appliers apply the appropriate theme.

2. Open/Closed Principle (OCP):
   - Made setTheme function open for extension but closed for modification.
   - Created a common interface called ThemeApplier for theme appliers and implemented specific theme appliers like DarkThemeApplier and LightThemeApplier that follow this interface.
   - Now, new theme appliers can be added without changing the existing code. This promotes flexibility and makes it easier to maintain and extend the codebase.

3. Liskov Substitution Principle (LSP):
   - Ensured that DarkThemeApplier and LightThemeApplier classes can be substituted for their base class (ThemeApplier) without causing any issues in the program.
  - This ensures that we can easily switch between different theme appliers without worrying about breaking anything. It makes the code more flexible and easier to work with.


### Changes Made to Implement SOLID Principles in toggleOverlay Function:
   - Busy with it

### Changes Made to Implement SOLID Principles in handlePreviewItemClick Function:
   - Busy with it