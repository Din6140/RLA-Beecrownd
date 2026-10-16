let entradaX: string | null;
let entradaY: string | null;
let x: number;
let y: number;
let inicio: number;
let fim: number;
let res: number;
let i: number;

entradaX = prompt(`Digite o valor de x`);
entradaY = prompt(`Digite o valor de y`);

res = 0;

if (entradaX !== null && entradaY !== null) {
    x = parseInt(entradaX);
    y = parseInt(entradaY);

    inicio = x;
    fim = y;

    if ( x > y) {
        inicio = y;
        fim = x;
    }

    for (i = inicio + 1; i < fim; i++) {
        if ( i % 2 !== 0) {
            res += i;
        }

    } 
    console.log(res);
}
