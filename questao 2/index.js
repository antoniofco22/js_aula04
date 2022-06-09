function Aleatorio(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function full(){
	min = parseInt(document.querySelector('#min').value);
	max = parseInt(document.querySelector('#max').value);
	if(isNaN(min) || isNaN(max)){
		return alert('Um dos valores não são números.');
	}

	num = Aleatorio(min, max);

	resultado.innerHTML = num;
}


