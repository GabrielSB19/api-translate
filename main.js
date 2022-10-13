"use stricti";

let translateFrom = document.querySelector("#translateFrom");
let translateTo = document.querySelector("#translateTo");
let sourceCodeFrom = 'es';
let sourceCodeTo = 'en';

const URL_LANGUAGES = 'https://text-translator2.p.rapidapi.com/getLanguages';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd49fcea4eemshea9ba7f5201f95ap19e0ddjsnb83fa094c9ef',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	}
};

fetch(URL_LANGUAGES, options)
    .then(res => res.json())
    .then(element =>{
        let language = element.data.languages;
        language.forEach(e => {
            translateFrom.innerHTML += `<option value="${e.code}">${e.name}</option>`
            translateTo.innerHTML += `<option value="${e.code}">${e.name}</option>`
        });
    }).catch(err => console.log(err)
);


translateFrom.addEventListener("click", ()=>{
    sourceCodeFrom = translateFrom.value;
});

translateTo.addEventListener('click', ()=>{
    sourceCodeTo = translateTo.value;
});

let translate = document.querySelector("#translate");
let inputTranslate = document.querySelector("#inputTranslate");
let outputTranslate = document.querySelector("#outputTranslate");

translate.addEventListener('click', ()=>{
    let textToTranslate = inputTranslate.value;
    
    const encodedParams = new URLSearchParams();
    encodedParams.append("source_language", sourceCodeFrom);
    encodedParams.append("target_language", sourceCodeTo);
    encodedParams.append("text", textToTranslate);

    const optionss = {
	    method: 'POST',
	    headers: {
		    'content-type': 'application/x-www-form-urlencoded',
		    'X-RapidAPI-Key': 'd49fcea4eemshea9ba7f5201f95ap19e0ddjsnb83fa094c9ef',
		    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	    },
	    body: encodedParams
    };

    fetch('https://text-translator2.p.rapidapi.com/translate', optionss)
	    .then(response => response.json())
	    .then(response => outputTranslate.innerText = response.data.translatedText)
	    .catch(err => console.error(err)
    );
});


