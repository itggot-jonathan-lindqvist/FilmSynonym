import axios from 'axios'
import {getKey} from './keys'

function getSynonym(word:String) : Promise<String> {
    return new Promise((resolve,reject) => {
        let url = 'https://wordsapiv1.p.mashape.com/words/' + word + '/synonyms'
        let synonym;

        axios({
            method:'get',
            url: url,
            headers: {'X-Mashape-Key': getKey("Words")},
        }).then((response) => {
            
            let synonyms = response.data.synonyms
            let randNum = Math.floor(Math.random() * (synonyms.length))

            synonym = synonyms[randNum]
            resolve(synonym)

        }).catch((response) => {
            console.log("ERROR ON API REQUEST")
            console.log(response)
        })
    })
}

function getMovies(keyword:String) : Promise<Array<TemplateStringsArray>> {
    return new Promise((resolve,reject) => {
        let url = 'https://www.omdbapi.com/?apikey=' + getKey("Omdb") + '&s=' + keyword.replace(" ", "+")
        
        axios(url).then((response) => {
            
            let movies = []
            for (var i = 0; i < response.data.Search.length; i++) {
                if (response.data.Search[i].Poster != "") {
                  movies.push(response.data.Search[i])
                }
            }

            resolve(movies)
        }).catch(console.log)

    })
}

function getMovie(keyword:String) {
    return new Promise((resolve,reject) => {
        let url = 'https://www.omdbapi.com/?apikey=' + getKey("Omdb") + '&t=' + keyword

        axios.get(url).then((response) => {
            resolve(response.data.Plot)
        }).catch(console.log)
    })
}

function getRandMovie() {
    return new Promise((resolve,reject) => {
        let url = 'https://www.omdbapi.com/?apikey=' + getKey("Omdb") + '&i='
        let baseId = "tt0"
        let id = ""

        for ( var i = 0; i < 6; i++ ) {
            let number = Math.floor(Math.random() * 10).toString()
            id = id  + number
        }

        axios.get(url + baseId + id).then((response) => {
            if (response.data.Plot === "N/A" || response.data.Plot === undefined) {
                resolve(getRandMovie())
            }else {
                resolve(response)
            }

        }).catch(console.log)
    })
}


export {getSynonym}
export {getMovies}
export {getMovie}
export {getRandMovie}