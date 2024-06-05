async function getNeko() {
    url_endpoint = 'https://nekos.best/api/v2/neko'
    const raw_response = await fetch(url_endpoint)
    const cooked_data = await raw_response.json() //parse
    console.log(cooked_data.results[0].url)
}

await getNeko()