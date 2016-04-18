/*var luciernaga1 = [{letra:"S",nro:0},{letra:"E",nro:1},{letra:"N",nro:2},{letra:"D",nro:3},{letra:"R",nro:4},{letra:"M",nro:5},{letra:"O",nro:6},{letra:"Y",nro:7}];

console.log(luciernaga1[0].nro);
*/

/*var luc1 = {};
luc1["S"] = 0;
luc1["E"] = 1;
luc1["N"] = 2;
luc1["D"] = 3;
luc1["R"] = 4;
luc1["M"] = 5;
luc1["O"] = 6;
luc1["Y"] = 7;
//console.log(luc1["S"]);
*/
var MAX_GEN = 1;

var initialPopulation = 10;


var operador1 = "SEND";
var operador2 = "MORE";
var resultado = "MONEY";

var op1 = operador1.split("").reverse();
var op2 = operador2.split("").reverse();
var res = resultado.split("").reverse();

var suma = operador1  + operador2 + resultado;

var unicos = [];

for (i = 0;i < suma.length; i++) {
	if(unicos.indexOf(suma[i])==-1){
		unicos.push(suma[i]);
	}
}

function generarLuciernagas(){
	var luciernagas = [];
	for(j=0;j<initialPopulation;j++){
		var luc = {};
		for(i = 0; i < unicos.length;i++){
			var nro = Math.round(Math.random()*9);
			while(exists(luc,nro)){
				nro = Math.round(Math.random()*9);
			}
			luc[unicos[i]] = nro;
		}
		luciernagas.push(luc);
	}
	return luciernagas;
}


function exists(luciernaga, nro) {
    for(var x in luciernaga){
    	if(luciernaga[x]==nro){
    		return true;
    	}
    }
    return false;
}

function error(luc){

	var acarreo=0;
	var h=0;
	var error=0;

	for (var i = 0; i < res.length; i++) {
		h= acarreo - luc[res[i]];
		acarreo=0;

		if(i<op1.length) h=h+luc[op1[i]]
		if(i<op2.length) h=h+luc[op2[i]]


		if(h>=10){
			h=h-10;
			acarreo=1;
		}
		error+=Math.abs(h);
	};
	return error;
}


function distanciaManhattan(luc1,luc2){
	var distancia = 0;
	for (x in luc1){
		distancia+=Math.abs(luc1[x]-luc2[x]);
	}
	return distancia;
}


function FA(){

var luciernagas = generarLuciernagas();

var i = 0;

while (i < MAX_GEN) {
	for (var i = 0; i < initialPopulation; i++) {
		for (var j = 0; j < initialPopulation; j++) {			
			if (error(luciernagas[i])>error(luciernagas[j])){
					//i se tiene que mover hacia j
					console.log(distanciaManhattan(luciernagas[i],luciernagas[j]))
			}

		};
	};
}

	

}