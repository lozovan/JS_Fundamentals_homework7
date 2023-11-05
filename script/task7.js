const citiesByCountry = {
    Ukraine: ["Cherkasy", "Chernihiv", "Chernivtsi", "Dnipro", "Donetsk", "Ivano-Frankivsk", "Kharkiv", "Kherson", "Khmelnytskyi", "Kropyvnytskyi", "Kyiv", "Luhansk", "Lutsk", "Lviv", "Mykolaiv", "Odesa", "Poltava", "Rivne", "Simferopol", "Sumy", "Ternopil", "Uzhhorod", "Vinnytsia", "Zaporizhzhia", "Zhytomyr"],
    USA: ["Albuquerque", "Austin", "Baltimore", "Boston", "Charlotte", "Chicago", "Columbus", "Dallas", "Denver", "Detroit", "El Paso", "Fort Worth", "Houston", "Indianapolis", "Jacksonville", "Las Vegas", "Los Angeles", "Louisville", "Memphis", "Milwaukee", "Nashville", "New York", "Oklahoma City", "Philadelphia", "Phoenix", "Portland", "San Antonio", "San Diego", "San Francisco", "San Jose", "Seattle", "Washington"],
    Germany: ["Berlin", "Hamburg", "Munchen", "Koln", "Frankfurt", "Stuttgart", "Dusseldorf", "Leipzig", "Dortmund", "Essen", "Bremen", "Dresden", "Hannover"]

};

function populateCities() {
    const countriesDropdown = document.getElementById('countries');
    const citiesDropdown = document.getElementById('cities');
    const selectedCountry = countriesDropdown.value;
    const selectedCountryName = countriesDropdown.options[countriesDropdown.selectedIndex].text;
    citiesDropdown.innerHTML = '<option value="">--Select a city--</option>';
    for (let city of citiesByCountry[selectedCountry]) {
        let option = document.createElement('option');
        option.value = city;
        option.text = city;
        citiesDropdown.appendChild(option);
    }
}

function displaySelection() {
    const countriesDropdown = document.getElementById('countries');
    const citiesDropdown = document.getElementById('cities');
    const selectedCountryName = countriesDropdown.options[countriesDropdown.selectedIndex].text;
    const selectedCityName = citiesDropdown.options[citiesDropdown.selectedIndex].text;
    document.getElementById('selected').innerText = `Selected country: ${selectedCountryName}, Selected city: ${selectedCityName}`;
}