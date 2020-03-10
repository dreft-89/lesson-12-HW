let arr = ["HTML", 11, "JavaScript", 2, "CSS", 23, 12];
arr.push(-88);
arr.unshift(1000);
arr.push('Last array element');
arr.splice(3, 1);

let numb = arr.filter(function (item) {
    return typeof item === "number"
});

let b = numb.map(numb => numb * numb);
console.log(Math.max(...b));