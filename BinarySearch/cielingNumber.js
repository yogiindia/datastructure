/**
 * Cieling of Number : Smallest no. greater or equal to target
 * Do no return -1, instead return next number greater than target
 * Return start instead of -1
 * Start will point to cieling no if start is greater than end.
 */

 function findCielingNumber(data, target) {
    const length = data.length;
    let start = 0;
    let end = length - 1;

    //if target is greater than last number in array
    if (target > data[end]) {
        return -1;
    }

    while (start <= end) {
        // const mid = Math.floor((start + (end-start)) / 2);
        const mid = Math.floor((start + end) / 2);

        if (target === data[mid]) {
            return mid;
        }

        if (data[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return start; //start points to smallest no greater than target
}

const data = [2, 3, 5, 8, 10, 12, 18, 20, 22, 25];

console.log(findCielingNumber(data, 9));
