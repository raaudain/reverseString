
function reverseString(str) {
  // Solution #1
  return str.split("").reverse().join("");

  
  // Solution #2
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
    //console.log(reversed)
  }

  return reversed
  
  
  //Solution #3
  return str.split("").reduce((reversed, character) => character + reversed, "");
}


reverseString("ramon")
