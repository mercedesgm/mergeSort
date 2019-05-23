function split(wholeArray) {
    const length = wholeArray.length;
    const middle = Math.floor(length / 2);
    const firstHalf = wholeArray.slice(0, middle);
    const secondHalf = wholeArray.slice(middle)
    
    return [firstHalf, secondHalf]
}

function merge(firstHalf, secondHalf) {
    let result = [];
    let firstLength = firstHalf.length;
    let secondLength = secondHalf.length
    while (result.length !== firstLength + secondLength) {
        if(firstHalf[0] === undefined) {
            result = result.concat(secondHalf)
            break
        } else if (secondHalf[0] === undefined) {
            result = result.concat(firstHalf)
             break
        }

        if (firstHalf[0] < secondHalf[0]) {
            result.push(firstHalf.shift())         
        } else {
            result.push(secondHalf.shift())
        }
    }
    return result;
}

function mergeSort(array) {
    console.log('array', array, '\n')

    if (array.length < 2) {
        return array;
    }
    
    const nestedArray = split(array);

    let firstHalf = nestedArray[0];
    let secondHalf = nestedArray[1];

    console.log('firstHalf', firstHalf, '\n')
    console.log('secondHalf', secondHalf, '\n')

    if (firstHalf.length !== 1) {
        firstHalf = mergeSort(firstHalf)
    }

    if (secondHalf.length !== 1)  {
        secondHalf = mergeSort(secondHalf)
    }


    return merge(firstHalf, secondHalf)
}


