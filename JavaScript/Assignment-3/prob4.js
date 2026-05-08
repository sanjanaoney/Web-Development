/** Problem 04 - (Delete / Store) */
var fileName= "slipdf.txt";
//write your code here
var n = fileName.length;
if (fileName[0] === '#') {
    console.log("Store");
}
else if (
    fileName[n - 4] === '.' &&
    fileName[n - 3] === 'p' &&
    fileName[n - 2] === 'd' &&
    fileName[n - 1] === 'f'
)
 {
    console.log("Store");
}
else if (
    fileName[n - 5] === '.' &&
    fileName[n - 4] === 'd' &&
    fileName[n - 3] === 'o' &&
    fileName[n - 2] === 'c' &&
    fileName[n - 1] === 'x'
)
 {
    console.log("Store");
}
else {
    console.log("Delete");
}