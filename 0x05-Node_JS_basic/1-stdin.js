process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const cleophas = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is: ${cleophas}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
