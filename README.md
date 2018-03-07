# Unit Tests For RSS Feed Reader App

## Tests For:
#### RSS Feeds -
  1. Are Defined
    * This tests whether or not the allFeeds variable within App.JS is defined.
  2. URL is set properly
    * This tests whether or not the URL property is set within all indexes from the allFeeds JSON object.
  3. Name is set properly
    * This tests whether or not the Name property is set within all indexes from the allFeeds JSON object.


#### The Menu -
  1. Menu is hidden by default
    * This tests whether or not the menu HTML element is hidden to the user by default.
  2. Menu * when clicked * is properly shown and hidden to the user
    * This tests that when the user clicks on the menu icon link, the menu is shown to the user. And if menu icon clicked again, the menu is hidden.


#### Initial Entries -
  1. async load feed is providing data
    * This test ensures that when the the feed is loaded, at least 1 element (entry) exists within the feed container.


#### New Feed Selection -
  1. new feed is loaded properly
    * This test ensures that when properties are set, they are all unique and change as the feed continues to be loaded.

## Gulp Build Instructions:
#### To Develop:
- Use 'gulp watch'
  - This will open up browserSync and watch for any changes

#### To Build:
- Use 'gulp'
  - This will minify & concatenate JS & CS files as well as move files into 'dist' repository

## Contributors:

  * All Unit Test Implemented by Jonathan Deleon
  * Application Code Written and provided by Udacity

#### Want to contribute? Open a thread request.
