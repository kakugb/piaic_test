var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var ordinalNum;
for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
        ordinalNum = "1st";
    }
    else if (nums[i] === 2) {
        ordinalNum = "2nd";
    }
    else if (nums[i] === 3) {
        ordinalNum = "3rd";
    }
    else if (nums[i] === 4) {
        ordinalNum = "4th";
    }
    else if (nums[i] === 5) {
        ordinalNum = "5th";
    }
    else if (nums[i] === 6) {
        ordinalNum = "6th";
    }
    else if (nums[i] === 7) {
        ordinalNum = "7th";
    }
    else if (nums[i] === 8) {
        ordinalNum = "8th";
    }
    else {
        ordinalNum = "9th";
    }
    console.log(ordinalNum);
}
