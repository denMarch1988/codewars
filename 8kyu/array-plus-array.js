// Массив плюс массив
// Я новичок в программировании, и сейчас мне нужно получить сумму двух массивов... Точнее, сумму всех их элементов. Буду благодарен за помощь.

// P.S. Каждый массив содержит только целые числа. Результатом также является число.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

function arrayPlusArray(arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i];
    }

    for (let i = 0; i < arr2.length; i++) {
        sum2 += arr2[i];
    }
    return sum1 + sum2;
}

console.log(arrayPlusArray(arr1, arr2));