function insertGeo(position) {
    let latUser = position.coords.latitude;
    let longUser = position.coords.longitude;
    console.log(latUser , longUser);
};
    
navigator.geolocation.getCurrentPosition(insertGeo);
    