const idade = [15, 21, 30, 17, 18, 44, 12, 50];

const idadeMaiores = idade.filter((x) => x >= 18);
const idadeMenores = idade.filter((x) => x < 18);

console.log(idade);
console.log(idadeMaiores);
console.log(idadeMenores);