<!DOCTYPE HTML>
<html>
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <script type="text/javascript" src="js/jquery-3.0.0.min.js"></script>
  <title>Resultados</title>
  </head>
  <body>
    <a href="#" id="generate" />generar</a><br>
    <a href="#" id="fileinput" />reproducir</a><br>
    <a href="#" id="replay" />replay</a><br>
    <iframe src="" id="edge" style="width:300px; height:380px;"></iframe>
    <div id="resultado" style="width:80%; height:100px;"></div>
    <form method="post" id="subir">
      <p>
        <label>Add file:</label>
        <br><input type="file" id="fileField" name="example" >
      </p>
      <input type="submit" id="boton" value="Subir">
    </form>
    <div id="response"></div>
  <script type="text/javascript" src="js/main.js"></script>
  </body>
</html>
