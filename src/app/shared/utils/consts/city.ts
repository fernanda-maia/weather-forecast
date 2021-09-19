export const getCityImage = (code: string ) => {
    const country = code.toUpperCase()

    const files: {[key: string]: string} = {
        "CN": 'china.svg',
        "FR": 'france.svg',
        "JP": 'japan.svg',
        "EG": 'egypt.svg',
        "ID": 'indonesia.svg',
        "US": 'usa.svg',
        "PH": 'philippines.svg',
        "IT": 'italy.svg',
        "IN": 'india.svg',
        "GB": 'england.svg',
        "BR": 'brazil.jpg',
        "default": 'default.svg'
    }

    const image = country in files?
        files[country] : files["default"]

    return `assets/images/cities/${image}`;
} 