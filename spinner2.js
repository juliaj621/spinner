let time = 100;
let char = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|  ' + '\n'];

for (const item of char) {
  setTimeout(() => {
    process.stdout.write(item);
  }, time += 200);
}