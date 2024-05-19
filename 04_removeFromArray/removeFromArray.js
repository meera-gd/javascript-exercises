const removeFromArray = function(array, ...items) {
	return array.filter(e => items.indexOf(e) === -1);
};

// Do not edit below this line
module.exports = removeFromArray;
