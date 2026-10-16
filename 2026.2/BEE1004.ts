let entradaX: string | null;
let entradaY: string | null;
let x: number;
let y: number;

entradaX = prompt(`Digite o valor de x`);
entradaY = prompt(`Digite o valor de y`);


if (entradaX !== null && entradaY !== null) {
    x = parseInt(entradaX);
    y = parseInt(entradaY);

  console.log(`PROD = ${x + y}`);
}
