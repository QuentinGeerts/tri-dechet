/**
 * Imports
 */

import { load } from "./api.js";
import { generateOptions } from "./dom.js";

/**
 * Global variables
 */

let timerSearch;
let categories = []
let fields = []

let data = await load();

loadData();



const btnValid = document.getElementById('btnValid');
const ip = document.getElementById('recyparc-infoparc')
const ic = document.getElementById('recyparc-infocollecte')
const query = document.getElementById('q');

/**
 * Functions
 */

function loadData() {    
    data.records.map(elt => {
        categories.push(elt.fields.categorie)
        fields.push(elt.fields)
    })
    
    // Retirer les doublons
    categories = [...new Set(categories)]

    generateOptions(fields, categories);
}

/**
 * Events
 */

query.addEventListener('keyup', (e) => {
    // data = await loadWithQuery(e.target.value);
    clearTimeout(timerSearch);

    timerSearch = setTimeout(async () => {
        data = await load(e.target.value)

        categories.length = 0
        fields.length = 0

        loadData()

    }, 700);
})

// Ajout de l'événement au bouton
btnValid.addEventListener('click', (e) => {

    if (fields.length == 0) return

    ip.textContent = ""
    ic.textContent = ""

    const choice = document.getElementById('categorie-dechet').value

    let selected = fields.filter(field => field.id == choice)[0]


    if (selected.infoparc) {
        const infoparcText = document.createElement('p');
        infoparcText.textContent = selected.infoparc
        ip.appendChild(infoparcText)
    }

    if (selected.infocollecte) {
        const infocollecteText = document.createElement('p');
        infocollecteText.textContent = selected.infocollecte
        ic.appendChild(infocollecteText)

    }

})