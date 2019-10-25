
var cheerio = require("cheerio");
var Nightmare = require('nightmare');

// First, tell the console what server.js is doing
console.log("\n***********************************\n" +
    "Grabbing every thread name and link\n" +
    "from reddit's webdev board:" +
    "\n***********************************\n");

// Making a request via axios for reddit's "webdev" board. We are sure to use old.reddit due to changes in HTML structure for the new reddit. The page's Response is passed as our promise argument.
var scrape = new Nightmare({
    show: true,
    waitTimeout: 1000 * 4
})
    .goto("https://www.theguardian.com/us/lifeandstyle")
    .evaluate(function () {
        return document.body.innerHTML;
    }).end().then(function (html) {

        // Load the Response into cheerio and save it to a variable
        // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
        var $ = cheerio.load(html);

        // An empty array to save the data that we'll scrape
        var results = [];

        // With cheerio, find each p-tag with the "title" class
        // (i: iterator. element: the current element)
        $("h3.fc-item__title").each(function (i, element) {

            // Save the text of the element in a "title" variable
            var title = $(element).text();

            // In the currently selected element, look at its child elements (i.e., its a-tags),
            // then save the values for any "href" attributes that the child elements may have
            var link = $(element).children().eq(0).attr("href");
            $(".fc-item__standfirst").each(function (y, element) {
                var text = $(element).text()
                // if (!link.includes('https://old.reddit.com/r/webdev')) {
                //     link = "https://old.reddit.com/r/webdev" + link;
                // }

                // Save these results in an object that we'll push into the results array we defined earlier
                results.push({
                    title: title,
                    link: link,
                    text: text

                });

            })
        });

        // Log the results once you've looped through each of the elements found with cheerio
        console.log(results);
    });
