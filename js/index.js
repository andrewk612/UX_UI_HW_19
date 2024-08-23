console.log("You're index.js file is loaded correctly!")

function populateChyron() {
	const snippets = [
		"<span class='serif'><p3>My Resume</p3></span>","<span><p2>My Resume</p2></span>"
        
	];

	let snippetContainer = "";
	for (let i = 0; i < snippets.length; i++) {
		snippetContainer += `<div class="ticker-item">${snippets[i]} • &nbsp;&nbsp;&nbsp;</div>`;
	}
	//write tickers to page
	const chyron = document.querySelector(".ticker");
	chyron.innerHTML = snippetContainer;

	//get length in characters of all snippets
	const snipJoin = snippets.join();
	characterLength = snipJoin.length;

	// set length of animation in ms to length of all snippet characters
	// multiplied by multiplier (150)
	chyron.style.animation = `${characterLength * 150}ms ticker linear infinite`;
}
populateChyron();
