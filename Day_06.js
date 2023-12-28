function processData(input) {
  //Enter your code here
  const inputLines = input.trim().split("\n"); //array
  const testCaseNumber = parseInt(inputLines[0]);

  for (let i = 1; i <= testCaseNumber; i++) {
    const string = inputLines[i].trim();
    let evenChars = "";
    let oddChars = "";
    for (let j = 0; j < string.length; j++) {
      if (j % 2 === 0) {
        evenChars += string[j]; // Add even-indexed characters
      } else {
        oddChars += string[j]; // Add odd-indexed characters
      }
    }
    console.log(`${evenChars} ${oddChars}`);
    console.log("hello");
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
