let hasil = '';
for (let i = 1; i <= 5; i++) {
  for (let j = i; j <= 5 * i; j++) {
    if (j % i == 0) {
      hasil += j+ ' '
    }
  }
  hasil += '\n'
}
console.log(hasil);