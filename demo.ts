function findFirstOccurrence(data: number[], target: number) {
    let left = 0;
    let right = data.length - 1;
    let result: number = -1;
    while (left <= right) {
        let mid = Math.floor((right - left) / 2);
        if (data[mid] == target) {
            result = mid;
            return result;
        } else if (data[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }
}
let data=[2, 5, 5, 5, 6, 6, 8, 9, 9, 9];
let target = 5;
console.log(findFirstOccurrence(data,target));