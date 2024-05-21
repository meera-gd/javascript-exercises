const palindromes = function (string) {
	const stripped = string.toLowerCase().replace(/[ \t\n,.!?]/g, '');
	return stripped.split('').reverse().join('') === stripped;
};

// Do not edit below this line
module.exports = palindromes;
