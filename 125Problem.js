var isPalindrome = function (s) {
  const newStr = s.replace(/[^a-z0-9]/gi, "");

  return (
    newStr.split("").reverse().join("").toLowerCase() === newStr.toLowerCase()
  );
};

console.log(isPalindrome("a."));
