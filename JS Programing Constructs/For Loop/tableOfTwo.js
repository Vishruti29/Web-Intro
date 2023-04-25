const n = process.argv[2]; // Read the value of n from the command-line argument

for (let i = 0; i <= n; i++) {
  console.log(`2^${i} = ${2 ** i}`);
}
