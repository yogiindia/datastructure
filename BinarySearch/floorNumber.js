/**
 * Floor of Number : Greatest no. less than or equal to target
 * Return end instead of -1
 * End will point to floor no
 */

 function findFloorNumber(data, target) {
    const length = data.length;
    let start = 0;
    let end = length - 1;

    //if target is greater than last number in array
    if (target > data[end]) {
        return -1;
    }

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        console.log(mid);

        if (target === data[mid]) {
            return mid;
        }

        if (data[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return end; //end points to greatest no less than target
}

const data = [2, 3, 5, 8, 10, 12, 18, 20, 22, 25];

console.log(findFloorNumber(data, 17));
