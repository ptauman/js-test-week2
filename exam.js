
function Mission1(numbers) {
    let doubled = [];
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 == 0)
        doubled.push(numbers[i]);
    }
    return doubled;
}
let numnbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Mission1(numnbers));

function Mission2(string) {
const arrayOfWords = string.split(` `);
let count = 0;
arrayOfWords.forEach(element => {
    if(element.length == 4){
        count++;
    } 
});
return count;
}
let words = 'axfg rffu rrfj 03f5 ,5f8f'
console.log(Mission2(words))


function Mission3(array) {
    var newArr = [];
for(var i = 0; i < array.length; i++)
{
    newArr = newArr.concat(array[i]);
}

return newArr;

}

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(Mission3(arr));
    

function Mission5(keys, values) {

var result = {};

keys.forEach((key, i) => result[key] = values[i]);
return result;
}
var keys = ['foo', 'bar', 'baz'];
var values = [11, 22];

keys.splice(values.length);

console.log(Mission5(keys, values));


module.exports = {Mission1, Mission2, Mission3, Mission5};

