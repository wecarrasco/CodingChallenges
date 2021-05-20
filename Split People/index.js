/*
Code challenge:

You have a group of 30 people. 

You need to split them randomly into groups of 6.
*/

const people = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z", "0", '1', "2", "3", "4", "5", "6", "7", "8", '9']

const splitPeople = (arr) => {
  let all = [];
  let splited = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    const randomPerson = Math.floor(Math.random() * arr.length)
    if (splited.length < 6) {
      splited.push(arr[randomPerson])
    }
    if (splited.length == 6) {
      all.push(splited);
      splited = [];
    }

    arr.splice(randomPerson, 1)
  }
  return all;
}

console.log(splitPeople(people));

/* 
[
  [ '4', 'i', 'g', '7', 'n', '9' ],
  [ 'u', 'e', 'c', 'x', 'N', 'V' ],
  [ '2', 'J', 'p', 's', 'y', 'd' ],
  [ 'M', 'F', 'E', '5', 'a', 'I' ],
  [ '6', 'P', 'l', '0', 'q', 'B' ],
  [ 'v', 'L', 'U', 'X', 'W', 'b' ],
  [ 'Z', 'A', 'r', 'D', 'R', 'S' ],
  [ 'Q', 'm', 'j', '1', 'k', 'h' ],
  [ 'w', '8', 'f', 'z', 'Y', 'C' ],
  [ 'o', 'H', 'K', 'O', 'G', '3' ]
]
*/