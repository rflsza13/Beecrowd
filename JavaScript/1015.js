// *** Distância Entre Dois Pontos ***
// Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer 
// no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 
// casas decimais após a vírgula, segundo a fórmula: Math.sqrt((x2 - x1)² + (y2 - y1)²)

var [x1, y1] = [1.0, 7.0];
var [x2, y2] = [5.0, 9.0];

var dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
console.log(dist.toFixed(4));