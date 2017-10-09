/**
 * hasDoubleLetters()
 *
 * Write a function called `hasDoubleLetters` that takes a string as an argument
 * and returns a boolean if it has a word with double letters.
 *
 *    hasDoubleLetters('matter')
 *     => true // the tt are double-letters
 *
 *    hasDoubleLetters('chopper')
 *       => true // the pp are double-letters
 *
 *    hasDoubleLetters('mister')
 *      => false  // no double letters
 *
 *    hasDoubleLetters('demand')
 *      => false // the double-letters have to be next to eachother
**/

function hasDoubleLetters(takeString){

var container = []

for (var i = 0; i < takeString.length;i++) {
console.log(takeString[i]);

//   container.push(takeString[i])
// for (var j = 0; j < container.length;j++ ){
// console.log(takeString[i].indexOf());

// if(container[i].indexOf() ){
// // console.log(true);
// }
// console.log(false);
}

}









console.group('JS Iterations Week');
  console.log('Function: hasDoubleLetters', 'background-color: green; color: white')
  console.groupCollapsed('Should return true for "shutter"');
    console.assert(hasDoubleLetters('shutter') === true)
  console.groupEnd();

  console.groupCollapsed('Should return false for "prospect"');
    console.assert(hasDoubleLetters('prospect') === false)
  console.groupEnd();

  console.groupCollapsed('Should return false for "shoehorn"');
    console.assert(hasDoubleLetters('shoehorn') === false)
  console.groupEnd();

  console.groupCollapsed('Should return true for "Aardvark"');
    console.assert(hasDoubleLetters('Aardvark') === true)
  console.groupEnd();
console.groupEnd();
