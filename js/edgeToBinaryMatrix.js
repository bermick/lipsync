var training_set = [
];

var ultimo = training_set[training_set.length - 1];
var numElementos = Math.floor(ultimo[2]/1000);

//tiempos son TODOS los tiempos
var tiempos = new Array();
training_set.forEach(function(e, i){
   tiempos[i] = e[2];
});

//quitamos el primer elemento del arreglo
//tiempos.shift();

var T = new Array();

var c = 0;
var empiezaEn = 1;
// separar los tiempos de cada caso
for(var i = 0; i <= numElementos; i++){
   T[i] = new Array();
   //inicializar el i-ésimo arreglo en ceros
   for(var j = 0; j < 20; j++) T[i][j] = 0;

   while(i == Math.floor(tiempos[c]/1000)){
      var milisecs = tiempos[c] % 1000;
      var indice = Math.floor(milisecs / 50);
      T[i][indice] = milisecs; 
      c++;
   }
}

logT();

function logT(){
   for(var i = 0; i <= T.length; i++){
      console.log("T["+i+"]:" + T[i]);
   }
}

function log10(val) {
  return Math.log(val) / Math.LN10;
}


var dirSalNN = "file:///C:/Users/humantalent/Downloads/tmp/sync/predecido2.csv";
leerArchivoTexto(dirSalNN);
function leerArchivoTexto(archivo)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", archivo, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
    console.log("leerArchivoTexto");
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                console.log(allText);
            }
        }
    }
    rawFile.send(null);
}