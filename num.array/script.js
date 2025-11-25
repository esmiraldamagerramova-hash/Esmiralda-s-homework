//1
const longerWords = (sentence) => sentence.split(' ').filter(w => w.length > 4);
console.log('//1', longerWords('hello world amazing javascript'));

//2
const addUSD = (nums) => nums.map(n => n + 'USD');
console.log('//2', addUSD([10, 20, 30]));

//3
const removeVowels = (str) => {
  const vowels = 'aeiouAEIOU';
  return str.split('').filter(char => !vowels.includes(char)).join('');
};
console.log('//3', removeVowels('hello world'));
//4
const capitalize = (arr) => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log('//4', capitalize(['hello', 'world']));

//5
const filterMultiples = (nums) => nums.filter(n => n % 3 === 0 || n % 5 === 0);
console.log('//5', filterMultiples([3, 5, 7, 9, 10, 15]));

//6
const getInitials = (name) => name.split(' ').map(w => w[0].toUpperCase()).join('.');
console.log('//6', getInitials('john doe'));

//7
const average = (nums) => Math.round(nums.reduce((a, b) => a + b) / nums.length * 100) / 100;
console.log('//7', average([10, 20, 30]));

//8
const longestWord = (sentence) => sentence.split(' ').reduce((a, b) => a.length > b.length ? a : b);
console.log('//8', longestWord('the quick brown fox'));

//9
const onlyNumbers = (arr) => arr.filter(item => typeof item === 'number');
console.log('//9', onlyNumbers([1, 'a', 2, 'b', 3]));

//10
const gmailOnly = (emails) => emails.filter(e => e.includes('@gmail.com'));
console.log('//10', gmailOnly(['test@gmail.com', 'user@yahoo.com', 'john@gmail.com']));

//11
const nameLengths = (names) => names.map(n => n.length);
console.log('//11', nameLengths(['alice', 'bob', 'charlie']));

//12
const isDigitsOnly = (str) => [...str].every(char => char >= '0' && char <= '9');
console.log('//12', isDigitsOnly('12345'));

//13
const squaredFiltered = (nums) => nums.map(n => n * n).filter(n => n > 20);
console.log('//13', squaredFiltered([1, 3, 5, 7]));

//14
const reverseWithDash = (str) => str.split(',').reverse().join('-');
console.log('//14', reverseWithDash('a,b,c,d'));

//15
const filterShort = (words) => words.filter(w => w.length >= 3);
console.log('//15', filterShort(['a', 'ab', 'abc', 'abcd']));

//16
const countChar = (str, char) => [...str].filter(c => c === char).length;
console.log('//16', countChar('hello world', 'l'));

//17
const sumEvens = (nums) => nums.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);
console.log('//17', sumEvens([1, 2, 3, 4, 5, 6]));

//18
const toObjects = (nums) => nums.map(n => ({ value: n, isEven: n % 2 === 0 }));
console.log('//18', toObjects([1, 2, 3, 4]));

//19
const reverseString = (str) => {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) result += str[i];
  return result;
};
console.log('//19', reverseString('hello'));

//20
const startsWithA = (arr) => arr.filter(s => s[0].toLowerCase() === 'a');
console.log('//20', startsWithA(['apple', 'banana', 'apricot', 'cherry']));

//21
const formatPhone = (phone) => `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
console.log('//21', formatPhone('1234567890'));

//22
const divideAndRound = (nums) => nums.map(n => Math.ceil(n / 2));
console.log('//22', divideAndRound([5, 10, 15]));

//23
const spaceToUnderscore = (str) => str.replaceAll(' ', '_');
console.log('//23', spaceToUnderscore('hello world test'));

//24
const adultsNames = (users) => users.filter(u => u.age > 18).map(u => u.name);
console.log('//24', adultsNames([{ name: 'Alice', age: 25 }, { name: 'Bob', age: 17 }]));

//25
const minMaxCount = (nums) => {
  const sorted = nums.sort((a, b) => a - b);
  return `Min: ${sorted[0]}, Max: ${sorted[sorted.length - 1]}, Count: ${nums.length}`;
};
console.log('//25', minMaxCount([5, 2, 9, 1, 7]));