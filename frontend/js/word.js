// URL of the API endpoint you want to request data from
const apiUrl = 'http://localhost:3000/word';
const string_one = document.getElementById('string-one');
const string_two = document.getElementById('string-two');
// Make a GET request using the fetch API
fetch(apiUrl)
    .then(response => {
        // Check if the response status is OK (200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the response body as JSON
        return response.json();
    })
    .then(data => {
        // Handle the JSON data
        console.log('Data received:', data);
        const randomIndex = Math.floor(Math.random()*data.length);
        console.log(data[randomIndex].string_one);
        string_one.innerHTML = data[randomIndex].string_one
        string_two.value = data[randomIndex].string_two


        // You can process the data here or update your UI
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
    });