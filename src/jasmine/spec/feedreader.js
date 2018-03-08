/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This tests whether or not the URL
         * property is set within all indexes from
         * the allFeeds JSON object.
         */
        it('URL properly set', function(){
          for(let i = 0; i < allFeeds.length; i++){
            expect(allFeeds[i].url.length).toBeGreaterThan(0);
            expect(allFeeds[i].url).toBeDefined();
          }

        });


        /* This tests whether or not the Name
         * property is set within all indexes from
         * the allFeeds JSON object.
         */
        it('Name properly set',function(){
          for(let i = 0; i < allFeeds.length; i++){
            expect(allFeeds[i].name.length).toBeGreaterThan(0);
            expect(allFeeds[i].name).toBeDefined();
          }
        });

    });


    /* "The menu" Test Suite */
    describe('The menu',function(){


        /* This tests whether or not the menu HTML
         * element is hidden to the user by default.
         */
         it('menu is hidden by default', function(){
           const elem = document.querySelector('body');

           expect(hasClass(elem,'menu-hidden')).toBe(true);
         });

         /* This tests that when the user clicks on
          * the menu icon link, the menu is shown to * the user. And if menu icon clicked
          * again, the menu is hidden.
          */
          it('menu hides and shows when clicked', function(){
            //clicks the icon
            document.querySelector('.menu-icon-link').click();

            //Tests when menu is showing
            expect(document.querySelector('body').className).toBe('');

            //clicks the menu icon again
            document.querySelector('.menu-icon-link').click();

            //Tests whether the menu-hidden class is there again
            expect(document.querySelector('body').className).toBe('menu-hidden');

          });

    });
    /* Initial Entries test suite */
    describe('Initial Entries',function(){
      //Set the container variable
      let container;

      //Ensure the async function runs before conducting tests
      beforeEach(function(done){
        container = $('.feed');
        loadFeed(0);
        done();
      });

         /*This test ensures that when the the feed is
          * loaded, at least 1 element (entry) exists
          * within the feed container.
          */
         it('async load feed is providing data',function(done){
           expect(container.length).toBeGreaterThan(0);
           //Adding the done to async call.
           done();
         });
    });
    /* New Feed Test Suite */
    describe('New Feed Selection', function(){
      beforeEach(function(done){
        setTimeout(function(){
          loadFeed(0);
          done();
        },2500);
      });
        /* This test ensures that when properties
         * are set, they are all unique and change
         * as the feed continues to be loaded.
         */
         it('new feed is loaded properly', function(){
           //Gather all entries
           let entries = document.querySelectorAll('.entry-link');
           //Check for unique entries url
           for(let x = 0; x < entries.length; x++){
             for(let y = x+1; y < entries.length; y++){
               expect(entries[x].getAttribute('href')).not.toBe(entries[y].getAttribute('href'));
             }
           }
         });
    });
}());
