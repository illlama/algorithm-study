const isAnagram = (s, t) => {
  return setMap(s) === setMap(t);
};
const setMap = (text) => {
  return text.replace(/[^\w]/g, "").toLowerCase().split("").sort().join();
};
