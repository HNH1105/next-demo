export async function fetchCars(filter) {
    const { manufacture, year, model, limit, fuel } = filter;
  
    const headers = {
      "X-RapidAPI-Key": "675124a75dmsh9eb88f8ea3efe9cp1f90e7jsne82bf15f4179",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };
  
    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacture}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
      {
        headers: headers,
      }
    );
  
    const result = await response.json();
    return result;
  }
  