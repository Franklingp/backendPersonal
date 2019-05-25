'use strict'

// Enlazando con base de datos

var mongoose = require('mongoose');
var app = require('./app.js');
var port = 3700;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/backend', {useNewUrlParser: true}) 
		.then(() => {
			console.log("La base de datos se ha enlazado correctamente");

			app.listen(port, () => {
				console.log("Servidor corriendo exitosamente en la url: localhost:"+port);
			});
		})
		.catch(error => console.log(error));
