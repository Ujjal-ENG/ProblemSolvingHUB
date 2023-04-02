var isPalindrome = function (s) {
  const newStr = s.replace(/[\s,:,;,.]+/g, "");

  return (
    newStr.split("").reverse().join("").toLowerCase() === newStr.toLowerCase()
  );
};

console.log(isPalindrome("a."));
