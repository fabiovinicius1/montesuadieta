/*
  Warnings:

  - Added the required column `quantidade` to the `alimentosRefeicao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "alimentosRefeicao" ADD COLUMN     "quantidade" DOUBLE PRECISION NOT NULL;


INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Arroz, integral, cozido',123.5348925,2.58825,25.80975,0.3,0.4,0.3,1.0),
	 ('Arroz, integral, cru',359.678002032608,7.32328586956521,77.4507141304347,0.3,0.5,0.4,1.2),
	 ('Arroz, tipo 1, cozido',128.258485666666,2.52081666666666,28.0598499999999,0.2,0.0,0.0,0.2),
	 ('Arroz, tipo 1, cru',357.789273115942,7.15853985507246,78.7595434782608,0.1,0.1,0.1,0.3),
	 ('Arroz, tipo 2, cozido',130.119648333333,2.56841666666666,28.1925833333333,0.1,0.1,0.1,0.3),
	 ('Arroz, tipo 2, cru',358.116761456521,7.24188297101449,78.8814503623188,0.1,0.1,0.1,0.3),
	 ('Aveia, flocos, crua',393.822689449275,13.9210260869565,66.6356405797101,1.54,3.15566666666666,3.01633333333333,7.712),
	 ('Biscoito, doce, maisena',442.819390144927,8.07252173913043,75.2341449275362,3.9,3.7,2.2,9.8),
	 ('Biscoito, doce, recheado com chocolate',471.824779710145,6.39721739130434,70.5494492753623,6.2,6.6,1.7,14.5),
	 ('Biscoito, doce, recheado com morango',471.174736231884,5.71982608695652,71.0135072463768,6.1,6.5,1.7,14.3);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Biscoito, doce, wafer, recheado de chocolate',502.456857971014,5.56452173913043,67.5354782608695,6.5,8.1,1.9,16.5),
	 ('Biscoito, doce, wafer, recheado de morango',513.446182608695,4.51704347826087,67.3529565217391,6.7,8.9,1.8,17.4),
	 ('Biscoito, salgado, cream cracker',431.73228115942,10.0551304347826,68.731536231884,4.4,4.6,2.9,11.9),
	 ('Bolo, mistura para',418.633333333333,6.15942028985507,84.7139130434782,2.095,1.89016666666666,0.813,4.798166667),
	 ('Bolo, pronto, aipim',323.851666666666,4.41666666666666,47.864,5.0,3.9,1.1,10.0),
	 ('Bolo, pronto, chocolate',410.013666666666,6.22291666666666,54.71775,5.5,6.2,3.0,14.7),
	 ('Bolo, pronto, coco',333.437666666666,5.66666666666666,52.276,4.9,3.0,1.8,9.7),
	 ('Bolo, pronto, milho',311.387,4.80416666666666,45.1088333333333,4.5,3.9,1.5,9.9),
	 ('Canjica, branca, crua',357.602589999999,7.2,78.0609999999999,0.3,0.2,0.4,0.9),
	 ('Canjica, com leite integral',112.456777220465,2.36060004234313,23.6277332909901,0.603666666666666,0.365666666666666,0.149666666666666,1.119);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Cereais, milho, flocos, com sal',369.59975,7.29166666666666,80.835,0.5,0.6,0.9,2.0),
	 ('Cereais, milho, flocos, sem sal',363.338316666666,6.875,80.4483333333333,0.3,0.3,0.6,1.2),
	 ('Cereais, mingau, milho, infantil',394.42752173913,6.43115942028985,87.2655072463768,0.3,0.3,0.5,1.1),
	 ('Cereais, mistura para vitamina, trigo, cevada e aveia',381.133333333333,8.89583333333333,81.6175,0.5,0.4,1.0,1.9),
	 ('Cereal matinal, milho',365.354163768116,7.15579710144927,83.8242028985507,0.356666666666666,0.319666666666666,0.328666666666666,1.005),
	 ('Cereal matinal, milho, açúcar',376.555253623188,4.7427536231884,88.8405797101449,0.23,0.286333333333333,0.329,0.8453333333),
	 ('Creme de arroz, pó',386.001190336397,7.02694977474212,83.8693835585912,0.4,0.3,0.4,1.1),
	 ('Creme de milho, pó',333.034192670544,4.82083333333333,86.1485,0.3,0.5,0.8,1.6),
	 ('Curau, milho verde',78.4338183136558,2.36060004234313,13.9443999576568,0.817333333333333,0.467999999999999,0.174666666666666,1.46),
	 ('Curau, milho verde, mistura para',402.286577435314,2.22291666666666,79.8164166666666,3.0,4.9,1.4,9.3);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Farinha, de arroz, enriquecida',363.056480181223,1.26933329264322,85.5040000406901,0.2,0.1,0.2,0.5),
	 ('Farinha, de centeio, integral',335.777662799326,12.5150665028889,73.2982668304443,0.3,0.3,0.8,1.4),
	 ('Farinha, de milho, amarela',350.58693322738,7.1875,79.0791666666666,0.4,0.4,0.6,1.4),
	 ('Farinha, de rosca',370.578096666666,11.380999619166,75.7856666666666,0.6,0.4,0.8,1.8),
	 ('Farinha, de trigo',360.472978550724,9.79078260869565,75.0925507246376,0.31,0.155,0.445,0.91),
	 ('Farinha, láctea, de cereais',414.850517391304,11.8791304347826,77.7708695652173,3.3,1.4,0.6,5.3),
	 ('Lasanha, massa fresca, cozida',163.763666666666,5.8125,32.5221666666666,0.6,0.4,0.1,1.1),
	 ('Lasanha, massa fresca, crua',220.305666666666,7.00833333333333,45.0583333333333,0.5,0.4,0.4,1.3),
	 ('Macarrão, trigo, cru, com ovos',370.567113333333,10.3207999999999,76.6225333333333,0.535333333333333,0.377666666666666,0.756666666666666,1.669666667),
	 ('Milho, fubá, cru',353.482268115942,7.21376811594202,78.8728985507246,0.430333333333333,0.892,1.317,2.639333333);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Milho, verde, cru',138.166565,6.58958333333333,28.5557499999999,0.2,0.2,0.6,1.0),
	 ('Milho, verde, enlatado, drenado',97.5648942028985,3.22826086956521,17.1350724637681,0.6,0.8,0.9,2.3),
	 ('Mingau tradicional, pó',373.421466666666,0.583333333333333,89.3366666666666,0.1,0.0,0.1,0.2),
	 ('Pamonha, barra para cozimento, pré-cozida',171.219111666666,2.55208333333333,30.6849166666666,0.5,0.7,1.4,2.6),
	 ('Pão, aveia, forma',343.085366666666,12.35,59.5666666666666,1.1,1.0,1.6,3.7),
	 ('Pão, de soja',308.726323333333,11.343,56.5103333333333,0.7,0.6,1.6,2.9),
	 ('Pão, glúten, forma',252.994029999999,11.9509996000925,44.1189999999999,0.5,0.6,0.7,1.8),
	 ('Pão, milho, forma',292.01349,8.303,56.397,0.6,0.6,1.0,2.2),
	 ('Pão, trigo, forma, integral',253.193618333333,9.42516666666666,49.9415,0.7,0.8,1.1,2.6),
	 ('Pão, trigo, francês',299.810150434782,7.9535652173913,58.6464347826086,1.0,0.9,0.7,2.6);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Pão, trigo, sovado',310.96494,8.398,61.452,0.8,0.7,0.7,2.2),
	 ('Pastel, de carne, cru',288.702071515989,10.7406996405919,42.0166336927413,3.69266666666666,2.90933333333333,1.104,7.706),
	 ('Pastel, de carne, frito',388.374651624967,10.1041996618906,43.7678003381093,4.83166666666666,5.87766666666666,7.59666666666666,18.306),
	 ('Pastel, massa, crua',310.202514333333,6.9027,57.3796333333333,2.1,1.7,0.9,4.7),
	 ('Pastel, massa, frita',569.672459333333,6.0192,49.3431333333333,6.9,10.1,21.2,38.2),
	 ('Pipoca, com óleo de soja, sem sal',448.334261847198,9.92708333333333,70.3125833333333,2.35733333333333,3.69333333333333,9.189,15.23966667),
	 ('Torrada, pão francês',377.422283,10.5241,74.5559,0.9,0.8,1.0,2.7),
	 ('Abóbora, cabotian, cozida',48.0437425,1.44375,10.7609166666666,0.1,0.2,0.2,0.5),
	 ('Abóbora, cabotian, crua',38.5992942028985,1.7463768115942,8.36028985507246,0.120333333333333,0.082,0.0486666666666666,0.251),
	 ('Abóbora, moranga, refogada',29.0038220317562,0.39375,5.98191666666666,0.12,0.191333333333333,0.446999999999999,0.7583333333);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Abobrinha, italiana, cozida',15.03852,1.125,2.977,0.1,0.0,0.1,0.2),
	 ('Abobrinha, italiana, refogada',24.4296021876533,1.06875,4.18691666666666,0.133333333333333,0.180666666666666,0.460666666666666,0.7746666667),
	 ('Alfavaca, crua',29.1836130810578,2.65833333333333,5.24099999999999,0.1,0.0,0.2,0.3),
	 ('Almeirão, refogado',65.0819108288685,1.70416666666666,5.70149999999999,0.8,1.1,2.6,4.5),
	 ('Batata, frita, tipo chips, industrializada',542.734673384189,5.58333333333333,51.2223333333333,12.9,11.9,4.0,28.8),
	 ('Batata, inglesa, frita',267.15742250204,4.96666666666666,35.6403333333333,2.1,3.4,6.6,12.1),
	 ('Batata, inglesa, sauté',67.8879361506303,1.29166666666666,14.093,0.3,0.2,0.4,0.9),
	 ('Biscoito, polvilho doce',437.549,1.29166666666666,80.5353333333333,2.4,4.3,0.6,7.3),
	 ('Brócolis, cozido',24.6361631113687,2.13333333333333,4.36666666666666,0.1,0.0,0.2,0.3),
	 ('Brócolis, cru',25.4951318840579,3.64492753623188,4.02507246376811,0.136666666666666,0.0576666666666666,0.186,0.3803333333);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Caruru, cru',34.0316297173499,3.2,5.97399999999999,0.1,0.0,0.3,0.4),
	 ('Catalonha, crua',23.8884122573732,1.86875,4.75224999999999,0.1,0.0,0.1,0.2),
	 ('Catalonha, refogada',63.4492691488266,1.95,4.80933333333333,0.71,1.07,2.97666666666666,4.756666667),
	 ('Cenoura, cozida',29.8617777101595,0.847916666666666,6.68674999999998,0.0,0.0,0.1,0.1),
	 ('Couve, manteiga, crua',27.0566971014492,2.8731884057971,4.33347826086955,0.12,0.0,0.128666666666666,0.2486666667),
	 ('Couve, manteiga, refogada ',90.3448154261112,1.66666666666666,8.70766666666666,1.0,1.6,3.6,6.2),
	 ('Couve-flor, cozida',19.1141406147281,1.23958333333333,3.87541666666667,0.1,0.0,0.1,0.2),
	 ('Espinafre, Nova Zelândia, refogado',67.2536517506639,2.71875,4.23858333333333,0.9,1.3,2.9,5.1),
	 ('Farinha, de mandioca, crua',360.869698550724,1.55434782608695,87.8989855072463,0.1,0.1,0.0,0.2),
	 ('Farinha, de mandioca, torrada',365.268975,1.22916666666666,89.1941666666666,0.1,0.1,0.0,0.2);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Farinha, de puba',360.179774879932,1.61666666666666,87.2853333333333,0.227,0.185333333333333,0.0,0.4123333333),
	 ('Inhame, cru',96.6998318840579,2.05072463768115,23.2326086956521,0.077,0.0,0.078,0.155),
	 ('Jiló, cru',27.3651434782608,1.40217391304347,6.19115942028985,0.0746666666666666,0.0506666666666666,0.199333333333333,0.3246666667),
	 ('Jurubeba, crua',125.811634999999,4.4125,23.0591666666666,0.5,0.5,2.1,3.1),
	 ('Mandioca, cozida',125.35825,0.575,30.09,0.1,0.1,0.1,0.3),
	 ('Mandioca, crua',151.416956521739,1.13043478260869,36.1695652173913,0.062,0.122333333333333,0.0,0.1843333333),
	 ('Mandioca, farofa, temperada',405.693941666666,2.0625,80.3041666666666,1.9,2.4,2.5,6.8),
	 ('Mandioca, frita',300.055243389149,1.38125,50.2514166666666,1.6961,2.77166666666666,6.18233333333333,10.6501),
	 ('Manjericão, cru',21.1476768115942,1.98550724637681,3.64449275362319,0.129333333333333,0.0,0.265666666666666,0.395),
	 ('Nhoque, batata, cozido',180.775273993412,5.85833333333333,36.78,0.558666666666666,0.474666666666666,0.778,1.811333333);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Palmito, juçara, em conserva',23.1997164340813,1.79166666666666,4.32833333333332,0.1,0.0,0.1,0.2),
	 ('Pão, de queijo, cru',294.538,3.64799999999999,38.512,3.4,3.0,4.1,10.5),
	 ('Repolho, roxo, refogado',41.7735252897143,1.80208333333333,7.56158333333333,0.193333333333333,0.284,0.680666666666666,1.158),
	 ('Salsa, crua',33.4241115942028,3.25724637681159,5.70608695652173,0.0813333333333333,0.0,0.195666666666666,0.277),
	 ('Seleta de legumes, enlatada',56.5337724637681,3.42028985507246,12.6697101449275,0.124333333333333,0.222333333333333,0.211333333333333,0.558),
	 ('Serralha, crua',30.3979341666666,2.67291666666666,4.94674999999999,0.1,0.1,0.3,0.5),
	 ('Taioba, crua',34.2089183333333,2.89583333333333,5.43049999999999,0.2,0.1,0.4,0.7),
	 ('Tomate, molho industrializado',38.4465494604905,1.375,7.71166666666667,0.1,0.1,0.2,0.4),
	 ('Abacate, cru',96.1547086956522,1.2391304347826,6.03086956521739,2.3,4.3,1.4,8.0),
	 ('Abiu, cru',62.42409840854,0.833333333333333,14.9269999999999,0.3,0.1,0.1,0.5);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Açaí, polpa, com xarope de guaraná e glucose',110.29759,0.720833333333333,21.4551666666666,0.7,1.9,0.3,2.9),
	 ('Açaí, polpa, congelada',58.0453688728213,0.797916666666666,6.20841666666666,0.731333333333333,2.014,0.376999999999999,3.122333333),
	 ('Ameixa, em calda, enlatada, drenada ',177.35918531537,1.025,47.658,0.1,0.0,0.1,0.2),
	 ('Atemóia, crua',96.9715874479214,0.970833333333333,25.3321666666666,0.1,0.0,0.1,0.2),
	 ('Ciriguela, crua',75.59411,1.39791666666666,18.8574166666666,0.2,0.0,0.1,0.3),
	 ('Cupuaçu, cru',49.4225587743719,1.16041666666666,10.4335833333333,0.4,0.2,0.1,0.7),
	 ('Cupuaçu, polpa, congelada',48.7968899999999,0.84375,11.3869166666666,0.3,0.1,0.0,0.4),
	 ('Fruta-pão, crua',67.0456199999999,1.08125,17.1744166666666,0.1,0.0,0.0,0.1),
	 ('Goiaba, branca, com casca, crua',51.7377478260869,0.898550724637681,12.4014492753623,0.0566666666666666,0.0,0.231999999999999,0.2886666667),
	 ('Goiaba, vermelha, com casca, crua',54.1699304347826,1.08695652173913,13.0097101449275,0.0536666666666666,0.0,0.256666666666666,0.3103333333);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Graviola, crua',61.6218983766635,0.845833333333333,15.8395,0.0,0.1,0.0,0.1),
	 ('Jaca, crua',87.9203499999999,1.40208333333333,22.4975833333333,0.1,0.1,0.0,0.2),
	 ('Kiwi, cru',51.1363304347826,1.33695652173913,11.4997101449275,0.0583333333333333,0.099,0.348666666666666,0.506),
	 ('Maçã, Argentina, com casca, crua',62.5318183662891,0.225,16.5879999999999,0.1,0.0,0.0,0.1),
	 ('Macaúba, crua',404.281876666666,2.08289999999999,13.9454333333333,7.1,25.3,6.5,38.9),
	 ('Manga, Haden, crua',63.5003183387915,0.408333333333333,16.6626666666666,0.1,0.1,0.0,0.2),
	 ('Manga, polpa, congelada',48.30588,0.38125,12.5184166666666,0.1,0.1,0.0,0.2),
	 ('Manga, Tommy Atkins, crua',50.6921826086956,0.855072463768116,12.7715942028985,0.1,0.1,0.0,0.2),
	 ('Maracujá, cru',68.4395086956521,1.9891304347826,12.2642028985507,0.220333333333333,0.275666666666666,0.938,1.434),
	 ('Pêra, Park, crua',60.58859,0.235416666666666,16.0749166666666,0.1,0.0,0.1,0.2);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Pinha, crua',88.4735276668668,1.48541666666666,22.4479166666666,0.1,0.0,0.1,0.2),
	 ('Tamarindo, cru',275.695642694413,3.20625,72.53175,0.1,0.2,0.0,0.3),
	 ('Tucumã, cru',262.015195072392,2.09375,26.4745833333333,4.693,9.681000000000001,0.880333333333333,15.25433333),
	 ('Azeite, de dendê',884.0,0.0,0.0,43.1,40.1,16.6,99.8),
	 ('Azeite, de oliva, extra virgem',884.0,0.0,0.0,14.9,75.5,9.5,99.9),
	 ('Manteiga, com sal',725.968926845998,0.414700007438659,0.0632999925613329,49.2,20.4,1.2,70.8),
	 ('Manteiga, sem sal',757.540460725996,0.395560007095336,0.0,51.5,21.9,1.5,74.9),
	 ('Margarina, com óleo hidrogenado, com sal (65% de lipídeos)',596.119516956329,0.0,0.0,14.9,18.2,21.4,54.5),
	 ('Margarina, com óleo interesterificado, com sal (65%de lipídeos)',594.451693333333,0.0,0.0,21.9,15.0,27.6,64.5),
	 ('Margarina, com óleo interesterificado, sem sal (65% de lipídeos)',593.137490238189,0.0,0.0,20.9,14.4,26.5,61.8);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Óleo, de babaçu',884.0,0.0,0.0,50.9,18.6,30.2,99.7),
	 ('Óleo, de canola',884.0,0.0,0.0,7.9,62.6,28.4,98.9),
	 ('Óleo, de girassol',884.0,0.0,0.0,10.8,25.4,62.6,98.8),
	 ('Óleo, de milho',884.0,0.0,0.0,15.2,33.4,50.9,99.5),
	 ('Óleo, de pequi',884.0,0.0,0.0,39.9,55.8,4.2,99.9),
	 ('Óleo, de soja',884.0,0.0,0.0,15.2,23.3,60.0,98.5),
	 ('Abadejo, filé, congelado, assado',111.615503451188,23.525,0.0,0.574333333333333,0.345333333333333,0.145666666666666,1.065333333),
	 ('Abadejo, filé, congelado,cozido',91.1035483955542,19.3458333333333,0.0,0.380999999999999,0.259333333333333,0.174,0.8143333333),
	 ('Abadejo, filé, congelado, cru',59.1130332485834,13.0833333333333,0.0,0.1,0.0,0.1,0.2),
	 ('Abadejo, filé, congelado, grelhado',129.643525902867,27.6104166666666,0.0,0.554666666666666,0.322666666666666,0.562333333333333,1.439666667);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Atum, conserva em óleo',165.910560578902,26.1875,0.0,1.0,1.3,3.2,5.5),
	 ('Atum, fresco, cru',117.500999999999,25.68,0.0,0.5,0.2,0.0,0.7),
	 ('Bacalhau, salgado, cru',135.892966666666,29.0366666666666,0.0,0.6,0.3,0.2,1.1),
	 ('Bacalhau, salgado, refogado',139.660701053539,23.9791666666666,1.22416666666667,0.9,1.1,1.2,3.2),
	 ('Cação, posta, com farinha de trigo, frita',208.332743725975,24.9520833333333,3.10058333333333,1.496,2.21266666666666,5.21633333333333,8.925),
	 ('Cação, posta, cozida',116.014480687657,25.5895833333333,0.0,0.2,0.1,0.2,0.5),
	 ('Cação, posta, crua',83.3330250195662,17.8541666666666,0.0,0.1,0.1,0.2,0.4),
	 ('Camarão, Rio Grande, grande, cozido',90.0136800963083,18.9666666666666,0.0,0.4,0.2,0.2,0.8),
	 ('Camarão, Rio Grande, grande, cru',47.1834367054303,9.99166666666666,0.0,0.1,0.1,0.2,0.4),
	 ('Camarão, Sete Barbas, sem cabeça, com casca, frito',231.246153850873,18.3875,2.87983333333333,2.46833333333333,3.60866666666666,8.82633333333333,14.90333333);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Caranguejo, cozido',82.7215015078385,18.4791666666666,0.0,0.2,0.2,0.0,0.4),
	 ('Corimba, cru',128.1554,17.3666666666666,-0.0266666666666661,2.5,2.3,0.3,5.1),
	 ('Corimbatá, assado',261.452439410567,19.8979166666666,0.0,4.8,6.39333333333333,2.58333333333333,13.77666667),
	 ('Corimbatá, cozido',238.696104867339,20.13125,0.0,4.45,6.47333333333333,2.28333333333333,13.20666667),
	 ('Corvina de água doce, crua',101.009033333333,18.9166666666666,0.0,1.2,0.7,0.1,2.0),
	 ('Corvina do mar, crua',94.0,18.57,0.0,0.7,0.5,0.1,1.3),
	 ('Corvina grande, assada',146.528141125361,26.7666666666666,0.0,1.5,1.2,0.3,3.0),
	 ('Corvina grande, cozida',100.078124552965,23.4375,0.0,0.746666666666666,0.62,0.626666666666666,1.993333333),
	 ('Dourada de água doce, fresca',131.208314723769,18.8104166666666,0.0,2.97366666666666,1.41866666666666,0.357,4.749333333),
	 ('Lambari, congelado, cru',130.840311009486,16.8125,0.0,2.0,2.2,1.2,5.4);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Lambari, congelado, frito',326.868399886608,28.425,0.0,5.5,7.0,8.1,20.6),
	 ('Lambari, fresco, cru',151.598346503218,15.6520833333333,0.0,3.40333333333333,3.284,1.10233333333333,7.789666667),
	 ('Manjuba, com farinha de trigo, frita',343.550458723068,23.45,10.2403333333333,5.46333333333333,5.36366666666666,10.4253333333333,21.25233333),
	 ('Manjuba, frita',349.325231455365,30.1395833333333,0.0,5.3,6.0,11.7,23.0),
	 ('Merluza, filé, assado',121.910218333333,26.6041666666666,0.0,0.2,0.1,0.3,0.6),
	 ('Merluza, filé, cru',89.1308666666666,16.6066666666666,0.0,0.9,0.5,0.4,1.8),
	 ('Merluza, filé, frito',191.627478375832,26.9291666666666,0.0,1.4,2.08666666666666,4.27333333333333,7.76),
	 ('Pescada, branca, crua',110.876299999999,16.2633333333333,0.0,0.8,2.4,0.9,4.1),
	 ('Pescada, branca, frita',223.039732369303,27.35625,0.0,2.3,3.2,5.2,10.7),
	 ('Pescada, filé, com farinha de trigo, frito',283.425214431961,21.4354166666666,5.03325,2.17666666666666,4.43999999999999,9.05333333333333,15.67);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Pescada, filé, cru',107.205566666666,16.65,0.0,0.9,2.3,0.3,3.5),
	 ('Pescada, filé, frito',154.270025,28.5875,0.0,1.0,1.1,1.2,3.3),
	 ('Pescada, filé, molho escabeche',141.958322875022,11.75,5.01533333333334,1.30666666666666,2.94666666666666,4.3,8.553333333),
	 ('Pescadinha, crua',76.4089083333333,15.4791666666666,0.0,0.3,0.2,0.4,0.9),
	 ('Pintado, assado',191.559141127586,36.45,0.0,1.8,1.3,0.3,3.4),
	 ('Pintado, cru',91.0832333333333,18.5566666666666,0.0,0.6,0.4,0.1,1.1),
	 ('Pintado, grelhado',152.190088333333,30.7958333333333,0.0,1.1,0.7,0.2,2.0),
	 ('Porquinho, cru',93.0245666666666,20.49,0.0,0.4,0.1,0.0,0.5),
	 ('Salmão, filé, com pele, fresco,  grelhado',228.731775135318,23.91875,0.0,3.14,4.36,6.97,14.47),
	 ('Salmão, sem pele, fresco, cru',169.781579910556,19.2520833333333,0.0,2.47233333333333,2.9,3.13266666666666,8.505);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Salmão, sem pele, fresco, grelhado',242.706569487094,26.1416666666666,0.0,3.57866666666666,4.14566666666666,4.97933333333333,12.70366667),
	 ('Sardinha, assada',164.350788333333,32.1791666666666,0.0,1.7,0.5,0.3,2.5),
	 ('Sardinha, conserva em óleo',284.981004871249,15.9395833333333,0.0,4.1,5.5,11.9,21.5),
	 ('Sardinha, frita',257.0407,33.3833333333333,0.0,2.6,3.1,6.1,11.8),
	 ('Sardinha, inteira, crua',113.900366666666,21.0766666666666,0.0,1.7,0.5,0.2,2.4),
	 ('Tucunaré, filé, congelado, cru',87.686483549277,17.9583333333333,-0.0450000000000079,0.6,0.4,0.4,1.4),
	 ('Apresuntado',128.857255812009,13.45,2.862,1.93333333333333,2.58666666666666,1.13333333333333,5.653333333),
	 ('Caldo de carne, tablete',240.623333333333,7.82,15.0533333333333,7.8,2.5,0.1,10.4),
	 ('Caldo de galinha, tablete',251.445666666666,6.27916666666666,10.6454999999999,9.4,3.2,0.2,12.8),
	 ('Carne, bovina, acém, moído, cozido',212.420399999999,26.6866666666666,0.0,4.8,4.6,0.3,9.7);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Carne, bovina, acém, moído, cru',136.562333333333,19.42,0.0,2.7,2.4,0.1,5.2),
	 ('Carne, bovina, acém, sem gordura, cozido',214.610566666666,27.27,0.0,5.5,3.7,0.3,9.5),
	 ('Carne, bovina, acém, sem gordura, cru',144.029433333333,20.8166666666666,0.0,2.8,2.3,0.2,5.3),
	 ('Carne, bovina, almôndegas, cruas',189.256666666666,12.3125,9.79416666666665,3.9,3.5,0.9,8.3),
	 ('Carne, bovina, almôndegas, fritas',271.813,18.15625,14.2867499999999,4.2,5.0,5.5,14.7),
	 ('Carne, bovina, bucho, cozido',133.022866666666,21.64,0.0,2.4,1.4,0.1,3.9),
	 ('Carne, bovina, bucho, cru',137.303166666666,20.53,0.0,3.3,1.4,0.1,4.8),
	 ('Carne, bovina, capa de contra-filé, com gordura, crua',216.908966666666,19.1966666666666,0.0,6.9,6.2,0.1,13.2),
	 ('Carne, bovina, capa de contra-filé, com gordura, grelhada',311.702666666666,30.6866666666666,0.0,8.8,8.7,0.3,17.8),
	 ('Carne, bovina, capa de contra-filé, sem gordura, crua',131.062466666666,21.54,0.0,1.9,1.9,0.1,3.9);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Carne, bovina, capa de contra-filé, sem gordura, grelhada',239.443633333333,35.0633333333333,-0.00666666666667481,4.3,4.3,0.2,8.8),
	 ('Carne, bovina, charque, cozido',262.78014226218,36.3645833333333,0.0,4.8,5.4,0.4,10.6),
	 ('Carne, bovina, charque, cru',248.861018107453,22.7145833333333,0.0,8.7,6.6,0.2,15.5),
	 ('Carne, bovina, contra-filé, à milanesa',351.592659198999,20.6125,12.1744999999999,7.24266666666666,8.07633333333333,6.90399999999999,22.223),
	 ('Carne, bovina, contra-filé de costela, cru',202.437399999999,19.8,0.0,6.7,4.6,0.1,11.4),
	 ('Carne, bovina, contra-filé de costela, grelhado',274.914266666666,29.88,0.0,8.8,5.6,0.2,14.6),
	 ('Carne, bovina, contra-filé, com gordura, cru',205.8567,21.15,0.0,5.6,5.5,0.2,11.3),
	 ('Carne, bovina, contra-filé, com gordura, grelhado',278.053566666666,32.3966666666666,0.0,7.4,6.3,0.2,13.9),
	 ('Carne, bovina, contra-filé, sem gordura, cru',156.615833333333,23.9966666666666,0.0,2.7,2.6,0.1,5.4),
	 ('Carne, bovina, contra-filé, sem gordura, grelhado',193.691566666666,35.8833333333333,0.0,2.03333333333333,1.9,0.1,4.033333333);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Carne, bovina, costela, assada',373.038866666666,28.8066666666666,0.0,11.8,12.1,0.3,24.2),
	 ('Carne, bovina, costela, crua',357.722466666666,16.7066666666666,0.0,14.9,12.7,0.3,27.9),
	 ('Carne, bovina, coxão duro, sem gordura, cozido',216.616066666667,31.88,0.0,3.5,4.1,0.2,7.8),
	 ('Carne, bovina, coxão duro, sem gordura, cru',147.966333333333,21.5133333333333,0.0,2.86,2.4,0.1,5.36),
	 ('Carne, bovina, coxão mole, sem gordura, cozido',218.6751,32.3833333333333,0.0,4.3,3.4,0.2,7.9),
	 ('Carne, bovina, coxão mole, sem gordura, cru',169.065966666666,21.23,0.0,3.9,3.7,0.1,7.7),
	 ('Carne, bovina, cupim, assado',330.100290833333,28.63125,0.0,5.5,5.4,0.2,11.1),
	 ('Carne, bovina, cupim, cru',221.3975,19.5366666666666,0.0,6.8,6.4,0.2,13.4),
	 ('Carne, bovina, fígado, cru',141.045866666666,20.7133333333333,1.10666666666666,2.79,1.5,0.1,4.39),
	 ('Carne, bovina, fígado, grelhado',225.0264,29.86,4.2,4.7,2.2,1.1,8.0);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Carne, bovina, filé mingnon, sem gordura, cru',142.864266666666,21.6,0.0,2.9,1.9,0.2,5.0),
	 ('Carne, bovina, filé mingnon, sem gordura, grelhado',219.702599999999,32.8,0.0,4.5,3.1,0.2,7.8),
	 ('Carne, bovina, flanco, sem gordura, cozido',195.575366666666,29.3766666666666,0.0,3.9,2.8,0.1,6.8),
	 ('Carne, bovina, flanco, sem gordura, cru',141.460099999999,19.9966666666666,0.0,3.1,2.3,0.1,5.5),
	 ('Carne, bovina, fraldinha, com gordura, cozida',338.445733333333,24.24,0.0,12.1,10.4,0.5,23.0),
	 ('Carne, bovina, fraldinha, com gordura, crua',220.723766666666,17.5833333333333,0.0,7.3,6.5,0.3,14.1),
	 ('Carne, bovina, lagarto, cozido',222.468566666666,32.8633333333333,0.0,3.9,4.0,0.2,8.1),
	 ('Carne, bovina, lagarto, cru',134.864566666666,20.5433333333333,0.0,2.3,2.3,0.1,4.7),
	 ('Carne, bovina, língua, cozida',314.9016,21.3666666666666,0.0,11.2,10.3,0.5,22.0),
	 ('Carne, bovina, língua, crua',215.249766666666,17.09,0.0,6.8,6.8,0.3,13.9);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Carne, bovina, maminha, crua',152.765866666666,20.9333333333333,0.0,3.1,3.1,0.1,6.3),
	 ('Carne, bovina, maminha, grelhada',153.089675833333,30.7354166666666,0.0,9.7,7.7,0.2,17.6),
	 ('Carne, bovina, miolo de alcatra, sem gordura, cru',162.871233333333,21.61,0.0,3.4,3.3,0.1,6.8),
	 ('Carne, bovina, miolo de alcatra, sem gordura, grelhado',241.363966666666,31.93,0.0,5.1,4.9,0.3,10.3),
	 ('Carne, bovina, músculo, sem gordura, cozido',193.800333333333,31.2333333333333,0.0,2.9,2.8,0.1,5.8),
	 ('Carne, bovina, músculo, sem gordura, cru',141.581,21.56,0.0,2.2,2.6,0.1,4.9),
	 ('Carne, bovina, paleta, com gordura, crua',158.7099,21.41,0.0,3.5,2.9,0.2,6.6),
	 ('Carne, bovina, paleta, sem gordura, cozida',193.652399999999,29.72,0.0,3.4,3.0,0.2,6.6),
	 ('Carne, bovina, paleta, sem gordura, crua',140.9415,21.03,0.0,2.7,2.1,0.1,4.9),
	 ('Carne, bovina, patinho, sem gordura, cru',133.468899999999,21.7233333333333,0.0,2.0,1.9,0.2,4.1);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Carne, bovina, patinho, sem gordura, grelhado',219.259266666666,35.9,0.0,3.1,3.1,0.3,6.5),
	 ('Carne, bovina, peito, sem gordura, cozido',338.473133333333,22.2466666666666,0.0,11.7,11.5,0.4,23.6),
	 ('Carne, bovina, peito, sem gordura, cru',259.275633333333,17.5566666666666,0.0,8.2,9.2,0.5,17.9),
	 ('Carne, bovina, picanha, com gordura, crua',212.879433333333,18.8233333333333,0.0,6.1,6.7,0.3,13.1),
	 ('Carne, bovina, picanha, com gordura, grelhada',288.767091666666,26.4208333333333,0.0,7.9,9.2,0.4,17.5),
	 ('Carne, bovina, picanha, sem gordura, crua',133.522366666666,21.25,0.0,2.0,2.1,0.1,4.2),
	 ('Carne, bovina, picanha, sem gordura, grelhada',238.468133333333,31.9066666666666,0.0,4.5,5.2,0.3,10.0),
	 ('Carne, bovina, seca, cozida',312.799033691445,26.93125,0.0,10.5,8.3,0.4,19.2),
	 ('Carne, bovina, seca, crua',312.748427903652,19.6583333333333,0.0,8.7,7.5,0.3,16.5),
	 ('Coxinha de frango, frita',283.048,9.61041666666666,34.5205833333333,2.6,3.4,4.7,10.7);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Croquete, de carne, frito',346.742014647404,16.8625,18.1461666666666,5.08333333333333,7.35333333333333,11.54,23.97666667),
	 ('Empada, de frango, pré-cozida',377.479666666666,7.34375,35.5289166666666,5.4,5.2,1.4,12.0),
	 ('Frango, asa, com pele, crua',213.188333333333,18.1,0.0,4.4,6.6,3.0,14.0),
	 ('Frango, caipira, inteiro, com pele, cozido',242.889326666666,23.8833333333333,0.0,4.4,7.5,2.3,14.2),
	 ('Frango, caipira, inteiro, sem pele, cozido',195.760296666666,29.575,0.0,2.2,3.4,1.2,6.8),
	 ('Frango, coração, cru',221.502833333333,12.5833333333333,0.0,4.9,6.3,3.4,14.6),
	 ('Frango, coração, grelhado',207.273643333333,22.4395833333333,0.607416666666657,3.49966666666666,4.25966666666666,1.58766666666666,9.347),
	 ('Frango, coxa, com pele, assada',215.118647532939,28.4916666666666,0.05833333333334,3.1,3.8,2.2,9.1),
	 ('Frango, coxa, com pele, crua',161.474733333333,17.0933333333333,0.0,3.0,4.1,2.2,9.3),
	 ('Frango, coxa, sem pele, cozida',167.428032164414,26.8583333333333,0.0,2.0,2.1,1.1,5.2);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Frango, coxa, sem pele, crua',119.947466666666,17.8133333333333,0.019999999999997,1.6,2.1,0.8,4.5),
	 ('Frango, fígado, cru',106.484566666666,17.5866666666666,-0.023333333333338,1.3,0.7,0.6,2.6),
	 ('Frango, filé, à milanesa',220.872779999999,28.4604166666666,7.51291666666666,1.6,2.4,3.3,7.3),
	 ('Frango, inteiro, com pele, cru',226.319166666666,16.4433333333333,0.0,5.2,7.2,3.9,16.3),
	 ('Frango, inteiro, sem pele, assado',187.337796666666,28.025,0.0,2.1,2.6,1.8,6.5),
	 ('Frango, inteiro, sem pele, cozido',170.389975833333,24.9854166666666,0.0,2.2,2.5,1.5,6.2),
	 ('Frango, inteiro, sem pele, cru',129.0964,20.5866666666666,0.0,1.4,1.9,1.0,4.3),
	 ('Frango, peito, com pele, assado',211.683149530728,33.4166666666666,0.0,2.2,2.7,1.8,6.7),
	 ('Frango, peito, com pele, cru',149.465266666666,20.78,0.0,2.2,3.2,0.9,6.3),
	 ('Frango, peito, sem pele, cozido',162.874763346314,31.46875,0.0,1.1,1.1,0.6,2.8);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Frango, peito, sem pele, cru',119.159266666666,21.5266666666666,0.0,1.1,1.3,0.0,2.4),
	 ('Frango, peito, sem pele, grelhado',159.185007192611,32.0333333333333,0.0,0.9,0.9,0.3,2.1),
	 ('Frango, sobrecoxa, com pele, assada',259.604769166666,28.7020833333333,0.0,4.2,5.4,3.9,13.5),
	 ('Frango, sobrecoxa, com pele, crua',254.5322,15.46,0.0,6.5,9.6,3.6,19.7),
	 ('Frango, sobrecoxa, sem pele, assada',232.883396666666,29.175,0.0,3.3,4.2,3.1,10.6),
	 ('Frango, sobrecoxa, sem pele, crua',161.796299999999,17.57,0.0,3.0,4.5,1.6,9.1),
	 ('Hambúrguer, bovino, cru',214.836,13.15625,4.15375,5.7,5.8,0.8,12.3),
	 ('Hambúrguer, bovino, frito',258.283,19.9729166666666,6.32008333333332,5.9,6.0,3.7,15.6),
	 ('Hambúrguer, bovino, grelhado',209.831666666666,13.15625,11.3334166666666,5.1,4.8,1.2,11.1),
	 ('Lingüiça, frango, crua',218.108814166666,14.2395833333333,0.0,5.2,7.3,3.5,16.0);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Lingüiça, frango, frita',245.461006666666,18.3166666666666,0.0,5.0,7.2,4.3,16.5),
	 ('Lingüiça, frango, grelhada',243.6585675,18.1895833333333,0.0,4.7,6.8,3.4,14.9),
	 ('Lingüiça, porco, crua',227.203450833333,16.0645833333333,0.0,4.0,5.0,1.7,10.7),
	 ('Lingüiça, porco, frita',279.543589166666,20.4520833333333,0.0,6.5,8.2,2.7,17.4),
	 ('Lingüiça, porco, grelhada',296.489609166666,23.16875,0.0,7.0,8.7,2.6,18.3),
	 ('Mortadela',268.819989016731,11.9520833333333,5.81591666666666,6.12,8.12,4.68333333333333,18.92333333),
	 ('Peru, congelado, assado',163.071397931377,26.2020833333333,0.0,1.6,1.2,1.4,4.2),
	 ('Peru, congelado, cru',93.7224338261286,18.0833333333333,0.0,0.4,0.4,0.7,1.5),
	 ('Porco, bisteca, crua',164.115336592992,21.5,0.0,3.5,3.9,1.2,8.6),
	 ('Porco, bisteca, frita',311.169045334855,33.7479166666666,0.0,5.97466666666666,6.58133333333333,4.56333333333333,17.11933333);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Porco, bisteca, grelhada',280.084034902771,28.8895833333333,0.0,7.5,7.7,1.2,16.4),
	 ('Porco, costela, assada',402.168447450836,30.2229166666666,0.0,11.8,13.9,3.1,28.8),
	 ('Porco, costela, crua',255.60634206136,18.0,0.0,7.4,8.3,2.3,18.0),
	 ('Porco, lombo, assado',210.234665579636,35.725,0.0,2.6,2.9,0.7,6.2),
	 ('Porco, lombo, cru',175.625195250113,22.6041666666666,0.0,3.3,3.7,1.0,8.0),
	 ('Porco, orelha, salgada, crua',258.491758333333,18.5208333333333,0.0,7.3,11.2,2.8,21.3),
	 ('Porco, pernil, assado',262.259606666666,32.1333333333333,0.0,4.8,6.4,1.9,13.1),
	 ('Porco, pernil, cru',186.05575,20.125,0.0,4.2,5.0,1.7,10.9),
	 ('Porco, rabo, salgado, cru',377.415257499999,15.58125,0.0,11.6,16.7,4.3,32.6),
	 ('Presunto, com capa de gordura',127.849212665637,14.3708333333333,1.3975,1.94666666666666,2.58333333333333,0.996666666666666,5.526666667);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Presunto, sem capa de gordura',93.7432807208697,14.2916666666666,2.14566666666666,0.856666666666666,1.13,0.46,2.446666667),
	 ('Quibe, assado',136.228876141587,14.59375,12.86125,1.232,0.947,0.273999999999999,2.453),
	 ('Quibe, cru',109.490669294754,12.3541666666666,10.7741666666666,0.649999999999999,0.696666666666666,0.28,1.626666667),
	 ('Quibe, frito',253.83130886964,14.8895833333333,12.3374166666666,4.57733333333333,5.025,4.99866666666666,14.601),
	 ('Salame',397.842506534934,25.8104166666666,2.90625,9.57333333333333,12.0766666666666,4.66666666666666,26.31666667),
	 ('Toucinho, cru',592.531174999999,11.4791666666666,0.0,17.7,20.1,10.1,47.9),
	 ('Toucinho, frito',696.564006666666,27.2833333333333,0.0,20.0,26.2,14.6,60.8),
	 ('Bebida láctea, pêssego',55.1648333333333,2.13333333333333,7.57,1.1,0.6,0.0,1.7),
	 ('Creme de Leite',221.483541275133,1.50780669371287,4.50952663962046,11.82,5.1,0.45,17.37),
	 ('Iogurte, natural',51.4895333333332,4.06333333333333,1.91666666666666,1.8,0.9,0.1,2.8);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Iogurte, natural, desnatado',41.4927112815583,3.83438006877899,5.77395333333332,0.2,0.1,0.0,0.3),
	 ('Iogurte, sabor morango',69.5656,2.71,9.69333333333334,1.4,0.7,0.1,2.2),
	 ('Iogurte, sabor pêssego',67.8494,2.53,9.43333333333334,1.4,0.6,0.1,2.1),
	 ('Leite, condensado',312.572599999999,7.67,56.9966666666666,4.2,1.7,0.2,6.1),
	 ('Leite, de cabra',66.4157418865432,3.07090672175089,5.24609333333333,2.4,0.8,0.1,3.3),
	 ('Leite, de vaca, achocolatado',82.8209962719936,2.09902003765106,14.1583133333333,1.1,0.6,0.1,1.8),
	 ('Leite, de vaca, desnatado, pó',361.607999999999,34.69,53.0433333333333,0.6,0.2,0.0,0.8),
	 ('Leite, de vaca, integral',0.0,0.0,0.0,1.4,0.7,0.1,2.2),
	 ('Leite, de vaca, integral, pó',496.650299999999,25.42,39.18,16.3,7.1,0.5,23.9),
	 ('Queijo, minas, frescal',264.273127999999,17.41102,3.24031333333333,11.4,5.8,0.4,17.6);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Queijo, minas, meia cura',320.721817733259,21.2113737138112,3.57295961952208,13.2266666666666,5.58666666666666,0.336666666666666,19.15),
	 ('Queijo, mozarela',329.870718420887,22.6490004062652,3.04933292706807,14.2333333333333,5.95,0.496666666666666,20.68),
	 ('Queijo, parmesão',452.963755333333,35.5536133333333,1.66071999999999,19.7,8.7,0.4,28.8),
	 ('Queijo, pasteurizado',303.079803333333,9.35733333333333,5.67633333333333,15.9,7.3,0.4,23.6),
	 ('Queijo, petit suisse, morango',121.105954,5.78666,18.4620066666666,1.6,0.8,0.0,2.4),
	 ('Queijo, prato',359.880462405054,22.6617604064941,1.87857292683919,16.2866666666666,6.77666666666666,0.53,23.59333333),
	 ('Queijo, requeijão, cremoso',256.578148666666,9.62954666666666,2.43245333333333,13.7,6.4,0.3,20.4),
	 ('Queijo, ricota',139.731779999999,12.6005,3.78616666666666,4.5,2.4,0.2,7.1),
	 ('Omelete, de queijo',268.006772182424,15.5708333333333,0.437166666666668,6.39799999999999,6.98766666666666,6.198,19.58366667),
	 ('Ovo, de codorna, inteiro, cru',176.893899999999,13.6875,0.772499999999998,8.9,12.1,2.7,23.7);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Ovo, de galinha, gema, cozida/10minutos',352.67334,15.9,1.56,9.2,12.1,4.0,25.3),
	 ('Ovo, de galinha, inteiro, cozido/10minutos',145.70017,13.29375,0.614916666666673,2.9,3.8,1.1,7.8),
	 ('Ovo, de galinha, inteiro, cru',143.111733333333,13.03,1.63666666666667,2.6,3.6,1.2,7.4),
	 ('Ovo, de galinha, inteiro, frito',240.187224009116,15.6166666666666,1.19366666666666,4.11633333333333,5.727,4.91333333333333,14.75666667),
	 ('Achocolatado, pó',401.02,4.20333333333333,91.1766666666666,1.1,0.6,0.3,2.0),
	 ('Chocolate, ao leite',539.586666666666,7.22,59.5766666666666,17.5,10.0,0.9,28.4),
	 ('Chocolate, ao leite, com castanha do Pará',558.876333333333,7.4125,55.3768333333333,14.1,9.3,3.2,26.6),
	 ('Chocolate, ao leite, dietético',556.824333333333,6.89791666666666,56.3234166666666,19.2,11.4,1.5,32.1),
	 ('Chocolate, meio amargo',474.917769973273,4.86244343217213,62.4228899011611,13.1,8.1,1.0,22.2),
	 ('Cocada branca',448.84545242331,1.12183337370554,81.3831666262944,8.4,0.4,0.1,8.9);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Doce, de abóbora, cremoso',198.936063049634,0.916666666666666,54.6133333333333,0.0,0.0,0.0,0.0),
	 ('Doce, de leite, cremoso',306.310130231058,5.47829343159993,59.4933732350667,1.31666666666666,3.86,1.95,7.126666667),
	 ('Geléia, mocotó, natural',106.086666666666,2.125,24.2316666666666,0.0,0.0,0.0,0.0),
	 ('Quindim',411.348721570849,4.7375,46.2988333333333,11.3266666666666,4.75333333333333,4.69666666666666,20.77666667),
	 ('Café, pó, torrado',418.618666666666,14.7,65.7533333333333,5.3,1.1,4.9,11.3),
	 ('Capuccino, pó',417.406666666666,11.3125,73.6141666666666,4.0,1.6,0.1,5.7),
	 ('Shoyu',60.9277498753865,3.3125,11.6475,0.0,0.0,0.0,0.0),
	 ('Azeitona, preta, conserva',194.153847020983,1.1625,5.5445,3.5,11.0,3.0,17.5),
	 ('Azeitona, verde, conserva',136.93643,0.947916666666666,4.10175,2.3,8.3,1.0,11.6),
	 ('Chantilly, spray, com gordura vegetal',314.956000266666,0.525,16.8550000666666,25.9,0.1,0.1,26.1);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Leite, de coco',166.160301615546,1.0140667031606,2.19459996350604,15.6,0.9,0.2,16.7),
	 ('Maionese, tradicional com ovos',302.152677687823,0.58125,7.89974999999999,4.1,6.4,15.4,25.9),
	 ('Acarajé',289.211666666666,8.34583333333333,19.1138333333333,9.1,7.8,2.1,19.0),
	 ('Arroz carreteiro',153.772,10.8291666666666,11.5848333333333,3.2,3.0,0.2,6.4),
	 ('Baião de dois, arroz e feijão-de-corda',135.681333333333,6.23958333333333,20.41775,0.6,1.0,1.5,3.1),
	 ('Barreado',164.975234047412,18.26875,0.23625,3.327,4.26466666666666,1.40933333333333,9.001),
	 ('Bife à cavalo, com contra filé',291.229509244958,23.6604166666666,0.0,7.938,8.19526666666666,3.26166666666666,19.39493333),
	 ('Bolinho de arroz',273.514333333333,8.03958333333333,41.68275,1.8,2.5,3.5,7.8),
	 ('Camarão à baiana',100.783043004035,7.94166666666666,3.17366666666666,1.64233333333333,0.903,1.52466666666666,4.07),
	 ('Charuto, de repolho',78.2347292222182,6.77916666666666,10.1331666666666,0.462999999999999,0.471666666666666,0.0973333333333333,1.032);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Cuscuz, de milho, cozido com sal',113.459481666666,2.15625,25.2814166666666,0.2,0.2,0.3,0.7),
	 ('Cuscuz, paulista',142.123,2.55833333333333,22.5136666666666,1.8,1.8,0.8,4.4),
	 ('Cuxá, molho',80.0916156365076,5.64375,5.73891666666666,0.588333333333333,1.26633333333333,1.548,3.402666667),
	 ('Dobradinha',124.500200833333,19.7729166666666,0.0,2.5,1.2,0.1,3.8),
	 ('Estrogonofe de carne',173.141364318013,15.03125,2.97541666666667,5.25566666666666,3.322,0.856333333333333,9.434),
	 ('Estrogonofe de frango',156.806103013237,17.5520833333333,2.59391666666665,3.692,2.23966666666666,1.01466666666666,6.946333333),
	 ('Feijão tropeiro mineiro',151.561856830954,10.1708333333333,19.5818333333333,2.16,2.86666666666666,1.52666666666666,6.553333333),
	 ('L',116.933457311034,8.67083333333333,11.6418333333333,1.92333333333333,2.58666666666666,1.58333333333333,6.093333333),
	 ('Frango, com açafrão',112.783768841226,9.69791666666666,4.06208333333332,1.61,2.50833333333333,1.793,5.911333333),
	 ('Macarrão, molho bolognesa',119.53177144556,4.93429983488718,22.5223668317794,0.271,0.264666666666666,0.288333333333333,0.824);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Maniçoba',134.222893400986,9.95833333333333,3.41933333333332,2.89333333333333,3.676,1.67366666666666,8.243),
	 ('Quibebe',86.349230299592,8.55625,6.64408333333332,1.04233333333333,1.10533333333333,0.239999999999999,2.387666667),
	 ('Salada, de legumes, com maionese',96.1035883984565,1.05,8.92399999999999,1.09433333333333,1.76733333333333,3.81533333333333,6.677),
	 ('Salada, de legumes, cozida no vapor',35.4081042984724,2.00625,7.08908333333333,0.0623333333333333,0.0,0.162333333333333,0.2246666667),
	 ('Salpicão, de frango',147.864596134026,13.925,4.56899999999999,1.33899999999999,2.08066666666666,3.99766666666666,7.417333333),
	 ('Sarapatel',122.981858212431,18.4729166666666,1.09408333333334,1.39299999999999,1.106,0.718,3.217),
	 ('Tabule',57.4534766884805,2.04632997322082,10.5810033601125,0.21,0.83,0.233333333333333,1.273333333),
	 ('Tacacá',46.8891771512031,6.95833333333333,3.39,0.175666666666666,0.128333333333333,0.0,0.304),
	 ('Tapioca, com manteiga',347.826556257824,0.0895833333333333,63.59175,6.04533333333333,2.963,0.187666666666666,9.196),
	 ('Tucupi, com pimenta-de-cheiro',27.1837984027266,2.05625,4.73774999999998,0.0613333333333333,0.145333333333333,0.0,0.2066666667);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Vaca atolada',144.89697968479,5.12291666666666,10.0614166666666,4.138,3.15833333333333,1.22966666666666,8.526),
	 ('Vatapá',254.893285724155,5.99783354918162,9.74849978415171,7.49733333333333,9.673,4.73,21.90033333),
	 ('Virado à paulista',306.946786451319,10.18125,14.1090833333333,8.27699999999999,10.5846666666666,5.12133333333333,23.983),
	 ('Yakisoba',112.802041253407,7.51666666666666,18.2513333333333,0.583,0.868,0.988666666666666,2.439666667),
	 ('Amendoim, grão, cru',544.052655799433,27.1908001899719,20.3135333333333,8.7,17.2,16.2,42.1),
	 ('Amendoim, torrado, salgado',605.781092917019,22.4751801570256,18.702486509641,9.74,29.06,14.2333333333333,53.03333333),
	 ('Ervilha, em vagem',88.0935819997785,7.45208333333333,14.2275833333333,0.0,0.1,0.3,0.4),
	 ('Ervilha, enlatada, drenada',73.8447043478261,4.59782608695652,13.4421739130434,0.1,0.1,0.2,0.4),
	 ('Feijão, carioca, cozido',76.4240856666666,4.775,13.5910333333333,0.1,0.1,0.3,0.5),
	 ('Feijão, carioca, cru',329.026736231884,19.981884057971,61.2214492753623,0.2,0.1,0.9,1.2);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Feijão, fradinho, cozido',78.0088966666666,5.09375,13.4995833333333,0.2,0.1,0.3,0.6),
	 ('Feijão, fradinho, cru',339.164766666666,20.2083333333333,61.24,0.7,0.2,0.9,1.8),
	 ('Feijão, jalo, cozido',92.73992,6.14375,16.49525,0.1,0.1,0.3,0.5),
	 ('Feijão, jalo, cru',327.905266666666,20.1041666666666,61.4791666666666,0.3,0.2,0.6,1.1),
	 ('Feijão, preto, cozido',77.0272666666666,4.47916666666666,14.0051666666666,0.1,0.1,0.3,0.5),
	 ('Feijão, preto, cru',323.565711594202,21.3442028985507,58.7524637681159,0.2,0.1,0.8,1.1),
	 ('Feijão, rajado, cozido',84.7018527334929,5.5375,15.2675,0.1,0.0,0.2,0.3),
	 ('Feijão, rajado, cru',325.844411162734,17.2708333333333,62.9291666666666,0.4,0.1,0.8,1.3),
	 ('Feijão, rosinha, cozido',67.8662287714282,4.53958333333333,11.8227499999999,0.2,0.0,0.2,0.4),
	 ('Feijão, rosinha, cru',336.961911127567,20.9166666666666,62.2233333333333,0.6,0.1,0.7,1.4);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Feijão, roxo, cozido',76.8933823179006,5.72083333333333,12.9081666666666,0.1,0.1,0.3,0.5),
	 ('Feijão, roxo, cru',331.414977456728,22.1666666666666,59.9866666666666,0.3,0.2,0.8,1.3),
	 ('Grão-de-bico, cru',354.702876589099,21.2291666666666,57.8841666666666,0.9,1.4,2.8,5.1),
	 ('Guandu, cru',344.133651284992,18.9645833333333,64.0004166666666,0.6,0.2,0.9,1.7),
	 ('Lentilha, cozida',92.6387662522991,6.31041666666666,16.3022499999999,0.1,0.1,0.3,0.5),
	 ('Lentilha, crua',339.141240203553,23.1521739130434,62.0044927536231,0.1,0.2,0.4,0.7),
	 ('Paçoca, amendoim',486.927086464524,15.9958333333333,52.3761666666666,4.1,10.0,7.3,21.4),
	 ('Pé-de-moleque, amendoim',503.190365839955,13.1622400919596,54.730426574707,5.08,14.39,8.25,27.72),
	 ('Soja, extrato solúvel, natural, fluido',39.1048552753507,2.38107001590728,4.27526333333334,0.2,0.3,0.6,1.1),
	 ('Soja, extrato solúvel, pó',458.895729437867,35.6875002384185,28.4828333333333,3.3,6.4,12.9,22.6);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Soja, queijo (tofu)',64.4850940738902,6.55317671044667,2.12682333333333,0.4,0.5,1.7,2.6),
	 ('Tremoço, cru',381.278173960129,33.575,43.7863333333333,1.2,5.4,1.7,8.3),
	 ('Tremoço, em conserva',120.64258534487,11.1083333333333,12.3893333333333,0.4,1.9,0.6,2.9),
	 ('Amêndoa, torrada, salgada',580.74695455607,18.5547593851089,29.54724,4.8,32.3,16.2,53.3),
	 ('Castanha-de-caju, torrada, salgada',570.167626501619,18.5093673327763,29.1349660005569,7.7,26.5,8.1,42.3),
	 ('Castanha-do-Brasil, crua',642.963071681069,14.5363401015599,15.07865989844,15.3,27.4,21.0,63.7),
	 ('Coco, cru',406.487353107809,3.69183412310697,10.401665876893,30.0,1.5,0.3,31.8),
	 ('Gergelim, semente',583.546714754549,21.1646674283345,21.6176659049987,7.8,19.9,22.5,50.2),
	 ('Linhaça, semente',495.09611384365,14.0838671735127,43.3121994931538,4.2,7.1,25.3,36.6),
	 ('Pinhão, cozido',174.369902,2.98036666666666,43.9176333333333,0.3,0.1,0.2,0.6);
INSERT INTO "alimentosTabelaApp" ("nomeAlimentoApp",caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,"gordutaTotal") VALUES
	 ('Pupunha, cozida',218.5338808766,2.52291666666666,29.5694166666666,3.066,6.78233333333333,0.360666666666666,10.209),
	 ('Noz, crua',620.060019790566,13.9708005027771,18.3638661638895,5.6,8.7,44.1,58.4);