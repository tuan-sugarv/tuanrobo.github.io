var chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function getRandom() {
  var charItem = chars[Math.floor(Math.random()*chars.length)];
  var charDisplay1 = document.getElementById("cap");
  var charDisplay2 = document.getElementById("reg");
  charDisplay1.innerHTML = charItem;
  charDisplay2.innerHTML = charItem;
  // return chars;
};

document.getElementById("random").addEventListener("click", getRandom);
