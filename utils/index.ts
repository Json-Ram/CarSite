export async function fetchCars() {
  const secretKey = process.env.API_KEY
  const headers = {
    'X-RapidAPI-Key': secretKey,
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=civic', {
  headers: headers,
});

const result = await response.json();

return result;
}
