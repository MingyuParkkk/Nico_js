const COORDS = 'coords';

function saveCoords(coordsObj){
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
	//console.log(position);
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	// const coordsObj = {
	// 	latitude : latitude,
	// 	longitude : longitude
	// }
	const coordsObj = {
		latitude,
		longitude
	};
	saveCoords(coordsObj);
}

function handleGeoError(){
	console.log('Cant access geo location');
}

function askForCoords(){
	navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
	const loadedCoords = localStorage.getItem(COORDS);
	if(loadedCoords === null){
		askForCoords();
	}else{
		// get weather
	}
}

function init(){
	loadCoords();
}

init();