function wrd_val(wrd_list){
    let scores = []
    let alpha_str = "abcdefghijklmnopqrstuvwxyz"
    for(let i = 0; i < wrd_list.length; i++){
      current = wrd_list[i]
      factor = i + 1
      listOfNums = current.replace(/\s/g, '').split('').map(x => alpha_str.indexOf(x) + 1)
      sum = listOfNums.length ? listOfNums.reduce((a,b) => a + b) * factor : 0
      scores.push(sum)
   }
   return scores
}

console.log(wrd_val(["codewars","abc","xyz"]))
console.log(wrd_val(["abc abc","abc abc","abc","abc"]))