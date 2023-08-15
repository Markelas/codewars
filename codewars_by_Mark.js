// CODEWARS

//
// link: https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
// My solution
// export function solution(str: string, ending: string): boolean {
//   if (ending === "") {
//          return true;
//      }
//      else {
//          let leng = ending.length;
//          if (str.slice(-leng) === ending) {
//              return true;
//          }
//          else {
//              return false;
//          }
//      }
//  }


// Перевернуть число
// link: https://www.codewars.com/kata/5467e4d82edf8bbf40000155
// export function descendingOrder(n: number): number {
//   let f = String(n);
//   let arr = f.split("");
//   arr = arr.sort();
//   arr = arr.reverse();
//   n = Number(arr.join(""));
//   return n;
// }

// 
// link: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
// My solution
// export function reverseWords(str: string): string {
//     var newWord: string = '';
//     var newArray: string[] = str.split(' ');
//     var spaces: number = 0;
//     for (var i = 0; i <= newArray.length - 1; i++) {
//         if (newArray[i] == '') {
//             spaces = 1;
//             newWord +=' ';
//             continue;
//         }
//         else {
//             var word = newArray[i];
//             newWord += word.split('').reverse().join('');
//             newWord += ' ';
//             spaces = 0;
//         }
//     }
//     newWord = newWord.slice(0, -1);
//     console.log(newWord)
//     return newWord;
// }


// 
// link: https://www.codewars.com/kata/57eae20f5500ad98e50002c5
// My solution
// export function noSpace(x:string):string {
//     let newWord: string = '';
//     for (let i: number = 0; i < x.length; i++){
//         if (x[i] == ' ') {
//             continue;
//         } else {
//           newWord += x[i]
//         };
//     }
//     console.log(newWord)
//     return newWord;
// }


//
//link: https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611
// function getLengthOfMissingArray(arrayOfArrays) {
//     if(!arrayOfArrays || !arrayOfArrays.length) return 0
//     let flag = false
//     const sorted = arrayOfArrays.sort((a, b) => {
//       if(a && b) return a.length - b.length
//       flag = true
//     });
//     if(flag) return 0
//     const min = sorted[0].length;
  
//     for (let i = 0; i < sorted.length; i += 1) {
//       const currentArr = sorted[i];
//       const estimatedLength = min + i;
//       if (currentArr.length === 0) {
//         break;
//       }
  
//       if (currentArr.length !== estimatedLength) {
//         return estimatedLength;
//       }
//     }
//     return 0;
//   }


//
// link: https://www.codewars.com/kata/514b92a657cdc65150000006
// function solution(number){
//     let summa = 0;
//     for (let i = 1; i<=number-1; i++){
//       if ((i % 3) == 0|| (i % 5)==0){
//         summa+=i;
//       };
//     };
//     return summa
//   };

//
// link: https://www.codewars.com/kata/522551eee9abb932420004a0
// function nthFibo(n) {
//     let i = 0,
//         fibo1 = 1,
//         fibo2 = 1,
//         sumFibo = 0;
//     if (n==1){
//       return 0
//     }else {
//       while (i < n-2){
//         sumFibo = fibo1+fibo2
//         fibo1 = fibo2
//         fibo2 = sumFibo
//         i = i + 1
//       }
//     }
//     return fibo1
//   }

//
// link: https://www.codewars.com/kata/5574835e3e404a0bed00001b
// function getParticipants(handshakes){
//     let people = 1;
//     for (let i = 0; i < handshakes; i++){
//       handshakes-= i;
//       people++
//     }
//     return people
//   }

//
// link: https://www.codewars.com/kata/585b1fafe08bae9988000314
// function explode(s) {
//     let newStr = ''
//     for (let i=0; i<=s.length-1; i++){
//       newStr+= s[i].repeat(s[i])
//     }
//     return newStr;
//   }

// 
// link: https://www.codewars.com/kata/58fa273ca6d84c158e000052
// My solution
// function digits(n) {
//     let a = 0;
//     if (n<=9) return 1;
//     if (n<=11) return 2;
//     for(var i = 0; n > 1; i++){
//       n = n / 10;
//       a++;
//       if (n%10 == 0) {
//         a++;
//       }
//     }
//     return a;
//   }

//
// link: https://www.codewars.com/kata/54592a5052756d5c5d0009c3
// My solution
// function head (a){
//     let arr = a.slice(0,1)
//     return arr[0]
//   }
//   function tail (b){
//     return b.slice(1)
//   }
//   function init (c){
//     return c.slice(0,-1)
//   }
//   function last (d){
//     let arr = d.slice(-1)
//     return arr[0]
//   }

//
// link: https://www.codewars.com/kata/52fba66badcd10859f00097e
// My solution
// const disemvowel = (str) => {
//     const chairs = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     let newStr = '';
//     for (let i = 0; i <= str.length; i++) {
//       let char = str.charAt(i);
//       if (chairs.indexOf(char) == -1) {
//         newStr += char;
//       }
//     }
//       return newStr;
//   };

//
// link: https://www.codewars.com/kata/554b4ac871d6813a03000035
// My solution
// function highAndLow(numbers){
//     const digits = numbers.split(' ').map(Number);
//     const max = Math.max(...digits),
//           min = Math.min(...digits),
//           result = `${max} ${min}`
//     return result
//   }
//   highAndLow("1 2 3 4 5");

//
// link: https://www.codewars.com/kata/54ba84be607a92aa900000f1
// function isIsogram(str){
//     str=str.toLowerCase();
//     let newStr = '';
//     if (str==''){
//       return true
//     }
//     for (let i=0; i<str.length; i++){
//       if (-1!=newStr.indexOf(str[i])){
//         return false
//       } else {
//         newStr+=str[i]
//       };
//     };
//     return true
//   }

