// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
const A = 'hello';
const B = 'llohe';

const toStructure = (text) => {
  return text.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
};

function anagrams(stringA, stringB) {
  return toStructure(stringA) === toStructure(stringB);
}
// function anagrams(stringA, stringB) {
//   return (
//     Object.entries(toStructure(stringA)).toString() ===
//     Object.entries(toStructure(stringB)).toString()
//   );
// }
console.log(anagrams(A, B));

module.exports = anagrams;

// const toStructure = (text) => {
//     let refinedText = text.replace(/[^\w]/g, '').toLowerCase().split('').sort();
//     let structure = {};
//     refinedText.map((c) => {
//       structure[c] = structure[c] + 1 || 1;
//     });
//     return structure;
//   };

//   function anagrams(stringA, stringB) {
//     const aMap = toStructure(stringA);
//     const bMap = toStructure(stringB);

//     if (Object.keys(aMap).length !== Object.keys(bMap).length) return false;
//     for (let i in aMap) {
//       if (aMap[i] !== bMap[i]) return false;
//     }
//     return true;
//   }
