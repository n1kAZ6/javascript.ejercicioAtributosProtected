class Vehiculo{
	constructor(marca,modelo,cilindrada){
		this._marca=marca;
		this._modelo=modelo;
		this._cilindrada=cilindrada;
	}
	
	get marca(){
		return this._marca;
	}
	set marca(paramMarca){
		this._marca=paramMarca;
	}
	get modelo(){
		return this._modelo;
	}
	set modelo(paramModelo){
		this._modelo=paramModelo
	}
	get cilindrada(){
		return this._cilindrada;
	}
	set cilindrada(paramCilindrada){
		this._cilindrada=paramCilindrada;
	}
}

class Coche extends Vehiculo{
	constructor(numPuertas,numOcupantes){
		super();
		this._numPuertas=numPuertas;
		this._numOcupantes=numOcupantes;
	}
	get numPuertas(){
		return this._numPuertas;
	}
	set numPuertas(numPuertas){
		this._numPuertas=numPuertas;
	}
	get numOcupantes(){
		return this._numOcupantes;
	}
	set numOcupantes(numOcupantes){
		this._numOcupantes=numOcupantes;
	}
}

class Moto extends Vehiculo{
	constructor(){
		super()
		this._marca;
		this._modelo;
		this._cilindrada;
		this._anyoDisenio;
		this._carnet;
	}
	get anyoDisenio(){
		return this._anyoDisenio;
	}
	set anyoDisenio(anyoDisenio){
		this._anyoDisenio=anyoDisenio;
	}
	get carnet(){
		return this._carnet;
	}
	set carnet(carnet){
		this._carnet=carnet;
	}
}

let nuevoCoche = new Coche(2,2);
nuevoCoche.marca="Lamborghini";
nuevoCoche.modelo="Urus";
nuevoCoche.cilindrada=6.498;


let nuevaMoto = new Moto();

nuevaMoto.marca="Ducati";
nuevaMoto.modelo="Panigale V4"
const fechaDiseño = new Date("2018/02/20");
nuevaMoto.anyoDisenio=fechaDiseño;
nuevaMoto.carnet='A';


