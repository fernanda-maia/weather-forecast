export const getBg = (weather: string | undefined) => {

    let background = "";
    switch(weather) {
        case "01d": background = 'dclear.jpg';
        break;

        case "01n": background = 'nclear.jpg';
        break;

        case "02d": background = 'dfclouds.jpg';
        break;

        case "02n": background = 'nfclouds.jpg';
        break;

        case "03d": background = 'dcloudy.jpg';
        break;

        case "03n": background = 'ncloudy.jpg';
        break;

        case "04d": background = 'dbcloudy.jpg';
        break;

        case "04n": background = 'nbcloudy.jpg';
        break;

        case "09d": background = 'dsrain.jpg';
        break;

        case "09n": background = 'nsrain.jpg';
        break;

        case "10d": background = 'drain.jpg';
        break;

        case "10n": background = 'nrain.jpg';
        break;

        case "11d": background = 'dstorm.jpg';
        break;

        case "11n": background = 'nstorm.jpg';
        break;

        case "13d": background = 'nrain.jpg';
        break;

        case "13n": background = 'nsnow.jpg';
        break;

        default:
            background = 'default.jpg';
    }

    return `assets/images/cards/${background}`;

} 
