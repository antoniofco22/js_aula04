function Aleatorio(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)/10
}

function full(){
	genero = Aleatorio(0, 1000);
	if(51.7<=genero){
		genero = 'Mulher';
	}else{
		genero = 'Homem';
	}
	idoso = Aleatorio(0, 1000);
	if(idoso<=16.7){
		idoso = 'e é idoso';
	}else{
		idoso = 'não é idoso';
	}
	resultado.innerHTML = 'É '+genero+', '+idoso+'.';
}


