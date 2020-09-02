class Formatter {

  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(word) {
    return word.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(sentence){
    let wordsToIgnore = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let array = sentence.split(" ")
    let capitalized = array.map(word => {
      if(!wordsToIgnore.includes(word)){
        return this.capitalize(word)
      }
      else {return word}
    })
    capitalized[0] = this.capitalize(capitalized[0])
    return capitalized.join(" ")
 
  }
}