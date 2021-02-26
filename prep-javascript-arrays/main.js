var languagesArray = ['html', 'css', 'javascript', 'react', 'node'];

console.log(languagesArray);
console.log(languagesArray.length);

languagesArray.push('C#', 'php');

console.log(languagesArray);

languagesArray.pop();

console.log(languagesArray);

languagesArray.splice(0, 0, 'C++');

console.log(languagesArray);

languagesArray.splice(0, 1);

console.log(languagesArray);

var thirdElement = languagesArray.slice(2, 3);

console.log(thirdElement);

var arrayLength = languagesArray.length;

console.log(arrayLength);

var lastItem = languagesArray[languagesArray.length - 1];

console.log(lastItem);
