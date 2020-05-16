
/*

For this quiz, can you use this script, which is linked in the <head> of index.html,
to change the boring placeholder image to a picture of a cute animal?

Remember, you'll need to pass a function into the jQuery object to run
when the document is ready.

Unfortunately, placepuppy is no longer available. Here's a link to a random
animal image on lorempixel.com:
http://lorempixel.com/350/150/animals/

Good luck!

*/
function func() {
	$("img").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Seine_and_Eiffel_Tower_from_Tour_Saint_Jacques_2013-08.JPG/275px-Seine_and_Eiffel_Tower_from_Tour_Saint_Jacques_2013-08.JPG");
}

$(func);