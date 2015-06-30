module.exports = function() {
	var Controller = {
		utils: {
			formatarResposta: function(resultado) {
				var accounting = require('accounting');
				var resposta   = {
					resultado: 0.0
				};
				
				resultado = accounting.formatNumber(resultado, 2, ".", ",");
				resposta.resultado = resultado;
				
				return resposta;
			},
			
			calculos: {
				calcular: function(parametros) {
					var numero1 = parseFloat(parametros.numero1);
					var numero2 = parseFloat(parametros.numero2);
					
					var resultado = Controller.utils.calculos[parametros.operacao](numero1, numero2);
					
					return resultado;
				},
				
				somar: function(numero1, numero2) {
					return numero2 + numero1;
				},
				
				subtrair: function(numero1, numero2) {
					return numero1-numero2;
				},
				
				multiplicar: function(numero1, numero2) {
					return numero1 * numero2;
				},
				
				dividir: function(numero1, numero2) {
					return numero1 / numero2;
				},

				telhaFrancesa:  function(numero1, numero2){
					return numero1 * numero2 * 1.6;
				},

				telhaPaulista: function(numero1, numero2){
					return numero1 * numero2 * 2.5;
				},

				telhaPlan: function(numero1, numero2){
					return numero1 * numero2 * 2.6;
				},

				tijolosComuns5cm: function(numero1){
					return numero1 * 46;
				},

				tijolosComuns10cm: function(numero1){
					return numero1 * 84;
				},

				tijolosComuns20cm: function(numero1){
					return numero1 * 149;
				},

				tijolosCeramicos10cm: function(numero1){
					return numero1 * 25;
				},

				tijolosCeramicos20cm: function(numero1){
					return numero1 * 47;
				},

				blocosDeConcreto10cm: function(numero1){
					return numero1 * 14;
				},

				blocosDeConcreto15cm: function(numero1){
					return numero1 * 17;
				},

				blocosDeConcreto20cm: function(numero1){
					return numero1 * 21;
				},

				acrilicaEconomica: function(numero1, numero2) {
					return numero1 * (numero2 / 8.30);
				},

				acrilicaPremiumAcetinado: function(numero1, numero2) {
					return numero1 * (numero2 / 10);
				},

				acrilicaPremiumFosco: function(numero1, numero2) {
					return numero1 * (numero2 / 21);
				},

				acrilicaStandard: function(numero1, numero2) {
					return numero1 * (numero2 / 13.80);
				},

				esmaltePremium: function(numero1, numero2) {
					return numero1 * (numero2 / 11);
				},

				latexPremium: function(numero1, numero2) {
					return numero1 * (numero2 / 16.60);
				},

				latexStandard: function(numero1, numero2) {
					return numero1 * (numero2 / 12.5);
				},

				tintaParaGesso: function(numero1, numero2) {
					return numero1 * (numero2 / 6.5);
				},

				tintaParaPiso: function(numero1, numero2) {
					return numero1 * (numero2 / 5.5);
				},

				vernizAcrilico: function(numero1, numero2) {
					return numero1 * (numero2 / 12.5);
				},

				somar10: function(numero) {
                    var valor = Number(numero);
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;

                    return valor;
                },

                diminuir10: function(numero) {
                    var valor = Number(numero);
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;

                    return valor;
                },

                somar15: function(numero) {
                    var valor = Number(numero);
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;

                    return valor;
                },

                diminuir15: function(numero) {
                    var valor = Number(numero);
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;

                    return valor;
                },

                somar20: function(numero) {
                    var valor = Number(numero);
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;

                    return valor;
                },

                diminuir20: function(numero) {
                    var valor = Number(numero);
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;

                    return valor;
                },

                somar25: function(numero) {
                    var valor = Number(numero);
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;
                    valor += 1;

                    return valor;
                },

                diminuir25: function(numero) {
                    var valor = Number(numero);
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;

                    return valor;
                }
			},
			
			validaParametro: function(parametro) {
				if(parametro && parametro !== '') {
					return parseFloat(parametro);
				}
				
				return 0.0;
			},
			
			extrairParametros: function(body) {
				var parametros = {
					numero1: 0.0,
					numero2: 0.0,
					operacao: body.operacao
				};
				
				parametros.numero1 = Controller.utils.validaParametro(body.numero1);
				parametros.numero2 = Controller.utils.validaParametro(body.numero2);
				
				return parametros;
			}
		},
		
		get: {
			index: function(request, response) {
				response.render('index');
			},
			
			somar: function(request, response) {
				response.render('somar');
			},
			
			subtrair: function(request, response) {
				response.render('subtrair');
			},
			
			multiplicar: function(request, response) {
				response.render('multiplicar');
			},
			
			dividir: function(request, response) {
				response.render('dividir');
			},

			telhaFrancesa: function(request, response){
				response.render('telhaFrancesa');
			},

			telhaPaulista: function(request, response){
				response.render('telhaPaulista');
			},

			telhaPlan: function(request, response){
				response.render('telhaPlan');
			},

			tijolosComuns5cm: function(request, response){
				response.render('tijolosComuns5cm');
			},

			tijolosComuns10cm: function(request, response){
				response.render('tijolosComuns10cm');
			},

			tijolosComuns20cm: function(request, response){
				response.render('tijolosComuns20cm');
			},

			tijolosCeramicos10cm: function(request, response){
				response.render('tijolosCeramicos10cm');
			},

			tijolosCeramicos20cm: function(request, response){
				response.render('tijolosCeramicos20cm');
			},

			blocosDeConcreto10cm: function(request, response){
				response.render('tijolosCeramicos10cm');
			},

			blocosDeConcreto15cm: function(request, response){
				response.render('blocosDeConcreto15cm');
			},

			blocosDeConcreto20cm: function(request, response){
				response.render('tijolosCeramicos20cm');
			},

			acrilicaEconomica: function(request, response){
				response.render('acrilicaEconomica');
			},

			acrilicaPremiumAcetinado: function(request, response){
				response.render('acrilicaPremiumAcetinado');
			},

			acrilicaPremiumFosco: function(request, response){
				response.render('acrilicaPremiumFosco');
			},

			acrilicaStandard: function(request, response){
				response.render('acrilicaStandard');
			},

			esmaltePremium: function(request, response){
				response.render('esmaltePremium');
			},

			latexPremium: function(request, response){
				response.render('latexPremium');
			},

			latexStandard: function(request, response){
				response.render('latexStandard');
			},

			tintaParaGesso: function(request, response){
				response.render('tintaParaGesso');
			},

			tintaParaPiso: function(request, response){
				response.render('tintaParaPiso');
			},

			vernizAcrilico: function(request, response){
				response.render('vernizAcrilico');
			}
		},
		
		post: {
			calcular: function(request, response) {
				var parametros = Controller.utils.extrairParametros(request.body);
				var resultado  = Controller.utils.calculos.calcular(parametros);
				var resposta   = Controller.utils.formatarResposta(resultado);
				
				response.render(parametros.operacao, resposta);
			}
		}
	};
	
	return Controller;
};
