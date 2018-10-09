import axios from 'axios'

function getSynonym(word:String) : Promise<String> {
    return new Promise((resolve,reject) => {
        let url = 'https://wordsapiv1.p.mashape.com/words/' + word + '/synonyms'
        let synonym;

        axios({
            method:'get',
            url: url,
            headers: {'X-Mashape-Key': '<API-KEY>'},
        }).then((response) => {
            
            let synonyms = response.data.synonyms
            let randNum = Math.floor(Math.random() * (synonyms.length))

            synonym = synonyms[randNum]
            resolve(synonym)

        }).catch((response) => {
            console.log("ERROR ON API REQUEST")
            console.log(response)
            resolve(word)
        })
    })
}

export {getSynonym}