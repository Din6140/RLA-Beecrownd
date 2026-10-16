let entradaX: string | null;
let entradaY: string | null;
let x: number;
let y: number;
let msg: string;

entradaX = ` `
entradaY = ` `


    while(entradaX !== null && entradaY !== null) {
        entradaX = prompt(`Digite o valor de x`);
        entradaY = prompt(`Digite o valor de y`);

        if (entradaX !== null && entradaY !== null) {
        x = parseInt(entradaX);
        y = parseInt(entradaY);

        if (x !== y ){ 

        if (x > y){
            msg = (`DECRESCENTE`);
        } else {
            msg = (`CRESCENTE`)
        }
        console.log(msg)
    } else {
        break;
    }
}
}
