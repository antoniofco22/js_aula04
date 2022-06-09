function full(){
	peso = document.querySelector('#peso').value;
	altura = document.querySelector('#altura').value;
	if(isNaN(peso) || isNaN(altura)){
		return alert('Um dos valores não são números.');
	}else{
		peso = parseFloat(peso);
		altura = parseFloat(altura);
	}

	op = peso/(altura*altura);
	op=parseFloat(op);

	resultado = document.querySelector('.resultado');
	
	if(op<(18.5)){
		resultado.innerHTML = "Abaixo do peso";
	}else if((18.5)<=op && op<=(24.9)){
		resultado.innerHTML = "Normal";
	}else if((25)<=op && op<=(29.9)){
		resultado.innerHTML = "Sobrepeso";
	}else{
		resultado.innerHTML = "Obesidade";
	}
}
