var letterCombinations = function (digits) {
  let ht = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  for (let i of digits) {
    for (let j in ht) {
      if (i == j) {
        console.log(ht[j]);
      }
    }
  }
};

console.log(letterCombinations("23"));
