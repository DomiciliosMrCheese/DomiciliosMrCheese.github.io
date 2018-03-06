var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic().listen(8080, function(){
	console.log("Inicializando el servidor en el puerto 8080");
}));