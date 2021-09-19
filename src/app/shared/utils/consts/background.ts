export const getBg = (weather: string) => {
    const icon = weather.toLowerCase();

    const files: {[key: string]: string} = {
        "01d": 'dclear.jpg',
        "01n": 'nclear.jpg',
        "02d": 'dfclouds.jpg',
        "02n": 'nfclouds.jpg',
        "03d": 'dcloudy.jpg',
        "03n": 'ncloudy.jpg',
        "04d": 'dbcloudy.jpg',
        "04n": 'nbcloudy.jpg',
        "09d": 'dsrain.jpg',
        "09n": 'nsrain.jpg',
        "10d": 'drain.jpg',
        "10n": 'nrain.jpg',
        "11d": 'dstorm.jpg',
        "11n": 'nstorm.jpg',
        "13d": 'nrain.jpg',
        "13n": 'nsnow.jpg',
        "50d": 'mist.jpg',
        "50n": 'mist.jpg',
        "default": 'default.jpg'
    } 

    const image = icon in files? 
        files[icon] : files["default"];

    return `assets/images/cards/${image}`;
}