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


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL properly set', function(){
          for(let i = 0; i < allFeeds.length; i++){
            expect(allFeeds[i].url.length).toBeGreaterThan(0);
            expect(allFeeds[i].url).toBeDefined();
          }

        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Name properly set',function(){
          for(let i = 0; i < allFeeds.length; i++){
            expect(allFeeds[i].name.length).toBeGreaterThan(0);
            expect(allFeeds[i].name).toBeDefined();
          }
        });

    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu',function(){


        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('menu is hidden by default', function(){
           expect(document.querySelector('body').className).toBe('menu-hidden');
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
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
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries',function(){
      //Set the container variable
      let container;

      //Ensure the async function runs before conducting tests
      beforeEach(function(done){
        container = $('.feed');
        loadFeed(0);
        done();
      })
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         it('async load feed is providing data',function(done){
           expect(container.length).toBeGreaterThan(0);
           //Adding the done to async call.
           done();
         })
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
      beforeEach(function(done){
        setTimeout(function(){
          loadFeed(0);
          done();
        },2500);
      });
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
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