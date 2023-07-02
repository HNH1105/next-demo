export async function fetchCars(filter: FilterProps) {
    const { manufacture, year, model, limit, fuel } = filter;
  
    const headers: HeadersInit = {
      "X-RapidAPI-Key": "675124a75dmsh9eb88f8ea3efe9cp1f90e7jsne82bf15f4179",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };
  
    console.log(limit)
    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacture}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
      {
        headers: headers,
      }
    );
    console.log(response)
    const result = await response.json();
 
    return result;
  }