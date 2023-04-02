var solution = function (isBadVersion) {
  return function (n) {
    if (isBadVersion) return isBadVersion;
    return n;
  };
};
