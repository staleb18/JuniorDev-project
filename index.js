async function getCountries() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all?fields=name,population,region,capital');
      if(!response.ok){
        throw new Error ("could not fetch resource");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  getCountries();