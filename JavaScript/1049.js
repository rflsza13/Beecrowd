// *** Animal ***
// Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo,
// da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido,
// através das três palavras fornecidas.

// aguia    -   carnivoro                            |                                hematofago    -   pulga
//                         > ave                     |                   inseto    <
// pomba    -   onivoro                              |                                herbivoro     -   lagarta
//                                     > vertebrado  | invertebrado <
// homem    -   onivoro                              |                                hematofago    -   sanguesuga
//                         > mamifero                |                   anelideo  <
// vaca     -   herbivoro                            |                                onivoro       -   minhoca

// Entrada
//    A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima,
//    com todas as letras minúsculas.
//Saída
//    Imprima o nome do animal correspondente à entrada fornecida.

var [d1, d2, d3] = ['invertebrado', 'anelideo', 'onivoro'];

switch(d1){
    case 'vertebrado':
        switch(d2){
            case 'ave':
                switch(d3){
                    case 'carnivoro':
                        console.log('aguia');
                        break;
                    case 'onivoro':
                        console.log('pomba');
                        break;
                    default:
                        break;
                }
                break;
            case 'mamifero':
                switch(d3){
                    case 'onivoro':
                        console.log('homem');
                        break;
                    case 'herbivoro':
                        console.log('vaca');
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
        break;
    case 'invertebrado':
        switch(d2){
            case 'inseto':
                switch(d3){
                    case 'hematofago':
                        console.log('pulga');
                        break;
                    case 'herbivoro':
                        console.log('lagarta');
                        break;
                    default:
                        break;
                }
                break;
            case 'anelideo':
                switch(d3){
                    case 'hematofago':
                        console.log('sanguessuga');
                        break;
                    case 'onivoro':
                        console.log('minhoca');
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
        break;
    default:
        break;
}