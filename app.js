function generarContrasena() {
    var longitud = document.getElementById("longitud").value;
    var contrasena = generarContrasenaAleatoria(longitud);
    document.getElementById("resultado").innerHTML = contrasena;
  
    var tiempoRestante = 10;
    document.getElementById("tiempoRestante").innerHTML = tiempoRestante;
    document.getElementById("contador").style.display = "block";
  
    var contador = setInterval(function() {
      tiempoRestante--;
      document.getElementById("tiempoRestante").innerHTML = tiempoRestante;
      if (tiempoRestante === 0) {
        clearInterval(contador);
        document.getElementById("resultado").innerHTML = "";
        document.getElementById("contador").style.display = "none";
      }
    }, 1000);
  }
  
  
  // Función para generar un número aleatorio
  function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  // Función para generar una letra aleatoria
  function generarLetraAleatoria() {
    var letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
    var indice = generarNumeroAleatorio(0, letras.length - 1);
    return letras.charAt(indice);
  }
  
  // Función para generar una contraseña aleatoria
  function generarContrasenaAleatoria(longitud) {
    var contrasena = "";
    for (var i = 0; i < longitud; i++) {
      var opcion = generarNumeroAleatorio(1, 4);
      if (opcion === 1) {
        contrasena += generarLetraAleatoria().toUpperCase();
      } else if (opcion === 2) {
        contrasena += generarLetraAleatoria();
      } else if (opcion === 3) {
        contrasena += generarNumeroAleatorio(0, 9);
      } else {
        contrasena += generarLetraAleatoria();
      }
    }
    return contrasena;
  }
  
  // Event listener para el botón "Generar Contraseña"
  document.getElementById("generarBtn").addEventListener("click", function() {
    generarContrasena();
    document.getElementById("contador").style.display = "block";
  });