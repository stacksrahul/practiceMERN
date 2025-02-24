// Arrays, Destructuring, Destructuring in function parameter list, Spread operator, Control Structure

// Arrays

const hobbies = ["playing", "studying", "bingeing", "walking"];
console.log(hobbies);

// const hobby1 = hobbies[0];
// console.log(`First hobby is ${hobby1}.`);

// For Destructuring arrays, we initialize our variables also grouped in an array
const [hobby1, hobby2, hobby3, hobby4] = hobbies;

console.log(`First hobby is ${hobby1}.`);
console.log(`Second hobby is ${hobby2}.`);
console.log(`Thrid hobby is ${hobby3}.`);
console.log(`Fourth hobby is ${hobby4}.`);


// Create a car object and manipulate its properties using it's internal methods
const car = {
    model: "Volkswagen",
    color: "Red",
    repaintCar(newColor) {
        this.color = newColor;
    }
};

console.log(car);
console.log(car.color);

car.repaintCar("Grey");     // Repaint the car to Grey
console.log(car.color);


// Destructuring above car object

const {model: carModel, carColor, carRepaint} = car;

console.log(`The model of the car is ${carModel}.`);
console.log(`The color of the car is ${carColor}.`);
console.log(`Let's repaint this ${carColor} car with color "Yellow".`);
// carRepaint();
console.log(`Now the color of the car is ${carColor}.`);


