// removed duplicates of characters
// keeps only last inistance

const dedupe = (str) => {
  var charChecker = [];
  for (var i = str.length - 1; i >= 0; i--) {
    if (charChecker[str.charCodeAt(i)] == null) {
      charChecker[str.charCodeAt(i)] = 1;
    } else {
      str = str.substring(0, i) + str.substring(i + 1, str.lenght);
    }
  }
  return str;
};

s = [
  "Snaps! crackles! pops!",
  "Did  I shine my shoes today?",
  "scoop dedupe!",
  "aabbccddeeff112233  aabbcc",
];
for (var i = 0; i < s.length; i++) {
  console.log(dedupe(s[i]));
}
