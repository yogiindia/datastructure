const binarySearch = (arr, query) => {
  console.log(arr, query);
  const length = arr.length;

  let low = 0;
  let high = length - 1;

  while (low <= high) {
    //change mid based on low and high
    const mid = Math.floor((high + low) / 2);

    console.log(mid);
    console.log(low, high);

    const midNumber = arr[mid];

    if (midNumber === query) {
      return mid;
    }

    if (query < midNumber) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }

    console.log(low, high);
  }

  return -1;
};

const list = [9, 12, 32, 45, 51, 69, 73, 88, 90, 98];
const query = 15;

console.log(binarySearch(list, query));
