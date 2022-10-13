"use stricti";

let translateFrom = document.querySelector("#translateFrom");
let translateTo = document.querySelector("#translateTo");

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
    }).catch(err => console.log(err));