'use strict'

var Personal = require('../models/personal');

var controller = {

	//metodo de Prueba
	//test method

	home: function(req, res){
		return res.status(200).send({message: "esta es la Home"});
	},

	//Metodo para guardar en la base de datos un nuevo empleado
	//method to save an employee in the data base

	savePersonal: function(req, res){
		var personal = new Personal();
		
		var param = req.body;

		personal.name = param.name;
		personal.surname = param.surname;
		personal.age = param.age;
		personal.position = param.position;
		personal.identification = param.identification;


		personal.save((error,personalGuardado) => {

			if(error){
				return res.status(500).send({message: "Ha ocurrido un error al intentar guardar el documento."});
			}
			if(!personalGuardado){
				return res.status(404).send({message: "No se ha podido guardar el documento correctamente."});
			}

			return res.status(200).send({Personal: personalGuardado});
		});
		
	},

	// method to obatin an employee in the data base
	//metodo para obtener un empleado de la base de datos

	getEmployee: function(req, res){
		var personalId = req.params.id;

		Personal.findById(personalId, (err, employee) => {
			if(err){
				return res.status(500).send({ message: "Ha ocurrido un error al buscar el empleado..." });
			}
			if(!employee){
				return res.status(404).send({ message: "No se ha podido encontrar el empleado..."});
			}
			return res.status(200).send({ employee });
		});
	},

	// metodo para obtener todo el personal que tengo registrado en mi base de datos

	getPersonal: function(req, res){
		Personal.find({}).sort("name").exec((error, personalRes) =>{
			if(error){
				return res.status(500).send({ message: "Ha ocurrido un error al buscar los empleados"});
			}
			if(!personalRes){
				return res.status(404).send({ message: "No se ha encontrado ningun empleado registrado"});
			}

			return res.status(200).send({ Personal: personalRes });
		});
	},

	// metodo para eliminar un empleado de mi base de datos

	deleteEmployee: function(req, res){
		var employeeId = req.params.id;

		Personal.findByIdAndRemove(employeeId, {new:true, useFindAndModify:false}, (err, deleted) => {
			if(err){
				return res.status(500).send({ message: "Ha ocurrido un error al intentar eliminar el empleado"});
			}
			if(!deleted){
				return res.status(404).send({ message: "No se ha podido encontrar el documento a eliminar"});
			}

			return res.status(200).send({ Personal: deleted });
		});
	},

	// metodo para actualizar los datos de un empleado en mi base de datos

	updateEmployee: function(req, res){
		var employeeId = req.params.id;
		var newEmployee = req.body;

		Personal.findByIdAndUpdate(employeeId, newEmployee, {new:true, useFindAndModify:false}, (err, updated) => {
			if(err){
				return res.status(500).send({ message: "Ha ocurrido un error al intentar actualizar el documento"});
			}
			if(!updated){
				return res.status(404).send({ message: "No se ha podido encontrar el para actualizar"});
			}

			return res.status(200).send({ Personal: updated});
		});
	}

};

module.exports = controller;