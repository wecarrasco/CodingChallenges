/*
Code challenge:

You have a group of 30 people. 

You need to split them randomly into groups of 6.
*/

const people = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z","0", '1',"2","3","4","5","6","7","8",'9']

const splitPeople = (arr) => {
  let all = [];
  let splited = [];
  const length = arr.length;
  let arrayCopy = arr;
  for(let i = 0; i < length; i++){
    const randomPerson = Math.floor(Math.random() * arr.length)
    if(splited.length < 6){
      splited.push(arr[randomPerson])
    }
    if(splited.length == 6){
      console.log("entra")
      all.push(splited);
      splited = [];
    }

    arr.splice(randomPerson, 1)
  }
  return all;
}

splitArray(people)