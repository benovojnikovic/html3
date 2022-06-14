console.log("Hello World");
// logs text in the console (inspect)
let randomNumber = Math.random(); //0.0-1
// creates a variable for 0.0-1
if (randomNumber < 0.50) {
// if the random # generated is over 0.5 then this will show 
    
    console.log("Condition was Met");
    console.log(randomNumber);

}


if (randomNumber >= 0.5) {
// similar to above, except if the random number is below or equal to 0.5
    console.log('Condition Was Met');
// displays: condition was met if lesser than or equal to 0.5
    console.log(randomNumber); 
}


const dayOfWeek = 'Saturday';
// in the dayOFWeek variable, we're selecting Saturday
if (dayOfWeek === 'Monday'){
    console.log("Yay its Monday!");
// makes it so if the day of the week (variable) is on Monday, console displays this

} else if (dayOfWeek === 'Friday'){

    console.log("Yay Its Friday");
// same as above, except a different message for friday

} else if (dayOfWeek === 'Saturday') {

    console.log("You have the correct Day from the variable"); 
}

const age = prompt("Enter An Age");
// creating a prompt to have the user enter their age. Different numbers entered will display different results
if (age < 5) {

    console.log("Hey, you're a baby!");

} else if (age < 10) {

    console.log("Hey, you're just a kid!");
} else if (age < 35) {

    console.log("You're getting older.");
}

else {
// making an else statement for any age entered above 35. 
    console.log("You are over the age of 35.");
}

const fruit = 'Peach';

// fruit is the variable here
switch (fruit) {
// the expression value matches the case statement, so the code will run
    case 'Oranges':
        console.log("Oranges are $0.59 a pound");
        break;
    case 'Bananas':
        console.log("Bananas are $0.10 a pound");
        break;
    case 'Avocados':
        console.log("Advocados are expensive");   
        break; 
    case 'Papayas':
        console.log("Papayas are $0.70 a pound");
        break;
        
    default:
        console.log("Last Resort If All Conditions Fail");
// last resort if everything fails ^
}


const password = prompt("Enter in a new password");
// password prompt for users to enter a password into the page
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
// password length greater than 6. Shows up in the console if it is correct 
        console.log("Valid Password");
    } else {
// appears in console if the password is correct
        console.log("Password Cant Have Spaces");
    }
// troubleshooting in the console if the user is having issues figuring out the password
} else {
    console.log("Password is too short");
}

function singSong() {
// function with the name SingSong. There is a parameter within the () 
    console.log("DO");
    console.log("RE");
    console.log("ME");
}
// body above. it will log what we put in the console

singSong()
singSong()
singSong()
// function with parameter
function greet(firstName) {

    console.log(`Hey There, ${firstName}`)
}

greet('cutie');
// argument to the parameter: cutie
// "Hey there, cutie"
function greet1(firstName,lastName) {
// function with first and last name parameters
    console.log(`Hey There, ${firstName} ${lastName}`)
}
greet1('Bean','Dip');
// "Hey There, Bean Dip"