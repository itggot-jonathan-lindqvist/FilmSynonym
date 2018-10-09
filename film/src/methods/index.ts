function switchWords(response: any, string: any) {
    string = string.split(" ")
    let response_index = 0

    console.log(response)
    console.log(string)

    for (let index = 0; index < string.length; index++) {
        if (typeof response[response_index] === 'undefined') {
            response_index++
        }else if (/[.,':\/-]/.test(string[index]) && /[A-Za-z]/.test(string[index])) {
            let word = string[index].split("")
            let i = 1
            while (/[.,':\/ -]/.test(word[i]) == false) {
                word[0] = word[0] + word[i]
                word[i] = ""
                i++
            }

            word[0] = response[response_index]

            for (let i = 1; i < word.length; i++) {
                word[0] = word[0] + word[i]
            }

            string[index] = word[0]
            response_index++
        }else if (/[.,':\/-]/.test(string[index])) {
        }else {
            string[index] = response[response_index]
            response_index++
        }
    }

    let newString = ""

    for (let index = 0; index < string.length; index++) {
        newString = newString + string[index]
        if (index == string.legnth - 1) {
        }else{
            newString += " "
        }
    }

    return newString
}

export {switchWords}