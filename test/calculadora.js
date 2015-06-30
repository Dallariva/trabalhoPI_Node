var controller = require('../controllers/calculadora.js')();

describe('Calculadora', function() {
	describe('Testa se as operações-núcleo funcionam corretamente.', function() {
		describe('Somar', function() {
			it('Deveria retornar 5 quando for passado 1 e 4.', function() {
				var numero1 = 1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.somar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(5);
			});
			
			it('Deveria retornar -3 quando for passado 1 e -4.', function() {
				var numero1 = 1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.somar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-3);
			});
			
			it('Deveria retornar 3 quando for passado -1 e 4.', function() {
				var numero1 = -1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.somar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(3);
			});
			
			it('Deveria retornar -5 quando for passado -1 e -4.', function() {
				var numero1 = -1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.somar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-5);
			});
		});
		
		describe('Subtrair', function() {
			it('Deveria retornar 2 quando for passado 2 e 0.', function() {
				var numero1 = 2;
				var numero2 = 0;
				
				var resultado = controller.utils.calculos.subtrair(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(2);
			});
			it('Deveria retornar 1 quando for passado 4 e 3.', function() {
				var numero1 = 4;
				var numero2 = 3;
				
				var resultado = controller.utils.calculos.subtrair(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(1);
			});
			
		});
		
		describe('Multiplicar', function() {
			it('Deveria retornar 4 quando for passado 1 e 4.', function() {
				var numero1 = 1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(4);
			});
			
			it('Deveria retornar -4 quando for passado -1 e 4.', function() {
				var numero1 = -1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-4);
			});
			
			it('Deveria retornar -4 quando for passado 1 e -4.', function() {
				var numero1 = 1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-4);
			});
			
			it('Deveria retornar 4 quando for passado -1 e -4.', function() {
				var numero1 = -1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(4);
			});
		});
		
		describe('Dividir', function() {
			it('Deveria retornar 0.25 quando for passado 1 e 4.', function() {
				var numero1 = 1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(0.25);
			});
			
			it('Deveria retornar -0.25 quando for passado -1 e 4.', function() {
				var numero1 = -1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-0.25);
			});
			
			it('Deveria retornar -0.25 quando for passado 1 e -4.', function() {
				var numero1 = 1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-0.25);
			});
			
			it('Deveria retornar 0.25 quando for passado -1 e -4.', function() {
				var numero1 = -1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(0.25);
			});
		});
	});
	
	describe('Testa se a função calcular funciona.', function() {
		describe('Somar', function() {
			it('Deveria retornar 5 quando somar 1 e 4.', function() {
				var parametros = {
					numero1: 1,
					numero2: 4,
					operacao: 'somar'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(5);
			});
		});
		
		describe('Subtrair', function() {
		
		});
		
		describe('Multiplicar', function() {
			it('Deveria retornar 4 quando multiplicar 1 por 4.', function() {
				var parametros = {
					numero1: 1,
					numero2: 4,
					operacao: 'multiplicar'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(4);
			});
		});
		
		describe('Dividir', function() {
			it('Deveria retornar 0.25 quando dividir 1 por 4.', function() {
				var parametros = {
					numero1: 1,
					numero2: 4,
					operacao: 'dividir'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(0.25);
			});
		});
	});
	
	describe('Testa se as funções utilitárias funcionam.', function() {
		describe('Controller.utils.formatarResposta()', function() {
			it('Deveria retornar 1,56 quando passado 1.55555558.', function() {
				var resultado = 1.55555558;
				var formatado = controller.utils.formatarResposta(resultado);
				
				formatado.should.be.an.Object;
				formatado.should.have.property('resultado');
				formatado.resultado.should.be.equal('1,56');
			});
			
			it('Deveria retornar 0,00 quando passado undefined.', function() {
				var resultado = undefined;
				var formatado = controller.utils.formatarResposta(resultado);
				
				formatado.should.be.an.Object;
				formatado.should.have.property('resultado');
				formatado.resultado.should.be.equal('0,00');
			});
		});
	});

	describe('telhaFrancesa', function() {
			it('Deveria retornar 12,8 quando inserir 2 e 4.', function() {
				var parametros = {
					numero1: 2,
					numero2: 4,
					operacao: 'telhaFrancesa'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(12.8);
			});
	});

	describe('telhaPaulista', function() {
			it('Deveria retornar 157,5 quando inserir 7 e 9.', function() {
				var parametros = {
					numero1: 7,
					numero2: 9,
					operacao: 'telhaPaulista'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(157.5);
			});
	});

	describe('telhaPlan', function() {
			it('Deveria retornar 39 quando inserir 5 e 3.', function() {
				var parametros = {
					numero1: 5,
					numero2: 3,
					operacao: 'telhaPlan'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(39);
			});
	});

	describe('tijolosComuns5cm', function() {
			it('Deveria retornar 3358 quando inserir  73.', function() {
				var parametros = {
					numero1: 73,
					operacao: 'tijolosComuns5cm'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(3358);
			});
	});

	describe('tijolosComuns10cm', function() {
			it('Deveria retornar 1596 quando inserir  19.', function() {
				var parametros = {
					numero1: 19,
					operacao: 'tijolosComuns10cm'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(1596);
			});
	});

	describe('tijolosComuns20cm', function() {
			it('Deveria retornar 1937 quando inserir  13.', function() {
				var parametros = {
					numero1: 13,
					operacao: 'tijolosComuns20cm'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(1937);
			});
	});

	describe('tijolosCeramicos10cm', function() {
			it('Deveria retornar 1825 quando inserir  73.', function() {
				var parametros = {
					numero1: 73,
					operacao: 'tijolosCeramicos10cm'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(1825);
			});
	});

	describe('tijolosCeramicos20cm', function() {
			it('Deveria retornar 1504 quando inserir  32.', function() {
				var parametros = {
					numero1: 32,
					operacao: 'tijolosCeramicos20cm'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(1504);
			});
	});

	describe('blocosDeConcreto10cm', function() {
			it('Deveria retornar 322 quando inserir  23.', function() {
				var parametros = {
					numero1: 23,
					operacao: 'blocosDeConcreto10cm'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(322);
			});
	});

	describe('blocosDeConcreto15cm', function() {
			it('Deveria retornar 765 quando inserir  45.', function() {
				var parametros = {
					numero1: 45,
					operacao: 'blocosDeConcreto15cm'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(765);
			});
	});

	describe('blocosDeConcreto20cm', function() {
			it('Deveria retornar 1113 quando inserir  53.', function() {
				var parametros = {
					numero1: 53,
					operacao: 'blocosDeConcreto20cm'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(1113);
			});
	});

	describe('acrilicaEconomica', function() {
			it('Deveria retornar 50 quando inserir 50 e 8.3.', function() {
				var parametros = {
					numero1: 50,
					numero2: 8.3,
					operacao: 'acrilicaEconomica'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(50);
			});
	});

	describe('acrilicaPremiumAcetinado', function() {
			it('Deveria retornar 1 quando inserir 5 e 2.', function() {
				var parametros = {
					numero1: 5,
					numero2: 2,
					operacao: 'acrilicaPremiumAcetinado'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(1);
			});
	});

	describe('acrilicaPremiumFosco', function() {
			it('Deveria retornar 90 quando inserir 90 e 21.', function() {
				var parametros = {
					numero1: 90,
					numero2: 21,
					operacao: 'acrilicaPremiumFosco'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(90);
			});
	});

	describe('acrilicaStandard', function() {
			it('Deveria retornar 57 quando inserir 57 e 13.8.', function() {
				var parametros = {
					numero1: 57,
					numero2: 13.8,
					operacao: 'acrilicaStandard'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(57);
			});
	});

	describe('esmaltePremium', function() {
			it('Deveria retornar 77 quando inserir 77 e 11.', function() {
				var parametros = {
					numero1: 77,
					numero2: 11,
					operacao: 'esmaltePremium'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(77);
			});
	});

	describe('latexPremium', function() {
			it('Deveria retornar 85 quando inserir 85 e 16.6.', function() {
				var parametros = {
					numero1: 85,
					numero2: 16.6,
					operacao: 'latexPremium'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(85);
			});
	});

	describe('latexStandard', function() {
			it('Deveria retornar 190 quando inserir 190 e 12.5.', function() {
				var parametros = {
					numero1: 190,
					numero2: 12.5,
					operacao: 'latexStandard'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(190);
			});
	});

	describe('tintaParaGesso', function() {
			it('Deveria retornar 156 quando inserir 78 e 13.', function() {
				var parametros = {
					numero1: 78,
					numero2: 13,
					operacao: 'tintaParaGesso'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(156);
			});
	});

	describe('tintaParaPiso', function() {
			it('Deveria retornar 126 quando inserir 63 e 11.', function() {
				var parametros = {
					numero1: 63,
					numero2: 11,
					operacao: 'tintaParaPiso'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(126);
			});
	});

	describe('vernizAcrilico', function() {
			it('Deveria retornar 86 quando inserir 43 e 25.', function() {
				var parametros = {
					numero1: 43,
					numero2: 25,
					operacao: 'vernizAcrilico'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(86);
			});
	});

	
	describe('\nTesta métodos restantes', function() {
		it('Deve retornar 10 quando for passado o numero 1', function() {
			var numero = 1;

			var resultado = controller.utils.calculos.somar10(numero);

			resultado.should.be.a.Number;
			resultado.should.be.equal(10);
		});

		it('Deve retornar 1 quando for passado o numero 10', function() {
			var numero = 10;

			var resultado = controller.utils.calculos.diminuir10(numero);

			resultado.should.be.a.Number;
			resultado.should.be.equal(1);
		});

		it('Deve retornar 15 quando for passado o numero 1', function() {
			var numero = 1;

			var resultado = controller.utils.calculos.somar15(numero);

			resultado.should.be.a.Number;
			resultado.should.be.equal(15);
		});

		it('Deve retornar 1 quando for passado o numero 15', function() {
			var numero = 15;

			var resultado = controller.utils.calculos.diminuir15(numero);

			resultado.should.be.a.Number;
			resultado.should.be.equal(1);
		});

		it('Deve retornar 20 quando for passado o numero 1', function() {
			var numero = 1;

			var resultado = controller.utils.calculos.somar20(numero);

			resultado.should.be.a.Number;
			resultado.should.be.equal(20);
		});

		it('Deve retornar 1 quando for passado o numero 20', function() {
			var numero = 20;

			var resultado = controller.utils.calculos.diminuir20(numero);

			resultado.should.be.a.Number;
			resultado.should.be.equal(1);
		});

		it('Deve retornar 25 quando for passado o numero 1', function() {
			var numero = 1;

			var resultado = controller.utils.calculos.somar25(numero);

			resultado.should.be.a.Number;
			resultado.should.be.equal(25);
		});

		it('Deve retornar 1 quando for passado o numero 25', function() {
			var numero = 25;

			var resultado = controller.utils.calculos.diminuir25(numero);

			resultado.should.be.a.Number;
			resultado.should.be.equal(1);
		});

	});
});
