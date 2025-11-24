import axios from 'axios';

const translateText = async (sourceText,sourceLanguage, targetLanguage) => {
console.log(sourceText,sourceText,targetLanguage)
const options = {
  method: 'POST',
  url: 'https://google-translator9.p.rapidapi.com/v2',
  headers: {
    'x-rapidapi-key': 'b897698501mshe76efc15970b6e5p19024ejsn2a799775518a',
    'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    q: `${sourceText}`,
    source: `${sourceLanguage}`,
    target: `${targetLanguage}`,
    format: 'text'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data.data.translations[0].translatedText);
  return response.data.data.translations[0].translatedText;
} catch (error) {
	console.error(error);
}
}

const getLanguages= async () => {
const options = {
  method: 'GET',
  url: 'https://google-translator9.p.rapidapi.com/v2/languages',
  headers: {
    'x-rapidapi-key': 'b897698501mshe76efc15970b6e5p19024ejsn2a799775518a',
    'x-rapidapi-host': 'google-translator9.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data.data.languages);
} catch (error) { 
	console.error(error);
}
}

export {translateText, getLanguages};