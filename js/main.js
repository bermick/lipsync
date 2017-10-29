var debug = false;

var X = [];
var Theta1 = [], Theta2 = [];
var Theta1_trans = [], Theta2_trans = [];
var z1 = [], z2 = [];
var h1 = [], h2 = [];
var m = 0;
var finalTimes [];

const EDGE_COMPOSITION = 'EDGE-943959449'; 

$(document).ready(function() {
  $('#fileinput').on('click', init);
  $('#generate').on('click', generateTimesMatrix);
  $('#replay').on('click', replay);
  $('#subir').submit(addFile);

  readFile("csv/Theta1.csv", Theta1);
  readFile("csv/Theta2.csv", Theta2);
});

function replay(){
  var composition = document.getElementById('edge').contentWindow.AdobeEdge.getComposition(EDGE_COMPOSITION);
  composition.getStage().play(0);
}

function generateTimesMatrix() {
  $.ajax({
    url: '/~ubuntu/lipsync/generate', 
    dataType: 'text', // response type
    cache: false,
    contentType: false,
    processData: false,
    type: "POST",
    success: function(response){
      readFile("csv/X.csv", X);
      $('#response').text(response);
    }
  });
}

function addFile(){
  var file_data = $('#fileField').prop('files')[0];   
  var form = $('form')[0];
  var form_data = new FormData()
  form_data.append('file', file_data);
  if(debug) console.log(file_data);
  if(debug) console.dir(form_data);                             
  $.ajax({
    url: '/~ubuntu/lipsync/upload',
    dataType: 'text',
    cache: false,
    contentType: false,
    processData: false,
    data: form_data,
    type: "POST",
    success: function(php_script_response){
      console.log("RESPONSE: " + php_script_response);
    }
  });
  return false;
}

function init(){
  m = X.length;
  console.log("m: " + m);

  ones(X);
  Theta1_trans = transpose(Theta1);
  z1 = multiply(X, Theta1_trans);
  h1 = sigmoidMatrix(z1);

  ones(h1);
  Theta2_trans = transpose(Theta2);
  z2 = multiply(h1, Theta2_trans);
  h2 = sigmoidMatrix(z2);

  // muestra la matriz acorde a un umbral p y regresa un arreglo
  var resultado = classify(h2);
  createTimes(resultado);
}

function classify(mat){
  var p = 0.3;
  var tmp = [];
  for(var i = 0; i < mat.length; i++){
    tmp[i] = [];
    for(var j = 0; j < mat[i].length; j++){
      tmp[i][j] = mat[i][j] > p ? 1 : 0;
    }
  }
  return tmp;
}

function createTimes(contents){
  var c = 0;
  for(var i =0; i < m; i++){
    for(var j = 0; j < 20; j++){ 
      if(contents[i][j] > 0){
        finalTimes[ c ] = ( ((i*20) + j)*50 ) + 5 ; // se suma un desplazamiento de 5
        c++;
      }
    }
  }
  createTimeLine();
}

function createTimeLine(){
  var id = 'eid',
      cont = 4000,
      prop = '"display"',
      easing = '"linear"',
      elem = '"${GRPH_PP_boca_E}"';
  var final = new Array();
  
  var propiedades =  new Object();

  for(var i = 0; i < finalTimes.length; i++){
    var tmp = id + (cont++).toString();
    tmp = "'"+tmp+"'";
    if(i%2)
      propiedades  = { 1: tmp , 2: prop, 3:finalTimes[i] , 4:0, 5:easing, 6:elem, 7:'"none"', 8:'"block"'}
    else
      propiedades  = { 1: tmp, 2: prop, 3:finalTimes[i] , 4:0, 5:easing, 6:elem, 7:'"block"', 8:'"none"'}
    
    final[i] = new Array();
    final[i] = "[" + Object.keys(propiedades).map(function (key) { return propiedades[key]; }) + "]"; 
    
  }

  if(debug) console.log(final);
    
   $.ajax({
        type: "POST",
        url: "generarJS.php",
        data: {data : final},

        success: function(returnval){
            console.log("ok");
            console.log(returnval);
            $('#edge').attr('src', 'edge/base.html');
        }
    });
}

function transpose(arr){
  arr = arr[0].map(function(col, i) { 
    return arr.map(function(fila) { 
      return fila[i] 
    })
  });
  return arr;
}

function multiply(a, b) {
  var aNumRows = a.length, aNumCols = a[0].length,
      bNumRows = b.length, bNumCols = b[0].length,
      m = new Array(aNumRows);  // initialize array of rows
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols); // initialize the current row
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;             // initialize the current cell
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  return m;
}

function ones(arr){
  for(var i = 0; i < arr.length; i++)
    arr[i].unshift(1);
}

function sigmoidMatrix(mat){
  var tmp = [];
  for(var i = 0; i < mat.length; i++){
    tmp[i] = [];
    for(var j = 0; j < mat[i].length; j++){
      tmp[i][j] = sigmoid(mat[i][j]);
    }
  }
  return tmp;
}

function sigmoid(t) {
    return 1/(1+Math.pow(Math.E, -t));
}

function readFile(fileName, container) {
  $.ajax({
      type: "GET",
      url: filePath,
      dataType: "text",
      cache: false,
      success: function(csv) {processData(csv, container);}
   });
}

function processData(csv, container) {
    var rows = csv.split(/\r\n|\n/);

    for (var i=0; i< (rows.length-1); i++){
        container[i] = (rows[i].split(','));
        for(var j = 0; j < 1000; j++)
          container[i][j] = parseFloat(container[i][j]);
    }
}