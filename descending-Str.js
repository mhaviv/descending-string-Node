var star = '*';

function starNumber(starCount){
	stars = star.repeat(starCount);
	for(var i = stars.length; i >= 0; i--){
		setTimeout(function(i){
			// created israel map in colors library
				// added it as property to colors.js 
				// added it as object to extendStringPrototype.js
			console.log(stars.israel.underline.italic); 
			stars = stars.slice(0, -1)
		}, 1300 * i);	
	}
}

module.exports = starNumber