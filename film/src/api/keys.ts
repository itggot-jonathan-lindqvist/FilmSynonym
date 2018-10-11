function getKey(apiName:String) {
    
    if (apiName == "Words"){
        return "<Words-API-KEY>"
    }else if (apiName == "Omdb") {
        return "57b31362"
    }else {
        console.log("ERROR: 404")
        console.log("Api does not exist")
        return "ERROR: 404"
    }
}

export {getKey}