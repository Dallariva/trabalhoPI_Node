module.exports = function(app) {
	var controller = app.controllers.calculadora;
	
	app.get('/', controller.get.index);
	app.get('/somar', controller.get.somar);
	app.get('/subtrair', controller.get.subtrair);
	app.get('/multiplicar', controller.get.multiplicar);
	app.get('/dividir', controller.get.dividir);
	
	app.get('/telhaFrancesa', controller.get.telhaFrancesa);
	app.get('/telhaPaulista', controller.get.telhaPaulista);
	app.get('/telhaPlan', controller.get.telhaPlan);

	app.get('/tijolosComuns5cm', controller.get.tijolosComuns5cm);
	app.get('/tijolosComuns10cm', controller.get.tijolosComuns10cm);
	app.get('/tijolosComuns20cm', controller.get.tijolosComuns20cm);

	app.get('/tijolosCeramicos10cm', controller.get.tijolosCeramicos10cm);
	app.get('/tijolosCeramicos20cm', controller.get.tijolosCeramicos20cm);

	app.get('/blocosDeConcreto10cm', controller.get.blocosDeConcreto10cm);
	app.get('/blocosDeConcreto15cm', controller.get.blocosDeConcreto15cm);
	app.get('/blocosDeConcreto20cm', controller.get.blocosDeConcreto20cm);

	app.get('/acrilicaEconomica', controller.get.acrilicaEconomica);
	app.get('/acrilicaPremiumAcetinado', controller.get.acrilicaPremiumAcetinado);
	app.get('/acrilicaPremiumFosco', controller.get.acrilicaPremiumFosco);
	app.get('/acrilicaStandard', controller.get.acrilicaStandard);
	app.get('/esmaltePremium', controller.get.esmaltePremium);
	app.get('/latexPremium', controller.get.latexPremium);
	app.get('/latexStandard', controller.get.latexStandard);
	app.get('/tintaParaGesso', controller.get.tintaParaGesso);
	app.get('/tintaParaPiso', controller.get.tintaParaPiso);
	app.get('/vernizAcrilico', controller.get.vernizAcrilico);            
	
	app.post('/calcular', controller.post.calcular);
};