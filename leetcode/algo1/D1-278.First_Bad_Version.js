const solution = (isBadVersion) => {
  return (n) => {
    let start = 1;
    let ans = null;
    let end = n;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        ans = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return ans;
  };
};
