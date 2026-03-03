const KEY = 'e879ec31781cb2337e934fe3d05154a9'



//requist get data


const getData = async (city) => {
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&units=metric&appid=${KEY}`
    loader(true)
    const req = await fetch(base + query)
    const data = await req.json()
    loader(false)
    return data
}
getData('london').then((data) =>{
    
} )