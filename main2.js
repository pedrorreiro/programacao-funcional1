const fs = require('fs');
const { DOMParser } = require('xmldom');
const R = require('ramda');

const { isValid, contentOfTag, elementsToArray, getGitHubProject } = require('./xmlfilter');

// efetua o processamento do xml e armazena a estrutura no objeto 'document'
const document = new DOMParser().parseFromString(fs.readFileSync('res/f-droid.xml', 'utf-8'));

const isAddedAfter2000AndUpdatedAfter2020 = isValid(R.__, 2000, 2020);

apps = document.getElementsByTagName('application');

vetor = [];

const addedApps = elementsToArray(apps)
    .filter(isAddedAfter2000AndUpdatedAfter2020)
    .map(getGitHubProject);

//console.log(addedApps);

vetor = [];

addedApps.map(nome => {

    aplicacao = {
        name: nome,
        added: "foda-se"
    }
    
    vetor.push(aplicacao);
})

console.log(addedApps);