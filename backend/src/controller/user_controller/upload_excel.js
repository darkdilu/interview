const xlsx = require('xlsx');
const axios = require('axios');



async function fetchWeather(city) {
    
    const apiKey = '8e54da8aef1b2c027986d5e7c0242e35'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(`Error fetching weather data for ${city}:`, error);
      return null;
    }
  }



exports.upload_excel=async (req,res)=>{

    try {
    
        const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(sheet);
        console.log(data)
    
       
        const weatherReports = [];

    for (const row of data) {
      const { Country, State, District, City } = row;
      const cityWeather = await fetchWeather(City);
      if (cityWeather) {
        weatherReports.push({
          country: Country,
          state: State,
          district: District,
          city: City,
          weather: cityWeather
        });
      }
    }

    res.json(weatherReports);


      } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
      }


}