// example of scope pollution in practice
// it's bad. here's an example below. 
// don't get in the habit of using global variables that could ruin your code. 

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars)

//prints: 
// Night Sky: The Moon, Sirius, The Milky Way
// Sirius (Sirius should be North Star)
// but since we've done global pollution our code is messed up. 


// here's another example of a bad way to use scope pollution
// example from :  

let num = 50;

const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100
