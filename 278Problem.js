var solution = function (isBadVersion) {
  return function (n) {
    let left = 1;
    let right = n;
    while (left < right) {
      let mid = Math.floor((left + bad) / 2);
      if (isBadVersion(mid)) return (right = mid);
      else return mid + 1;
    }
    return left;
  };
};
