// Popup box asking which group the user is in
var teamNumber = prompt("Which team are you in?" ,);
// Storing the team number
console.log(teamNumber);
// Checking if team number is numeral not text, not null, not empty string, not default text and bthe correct team number
if (!isNaN (teamNumber) && teamNumber !== null && teamNumber !== " " && parseInt(teamNumber) ===4) {
  // If all conditions are met, they are prompted to enter their first name
 var firstName =prompt ("Please enter your first name:" , "John");
// Storing the first name
console.log(firstName);
// Checking if first name matches stored name of team members and using switch to check each name, if match found, welcome message with full name is shown
switch (firstName) {
  case "Pranav":
    alert ("Welcome Pranav Rupani");
    break;
  case "Warren":
    alert ("Welcome Warren Charansingh");
    break;
  case "Igni":
    alert ("Welcome Igni Vigni");
    break;
  case "David":
    alert ("Welcome David Henry");
    break;
  default:
    alert ("Access Denied");
}
// Invalid team members/team numbers get access denied
} else {
  alert("Access Denied");
}
// End of code