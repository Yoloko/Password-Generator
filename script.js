
 //function to genrate the password  
	var upperCase = [ "A", "B", "C", "D","E","F","G","H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W","X", "Y","Z"];
	var LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
	var numberCharacters = [ "1","2","3","4","5","6","7","8","9",];
	//function to prompt user for passwor options

	function getPasswordRequirment (){
	var passwordLength = parseInt(prompt('how long do you want your passWord to be '));
	if (passwordLength > 128){
		alert ("your password must be less than 128");
		return;
	}
	if (passwordLength < 8){
		alert ("your password must be greater than 8");
		return;
	}
	if (isNaN(passwordLength)=== true){
		alert ("Make sure you type in a number");
		return;

	}

	// comfirmation 
	var special = confirm('click the ok button if you want special charaters in your password');

	var number = confirm('click the ok if want numbers in your password');

	var lower = confirm('click the okay botton if you want lowercase in your password');

	var upper = confirm('click the ok button if you want uppercase in your password');
	if( special=== false && number === false && upper === false && lower === false){
		alert('you must select one at least one charater type');
		return;
	}
	// Obj to store input
	var passwordOptions = {
		length:passwordLength,
		special:special,
		number:number,
		lower:lower,
		upper:upper
	};
	return passwordOptions;
}

function getRandom(arr){
	var randIndex = Math.floor(Math.random() * arr.length);
	var randElement =arr[randIndex];
	return randElement;
}

// function to generate password for user 
function generatePassword(){
	var options = getPasswordRequirment();
	var possibleCharacters = [];

	// final password
	var result = [];
	// ensure each character type is used
	var guaranteedCharacters =[];
	


	if (options.special){
		possibleCharacters = possibleCharacters.concat(specialCharacters);
		guaranteedCharacters.push(getRandom(specialCharacters));

	}
	if (options.lower){
		possibleCharacters = possibleCharacters.concat(LowerCase);
		guaranteedCharacters.push(getRandom(LowerCase));
	}
	if (options.upper){
		possibleCharacters = possibleCharacters.concat(upperCase);
		guaranteedCharacters.push(getRandom(upperCase));

	}
	if (options.number){
		possibleCharacters = possibleCharacters.concat(numberCharacters);
		guaranteedCharacters.push(getRandom(numberCharacters));

	}
	for(var i=0; i < options.length; i++){
		var possibleCharacter = getRandom(possibleCharacters);
		result.push(possibleCharacter);

	}

	for (var i=0; i < guaranteedCharacters.length;i=i+1){
		result[i] = guaranteedCharacters[i];
	}

	// for[$,@,A,B,1,2]

	// Loop from 0 to options.passwordLenght in the password (retrieved from user input)
	// for each iteration
	// - generate a random number between 0 and the length of possibleCharacters
	// - that number represents an index for that array which correcponds to a character
	// - add that character to the end of your final password.

	return result.join('');
}




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

