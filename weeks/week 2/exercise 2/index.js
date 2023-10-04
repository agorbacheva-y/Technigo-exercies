// Functions + Conditionals Exercise

/*
1)
Declare a function called theCoders that takes a driver and a navigator as arguments and 
prints out "The awesome coders for today is the driver Nella and the navigator Tom" 
Where Nella represents the first argument passed in and Tom the second.
When you've set that up, invoke the function to see if it works.
*/

const theCoders = (driver, navigator) => {
  console.log(`The awesome coders for today is the driver ${driver} and the navigator ${navigator}.`);
}

theCoders("Nella", "Tom");


/*
  2)
  Pass in only ONE name when you call the function and see what happens.
  (HINT, you should get undefined...)
  */
theCoders("Nella");
// second argument is undefined

/*
  3) 
  create a function that checks which name is the longest when comparing the coders 
  and print out: "The driver has the longest name." or "The navigator has the longest name" 
  or if the names ar the same length "The driver and the navigator has equally long names"
  */
 const longestName = (driver, navigator) => {
  let driverLength = driver.length;
  let navigatorLength = navigator.length;

  if (driverLength > navigatorLength) {
    console.log("The driver has the longest name.");
  } else if (navigatorLength > driverLength) {
    console.log("The navigator has the longest name");
  } else {
    console.log("The driver and the navigator has equally long names");
  }
 };

longestName("nella", "tom");
longestName("nella", "michelangelo");
longestName("marks", "nella");

/*
  4) 
  to get user input you can use the prompt() and then store that into a variable.
  Such as 
  let userAge = prompt('How old are you?')
  Create a function that prompts the user for its age, then depending on the age will alert back different messages such as 
  alert('wow you are 33! that's young!')
  or alert('23! Younger than Zlatan') or something like that.
  Add as many conditonals as you want.
  */

  //using if else
  const howOldAreYou = () => {
    let userAge = prompt("How old are you?");

    if (userAge === 21) {
      console.log(`You are 21 years old! - to be young`);
    } else if (userAge >= 21 && userAge <= 30) {
      console.log(`Enjoy your 20's - :)`);
    } else if (userAge >= 31 && userAge <= 80) {
      console.log(`Always try to stay active both physically and mentally!`);
    } else if (userAge < 20) {
      console.log(`Enjoy your early School years`);
    } else {
      console.log(`Sit back and relax!`);
    }
  };

  howOldAreYou();

// using switch
let howOldAreYouSwitch = () => {
  let userAge = prompt("How old are you? - Using Switch Statement");
  console.log(userAge);

  switch (parseInt(userAge)) {
    case 21:
      console.log(`You are 21 years old! - to be young`);
      break;
    case userAge >= 21 && userAge <= 30:
      console.log(`Enjoy your 20's - :)`);
      break;
    case userAge >= 31 && userAge <= 80:
      console.log(`Always try to stay active both physically and mentally!`);
      break;
    case userAge < 20:
      console.log(`Enjoy your early School years`);
      break;
    default:
      console.log(`Sit back and relax!`);
      break;
  }
};

howOldAreYouSwitch();

// using ternary
let howOldAreYouTernary = () => {
  let userAge = prompt("How old are you? - Using Ternary");
  console.log(userAge);

  userAge === "21"
    ? console.log("You are 21 years old! - to be young")
    : userAge >= 21 && userAge <= 30
    ? console.log("Enjoy your 20's - :)")
    : userAge >= 31 && userAge <= 80
    ? console.log("Always try to stay active both physically and mentally!")
    : userAge < 20
    ? console.log("Enjoy your early School years")
    : console.log("Sit back and relax!");
};

howOldAreYouTernary();

// if else with typecheching
let howOldAreYouWithValidation = () => {
  let userAge = prompt("How old are you? - With Validation");

  // Check if userAge is a number
  if (isNaN(userAge)) {
    console.log("Invalid input. Please enter a number.");
    alert("Invalid input. Please enter a number.");
    howOldAreYouWithValidation();
    return;
  }

  // The userAge is a valid number, proceed with the logic
  userAge = parseInt(userAge);

  if (userAge === 21) {
    console.log("You are 21 years old! - to be young");
  } else if (userAge >= 21 && userAge <= 30) {
    console.log("Enjoy your 20's - :)");
  } else if (userAge >= 31 && userAge <= 80) {
    console.log("Always try to stay active both physically and mentally!");
  } else if (userAge < 20) {
    console.log("Enjoy your early School years");
  } else {
    console.log("Sit back and relax!");
  }
};

howOldAreYouWithValidation();

  /*
  5)
  In this function we want to give the user a mathematical calculation to 
  give us the answer to. Something like prompt('What is 5 + 6?')  
  If the answer is correct, congratulate the user. 'Yay! Correct'
  If not, give the user the correct answer so they can learn. 'Noooo, the answer is 11'
  You choose if to use addition, subtraction, multiplication or division. 
  */

  const calculationTest = () => {
    let calculationString = prompt("what is 5 + 6?");
    let calculationNumber = parseInt(calculationString);
    if (calculationNumber === 11) {
      console.log("Yay Correct");
    } else {
      console.log("Noooo, the answer is 11");
    }
  };  
  calculationTest(10, 20);

/*
  6) **BONUS**
  Make the calculation machine we just made show random calculations everytime you 
  invoke the function. But hey, maybe limit the randomness to be numbers between 0-10?
  */

  const calculationRandom = () => {
    let numberOne = Math.floor(Math.random() * 10);
    let numberTwo = Math.floor(Math.random() * 10);
    let sum = numberOne + numberTwo;

    console.log(sum);
  }

  calculationRandom();