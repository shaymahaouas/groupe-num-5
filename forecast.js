const key = 'Kmr8fsBplEVH9HwJn2p8pkczcZTb8XHx';



const getCity = async (city) => {

    const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(baseURL + query);

    const data = await response.json();

    return data[0]
    

}


const getWeather = async (id) => {

    const baseURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    
    const query = `${id}?apikey=${key}`;

    const response = await fetch(baseURL + query);
    const data = await response.json();

    return data[0]
}