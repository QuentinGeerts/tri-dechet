function generateOptions (fields, categories) {

    const select = document.getElementById('categorie-dechet')
    select.innerHTML = "";

    if (fields.length != 0) {

        categories.map(cat => {

            const optGroup = document.createElement('optgroup')
            optGroup.label = cat
            select.appendChild(optGroup)

            let nbOccurrences = 0

            fields.map(v => {
                if (v.categorie == cat) {

                    nbOccurrences++

                    const option = document.createElement('option')
                    option.innerText = v.dechet
                    option.value = v.id
                    optGroup.appendChild(option)
                }
            })

            optGroup.label += ` (${nbOccurrences})`
        })
    }
    else {
        const option = document.createElement('option')
        option.innerText = "Aucune donnée trouvée";
        select.appendChild(option)
    }

}

export { generateOptions }