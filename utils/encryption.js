const primNum = 86573;
const paddChar = '~';

export const computeKey = (pub, priv) =>{

    return pub + priv;
}
 
export const getPrimeNumber = () => {
	
	return primNum
}

export const getPaddChar = () => {
	
	return paddChar; 
}

export const generateKey = (len) => {
	var noForSettingAlphabet = 4129;//prime number
	let key = "";
	for(let i = 0; i < len; i++){
		key += String.fromCharCode((Math.random() * 256) + noForSettingAlphabet);
	}

	return key;
}

const makePadding = (paddChar, txt, numPaddChar) => {
    let padding = "";
    let newPaddedText = "";
  
    for (let i = 1; i <= numPaddChar; i++) {
      padding += paddChar;
    }
    newPaddedText = padding + txt;
    return newPaddedText;
  };
  
  export const encrypt = (key, primeNum, paddChar, message) => {
    let encoded = "";
  
    if (typeof key == "string" && typeof message == "string") {
  
      //padding
      if (key.length > message.length) {
        message = makePadding( paddChar, message, key.length - message.length );
      } else if (key.length < message.length) {
        key = makePadding( paddChar, key, message.length - key.length );
      }
  
      //encryption
      for (let i = 0; i < message.length; i++) {
        encoded += String.fromCharCode( ( message.charCodeAt(i) ^ key.charCodeAt(i) ) - primeNum );
      }
    }
  
    return encoded;
  };
  
  export const decrypt = (key, primeNum, paddChar, encoded) => {
    let message = "";
    
    //padding
    if (key.length > encoded.length) {
        encoded = makePadding( paddChar, encoded, key.length - encoded.length );
    } else if (key.length < encoded.length) {
        key = makePadding( paddChar, key, encoded.length - key.length );
    }
  
    //decrypt
    for (let i = 0; i < encoded.length; i++) {
      message += String.fromCharCode( key.charCodeAt(i) ^ ( encoded.charCodeAt(i) + primeNum ) );
  
    }
    message = message.replace(/^~+/, "");
  
    return message;
  };
  