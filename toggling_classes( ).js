/*
For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

You must use jQuery's toggleClass method!
*/

// don't change these variable!
var article2, article3;

// your code goes here!
article2 = $(".featured");
article3 = $(".featured").next();
article3.toggleClass("featured");
article2.toggleClass("featured");