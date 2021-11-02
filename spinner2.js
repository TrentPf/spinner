let charList = ["|", "/", "-", "\\"];

for (let i = 0; i < 2 * charList.length + 1; i++) {
  let currentIndex = i % charList.length;
  setTimeout(() => {
    process.stdout.write('\r' + charList[currentIndex] + '   ');
  }, 100 + 200 * i);
  if (i === 2 * charList.length) {
    setTimeout(() => {
      process.stdout.write('\n');
    }, 101 + 200 * i);
  }
}