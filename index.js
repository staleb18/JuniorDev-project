async function getCountries() {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,population,region,capital"
    );
    if (!response.ok) {
      throw new Error("could not fetch resource");
    }
    const data = await response.json();

    const outputDiv = document.getElementById("output");

    // starting the list
    let html = "<ul>";

    // Loop through each country and add it as a list item + its population, region, and capital
    data.forEach((country) => {
      html += `<li>${country.name.common} - Population: ${
        country.population
      } - Region: ${country.region} - Capital: ${
        country.capital ? country.capital[0] : "Not Available"
      }</li>`;
    });

    // Close the unordered list
    html += "</ul>";

    // Insert the HTML into the div
    outputDiv.innerHTML = html;
  } catch (error) {
    console.log("Error:", error);
  }
}

getCountries();
