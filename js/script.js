var text = "";

function convert() {
	
	// Access and change binary variable
	text = String(document.getElementById("text").value);

	const alphabet = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", " "]
	const morse = ["-----",".----","..---","...--","....-",".....","-....","--...","---..","----.",".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..", " / "]

	let textArray = text.toUpperCase().split("");
	let morseArray = []
	for (let i = 0; i < textArray.length; i++){
		for (let j = 0; j < alphabet.length; j++){
			if (textArray[i] == alphabet[j]){
				morseArray.push(morse[j]);
			}
		}
	}

	morseArray = morseArray.join(" ")

	// If the array doesn't have any items, zero words will be counted.
	if (textArray == ""){
		document.getElementById("result").innerHTML = "Write something!";
	}else{
		document.getElementById("result").innerHTML = (morseArray);
	}
}
