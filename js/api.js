const URL_API = `https://www.odwb.be/api/records/1.0/search/?dataset=guide-de-tri`;

async function load(query = "") {
    return await fetch(`${URL_API}&rows=${-1}&q=${query}`).then( async res => res.json() )
}


export { load }