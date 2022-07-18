function findFirstOccurrence(data, target) {
    var left = 0;
    var right = data.length - 1;
    var result = -1;
    while (left <= right) {
        var mid = Math.floor((right - left) / 2);
        if (data[mid] == target) {
            result = mid;
            return result;
        }
        else if (data[mid] > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
}
var data = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9];
var target = 5;
console.log(findFirstOccurrence(data, target));
