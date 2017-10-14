<!DOCTYPE HTML>
<html>
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <script type="text/javascript" src="js/jquery-3.0.0.min.js"></script>
  <title>Resultados</title>
  </head>
  <body>
    <a href="#" id="fileinput" />sincronizar</a><br>
    <!--<textarea id="resultados" cols="60" rows="40"></textarea>-->
    <iframe src="" id="edge" style="width:300px; height:380px;"></iframe>
    <div id="resultado" style="width:80%; height:100px;"></div>
    <form method="post" id="subir">
      <p>
        <label>Add file:</label>
        <br><input type="file" id="fileField" name="example" >
      </p>
      <input type="submit" id="boton" value="Subir">
    </form>

<script type="text/javascript">
  var debug = false;
  var X = [];
  var Theta1 = [], Theta2 = [];
  var Theta1_trans = [], Theta2_trans = [];
  var z1 = [], z2 = [];
  var h1 = [], h2 = [];
  var m = 0;
  var tiemposFinales = new Array();

  $(document).ready(function() {
    document.getElementById('fileinput').addEventListener('click', continuar, false);

    leerArchivo("Theta1.csv", Theta1);
    leerArchivo("Theta2.csv", Theta2);

    leerArchivo("X.csv", X);

    $('#subir').submit(function() {
      var file_data = $('#fileField').prop('files')[0];   
      var form = $('form')[0];
      var form_data = new FormData()
      form_data.append('file', file_data);
      console.log(file_data);
      console.dir(form_data);                             
      $.ajax({
        url: '/~ubuntu/lipsync/upload', // point to server-side PHP script 
        dataType: 'text',  // what to expect back from the PHP script, if anything
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,
        type: "POST",
        success: function(php_script_response){
          console.log("RESPONSE: " + php_script_response); // display response from the PHP script, if any
        }
      });
      return false;
      });
  });

  function continuar(){
    m = X.length;
    console.log("m: " + m);

    ones(X);
    Theta1_trans = transponer(Theta1);
    z1 = multiplicar(X, Theta1_trans);
    h1 = sigmoidMatriz(z1);

    ones(h1);
    Theta2_trans = transponer(Theta2);
    z2 = multiplicar(h1, Theta2_trans);
    h2 = sigmoidMatriz(z2);

    // muestra la matriz acorde a un umbral p y regresa un arreglo
    var resultado = clasificar(h2);
    crearTiempos(resultado);
  }

  function clasificar(mat){
    var p = 0.3;
    var tmp = [];
    for(var i = 0; i < mat.length; i++){
      tmp[i] = [];
      for(var j = 0; j < mat[i].length; j++){
        tmp[i][j] = mat[i][j] > p ? 1 : 0;
      }
    }
    //document.getElementById('resultados').value = tmp;
    return tmp;
  }
  /////////////////////////////

  function crearTiempos(contents){
    var c = 0;
    for(var i =0; i < m; i++){
      for(var j = 0; j < 20; j++){ 
        if(contents[i][j] > 0){
          tiemposFinales[ c ] = ( ((i*20) + j)*50 ) + 5 ; // se suma un desplazamiento de 5
          //console.log("arreglo[" + i + "][" + j + "] " + arreglo[i][j]);
          c++;
        }
      }
    }
    //console.table(contents);
    //console.log(tiemposFinales);
    crearLineaTiempo();
  }

  function crearLineaTiempo(){
    var id = 'eid',
        cont = 4000,
        prop = '"display"',
        easing = '"linear"',
        elem = '"${GRPH_PP_boca_E}"';
    var final = new Array();
    
    var propiedades =  new Object();

    for(var i = 0; i < tiemposFinales.length; i++){
      var tmp = id + (cont++).toString();
      tmp = "'"+tmp+"'";
      if(i%2)
        propiedades  = { 1: tmp , 2: prop, 3:tiemposFinales[i] , 4:0, 5:easing, 6:elem, 7:'"none"', 8:'"block"'}
      else
        propiedades  = { 1: tmp, 2: prop, 3:tiemposFinales[i] , 4:0, 5:easing, 6:elem, 7:'"block"', 8:'"none"'}
      
      final[i] = new Array();
      final[i] = "[" + Object.keys(propiedades).map(function (key) { return propiedades[key]; }) + "]"; 
      
    }
      if(debug)console.log(final);
      
     
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

      //document.getElementById('resultado').innerHTML = final;
  }
  /////////////////////////////


  function transponer(arr){
    arr = arr[0].map(function(col, i) { 
      return arr.map(function(fila) { 
        return fila[i] 
      })
    });
    return arr;
  }

  function multiplicar(a, b) {
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

  function sigmoidMatriz(mat){
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

  function leerArchivo(fileName, contenedor) {
    //var f = evt.target.files[0];
    $.ajax({
        type: "GET",
        url: "csv/"+fileName,
        dataType: "text",
        success: function(csv) {procesarDatos(csv, contenedor);}
     });
  }


function procesarDatos(csv, contenedor) {
    var filas = csv.split(/\r\n|\n/);

    for (var i=0; i< (filas.length-1); i++){
        contenedor[i] = (filas[i].split(','));
        for(var j = 0; j < 1000; j++)
          contenedor[i][j] = parseFloat(contenedor[i][j]);
    }

    //console.log(contenedor[0][0])
}
</script>
  </body>
</html>
