'use strict'

var Client = require('../models/client');

function addClient(req,res){
	var client = new Client();
	var params = req.body;

if(params.completeName && params.title && params.telephone && params.companyName && params.companyDirection && params.companyTelephone){
	client.completeName = params.completeName;
	client.title = params.title;
	client.telephone = params.telephone;
	client.companyName = params.companyName;
	client.companyDirection = params.companyDirection;
	client.companyTelephone = params.companyTelephone;
	
	client.save((err,isclient)=>{
	if(err){
	res.status(200).send({message: 'Error en el registro de un nuevo cliente'})
	}else{
	if(!isclient){
	res.status(200).send({message: 'El cliente no fue registrado'})
	}else{
	res.status(200).send({isclient})
	}
	}

	});

}else{
	res.status(200).send({message: 'Ingrese correctamente todos los datos'});
}
	
}




function getClients(req,res){
	Client.find({},(err,result)=>{
	if(err){
		res.status(200).send({message: 'Error en la busqueda'});
	}else{
	if(!result){
		res.status(200).send({message: 'No se encontraron datos'});
	}else{
		res.status(200).send({result})
	}
	}

	})
}


module.exports = {
	 addClient
	,getClients
	}