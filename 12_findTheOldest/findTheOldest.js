function age(person) {
	return (person.yearOfDeath ?? (new Date()).getFullYear()) - person.yearOfBirth;
}

const findTheOldest = function(people) {
	return people.reduce((oldest, next) => {
		if (age(oldest) > age(next)) {
			return oldest;
		} else {
			return next;
		}
	});
};

// Do not edit below this line
module.exports = findTheOldest;
