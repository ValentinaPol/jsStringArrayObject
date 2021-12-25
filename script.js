//1. Напишите функцию, которая принимает строку и возвращает новую строку с удаленными гласными.

// clearVowels("I have never seen a thin person drinking Diet Coke.")
// ➞ " hv nvr sn  thn prsn drnkng Dt Ck."

// clearVowels("We're gonna build a wall!")
// ➞ "W'r gnn bld  wll!"

// clearVowels("Happy Thanksgiving to all--even the haters and losers!")
// ➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"

function clearVowels(str) {
    var strResult = '';
    for (var i = 0; i < str.length; i++){
        if (str[i] !== 'A' && str[i] !== 'a' && str[i] !== 'E' && str[i] !== 'e' && str[i] !== 'I' && str[i] !== 'i' && str[i] !== 'O' && str[i] !== 'o' && str[i] !== 'U' && str[i] !== 'u' && str[i] !== 'Y' && str[i] !== 'y') {
            strResult += str[i];
        }
    }
    return strResult;
}

//console.log(clearVowels("I have never seen a thin person drinking Diet Coke."));
//console.log(clearVowels("We're gonna build a wall!"));
//console.log(clearVowels("Happy Thanksgiving to all--even the haters and losers!"));





// 2. Напишите функцию, которая возвращает true, если первый массив может быть вложен во второй.

// arr1 может быть вложен в arr2, если:

// Минимальное значение arr1 больше минимальное значение arr2.
// Максимальное значение arr1 меньше, чем максимальное значение arr2.


// splitArr([1, 2, 3, 4], [0, 6]) ➞ true

// splitArr([3, 1], [4, 0]) ➞ true

// splitArr([9, 9, 8], [8, 9]) ➞ false

// splitArr([1, 2, 3, 4], [2, 3]) ➞ false

function splitArr(arr1, arr2) {
    /*var minArr1 = arr1[0];
    var maxArr1 = arr1[0];
    var minArr2 = arr1[0];
    var maxArr2 = arr1[0];
    for (var i = 1; i < arr1.length; i++){
        minArr1 = Math.min(arr1[i], minArr1);
        maxArr1 = Math.max(arr1[i], maxArr1);    
    }
    for (var j = 1; j < arr2.length; j++){
        minArr2 = Math.min(arr2[j], minArr2);
        maxArr2 = Math.max(arr2[j], maxArr2);    
    }*/
    var maxArr1 = Math.max(...arr1);
    var minArr1 = Math.min(...arr1);
    var maxArr2 = Math.max(...arr2);
    var minArr2 = Math.min(...arr2);

    return minArr1 > minArr2 && maxArr1 < maxArr2;
         
}

//console.log(splitArr([1, 2, 3, 4], [0, 6]));
//console.log(splitArr([3, 1], [4, 0]));
//console.log(splitArr([9, 9, 8], [8, 9]));
//console.log(splitArr([1, 2, 3, 4], [2, 3]));


//3. Для объекта людей и их возраста верните, сколько лет будет людям по прошествии n лет. n - определяется вторым параметром.


// afterYears({
//     "Joel" : 32,
//     "Fred" : 44,
//     "Reginald" : 65,
//     "Susan" : 33,
//     "Julian" : 13
//   }, 1) ➞ {
//     "Joel" : 33,
//     "Fred" : 45,
//     "Reginald" : 66,
//     "Susan" : 34,
//     "Julian" : 14
//   }
  
//   afterYears({
//     "Baby" : 2,
//     "Child" : 8,
//     "Teenager" : 15,
//     "Adult" : 25,
//     "Elderly" : 71
//   }, 19) ➞ {
//     "Baby" : 21,
//     "Child" : 27,
//     "Teenager" : 34,
//     "Adult" : 44,
//     "Elderly" : 90
//   }
  
//   afterYears({
//     "Genie" : 1000,
//     "Joe" : 40
//   }, 5) ➞ {
//     "Genie" : 1005,
//     "Joe" : 45
//   }

function afterYears(obj, n) {
    var resultObj = {};
    for (let key in obj){
         resultObj[key] = obj[key] + n;
    }
    return resultObj; 
}

/*console.log(afterYears({
        "Joel" : 32,
         "Fred" : 44,
         "Reginald" : 65,
         "Susan" : 33,
        "Julian" : 13
       }, 1));

console.log(afterYears({
         "Baby" : 2,
         "Child" : 8,
         "Teenager" : 15,
         "Adult" : 25,
         "Elderly" : 71
       }, 19));
    
console.log(afterYears({
         "Genie" : 1000,
         "Joe" : 40
       }, 5));*/


//4.  Создайте  функцию, которая получает массив и удаляет все false значения.

//clearFalses([0, 1, false, 2, "", 3]);   // => [1, 2, 3]

function clearFalses(arr) {
    var arrResult = arr.filter(function(elem){
        return elem != false;
    })
    return arrResult;
    /*var arrResult = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] != false){
            arrResult.push(arr[i]);
        }
    }
    return arrResult;*/

}

//console.log(clearFalses([0, 1, false, 2, "", 3]));



/* 5. Напишите функцию, которая принимает целое число i и возвращает целое число с обратным целым числом, за которым следует исходное целое число.


reverseAndValue(123) ➞ 321123

reverseAndValue(152) ➞ 251152

reverseAndValue(123456789) ➞ 987654321123456789 */

function reverseAndValue(num) {
    var str = String(num);
    var strResult = '';
    for (var i = str.length - 1; i >= 0; i--){
        strResult += str[i];
    }
    return +(strResult+str);
}

//console.log(reverseAndValue(123));
//console.log(reverseAndValue(152));
//console.log(reverseAndValue(123456789));



/* 
6. Учитывая строку чисел, разделенных запятой и пробелом, верните произведение чисел. Попробуйте выполнить это задание в одну линию!


multiplyNumbers("2, 3") ➞ 6

multiplyNumbers("1, 2, 3, 4") ➞ 24

multiplyNumbers("54, 75, 453, 0") ➞ 0

multiplyNumbers("10, -2") ➞ -20 */









/**
 * 
 * 7. Создайте функцию, которая принимает массив чисел от 1 до 10 (исключая одно число) и возвращает отсутствующее число.
Массив чисел будет несортированным (не по порядку).
Только один номер будет отсутствовать.


missingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5

missingNumber([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10

missingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

 */

function sortNumber(a, b){
    return a - b;
}

function missingNumber(arr) {
    arr.sort(sortNumber);
    if (arr[0] != 1) return 1;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] != arr[i+1] - 1){
            return arr [i] + 1;
        }     
    }
}

//console.log(missingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]));
//console.log(missingNumber([7, 2, 3, 6, 5, 9, 1, 4, 8]));
//console.log(missingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]));
//console.log(missingNumber([5, 2, 3, 4, 6, 7, 8, 9, 10]));



/* 8. Для входной строки поменяйте местами строку слово за словом, первое слово будет последним и так далее.

revWords(" the sky is blue") ➞ "blue is sky the"

revWords("hello   world!  ") ➞ "world! hello"

revWords("a good example") ➞ "example good a"



Слово определяется как последовательность непробельных символов.
Входная строка может содержать начальные или конечные пробелы. Однако ваша обратная строка не должна содержать начальных или конечных пробелов.
Вам нужно сократить несколько пробелов между двумя словами до одного пробела в перевернутой строке.
*/


function revWords(str){
    var arrStr = str.split(' ');
    arrStr = arrStr.filter(function(elem){
        return elem !== '';
    });
    arrStr.reverse();
    var strResult = arrStr.join(' ');
    return strResult;
}

//console.log(revWords(" the sky is blue"));
//console.log(revWords("hello   world!  "));
//console.log(revWords("a good example"));





// 9. Напишите функцию, которая принимает массив чисел и возвращает «7 - найдено!» если в массиве присутствует цифра 7. В противном случае верните «в массиве нет 7».


// sevenFind([1, 2, 3, 4, 5, 6, 7]) ➞ "7 - найдено!"
// // 7 - содержит число семь.

// sevenFind([8, 6, 33, 100]) ➞ "в массиве нет 7"
// // Ни один из элементов не содержит 7 внутри.

// sevenFind([2, 55, 60, 97, 86]) ➞ "7 - найдено!"
// // 97 содержит цифру семь.

function sevenFind(arr) {
    arr.join('').indexOf(7) != -1 ? console.log('7 - найдено!') : console.log('в массиве нет 7');
}

//sevenFind([1, 2, 3, 4, 5, 6, 7]);
//sevenFind([8, 6, 33, 100]);
//sevenFind([2, 55, 60, 97, 86]);




/* 
10. Напишите функцию, которая делит массив на части размером n, где n - длина каждого фрагмента.

chunksArr([2, 3, 4, 5], 2) ➞ [[2, 3], [4, 5]]

chunksArr([2, 3, 4, 5, 6], 2) ➞ [[2, 3], [4, 5], [6]]

chunksArr([2, 3, 4, 5, 6, 7], 3) ➞ [[2, 3, 4], [5, 6, 7]]

chunksArr([2, 3, 4, 5, 6, 7], 1) ➞ [[2], [3], [4], [5], [6], [7]]

chunksArr([2, 3, 4, 5, 6, 7], 7) ➞ [[2, 3, 4, 5, 6, 7]]


Ничего страшного. если последний чанк заполнен не полностью.
Целые числа всегда будут однозначными. */

function chunksArr(arr, n) {
    var arrResult = [];
    

}












// 11. Напишите функцию, которая возвращает частотное распределение массива. Эта функция должна возвращать объект, где ключи - это уникальные элементы, а значения - частота, с которой эти элементы встречаются.


// getFreq(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

// getFreq([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }

// getFreq([true, false, true, false, false]) ➞ { true: 2, false: 3 }

// getFreq([]) ➞ {}


// Если дан пустой массив, вернуть пустой объект (см. Пример №4).
// Объект должен быть в том же порядке, что и во входном массиве.













/* 12. Создайте функцию, которая принимает массив любой длины. Измените каждый элемент (использовать заглавные буквы, перевернуть, перенести).



editWords(["new york city"]) ➞ ["YTIC KR-OY WEN"]

editWords(["null", "undefined"]) ➞ ["LL-UN", "DENIF-EDNU"]

editWords(["hello", "", "world"]) ➞ ["OLL-EH", "-", "DLR-OW"]

editWords([""]) ➞ ["-"]
 */


