const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ' :     ' ',
};

function decode(expr) {
    let chunk = [];

    let letters = []
    let result = "";

    for (let j = 0; j < expr.length ; j += 10){
        chunk.push(expr.slice(j, j + 10));
    }

    for (let i = 0; i < chunk.length; i++){
    let morseCode = "";
    		for (let num = 0; num < 10; num++) {
    			if (chunk[i][num] === "1" && chunk[i][num + 1] === "1"){
                    morseCode += "-";
                    num++
                }
                else if (chunk[i][num] === "1" && chunk[i][num + 1] === "0"){
                    morseCode += ".";
                }
                else if (chunk[i][num] === "*"){
                    morseCode += " ";
                    num += 9;
                 }
            }
       letters.push(morseCode);
    }
    for(let code of letters){
    result += MORSE_TABLE[code]
    }
	return result
}

module.exports = {
    decode
}