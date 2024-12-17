var n = prompt("Enter your value");
var count = 0;
for (i = 0; i <= n; i++) {
  if (i % 2 == 0) {
    count += i;
  }
}
window.alert("The Sum of even number between 0 and " + n + " is :" + count);
