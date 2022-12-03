// завдання 1
let mas = [7, 8, 9, 10, 11, 12, 13];

function binSearch(array, num) {
  let low = 0;
  let high = array.length - 1;


  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] === num) {
      return mid;
    } else if (array[mid] < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(`Index: ${binSearch(mas, 8)}`);
// завдання2
let mas = [20, 8, 30, 10, 151, 152, 1623];
for(let i=0, tmp;i<mas.length-1;i++){
for(let j=0;j<mas.length-1;j++){
  if(mas[j]>mas[j+1]){
    tmp=mas[j];
    mas[j]=mas[j+1];
    mas[j+1]=tmp;
  }
}
}
console.log(mas)
function binSearch(array, num) {
  let low = 0;
  let high = array.length - 1;
  
  

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] === num) {
      return mid;
    } else if (array[mid] < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(`Index: ${binSearch(mas, 10)}`);
// завдання 3
let mas =[
     { index: 7, userName: 'John Duo', age: 17  },
  { index: 2, userName: 'Vitalik Jakovchuh', age: 18},
  { index: 11, userName: 'Diana Hrytsiuk', age: 19},
  { index: 1, userName: 'Yaruna Beresanska', age: 20 },
  { index: 9, userName: 'Olya Klymiuk', age: 21 }
    
  ]
  let binSearch = function (arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.round((right - left) / 2) + left;
    if (num === arr[mid].age) {
      return mid;
    } else if (num < arr[mid].age) {
      right = mid - 1;
    } else if (num > arr[mid].age) {
      left = mid + 1;
    }
  }
  return -1;
};

console.log(`Index: ${binSearch(mas, 18)}`);
// завдання 4
let mas =[
     { index: 7, userName: 'John Duo', age: 16  },
  { index: 2, userName: 'Vitalik Jakovchuh', age: 85},
  { index: 11, userName: 'Diana Hrytsiuk', age: 13},
  { index: 1, userName: 'Yaruna Beresanska', age: 21 },
  { index: 9, userName: 'Olya Klymiuk', age: 28 }
    
  ]
  for (let j = 0; j < mas.length; j++){
        for (let i = 0; i < mas.length - 1; i++){
            if (mas[i].age > mas[i + 1].age){
            const result = mas[i]
            mas[i] = mas[i + 1]
            mas[i + 1] = result
            }
        }
    }
    console.log(mas)

  let binSearch = function (arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.round((right - left) / 2) + left;
    if (num === arr[mid].age) {
      return mid;
    } else if (num < arr[mid].age) {
      right = mid - 1;
    } else if (num > arr[mid].age) {
      left = mid + 1;
    }
  }
  return -1;
};

console.log(`Index: ${binSearch(mas, 16)}`);



