export default class Util {
 	cutText(text){
        let wordsCount = 0;
        let previousLetter = "";

        for (let lettersCount = 0; lettersCount < text.length; lettersCount++) {

	        if(lettersCount !== 0) {
	            previousLetter = text[lettersCount-1];
	        }else{
	            previousLetter = text[0];
	        }


	        if((/\s/.test(text[lettersCount])) && !(/\s/.test(previousLetter))) wordsCount++;

	        if(wordsCount >= 20 || lettersCount  >= 200){
				return text.substring(0,lettersCount);
	        }
	       
        };

        return text;                       
    }
}

