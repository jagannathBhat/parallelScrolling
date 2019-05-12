/*
	moveElems() creates a new child .slides-inner element in .slides and moves
	all other child elements of .slide to .slide-inner.
	
	This is important because if the .slide element was fixed to the top,
	it would reduce the document length and cause unexpected results.
	By keeping .slide in it's place and fixing .slide-inner to the top,
	this problem can be avoided.
*/
let moveElems = function() {
	document.querySelectorAll(".slide").forEach(function(elem) {
		var childElem = document.createElement("div");
		childElem.classList.add("slide-inner");
		childElem.append(elem.children[0].cloneNode(true));
		elem.removeChild(elem.childNodes[1]);
		elem.append(childElem);
	});
};

/*
	slides() checks if a slide's top is out of view.
	Once it is out of view, the slide is a given a 'slide--fixed' class which
	fixes the slide's child to the top.
	Once it is back in view, the 'slide--fixed' class is removed.
 */
let slides = function() {
	document.querySelectorAll(".slide").forEach(function(elem) {
		if(elem.offsetTop <= window.scrollY) {
			elem.classList.add("slide--fixed");
		}
		else {
			elem.classList.remove("slide--fixed");
		}
	});
};

window.onload = function() {
	moveElems();
	slides();
};

window.onresize = window.onscroll = slides;