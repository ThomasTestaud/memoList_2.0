// URL of the API endpoint you want to request data from
const apiUrl = 'http://localhost:3000/word/1';
const string_one = document.getElementById('string-one');
const string_two_response = document.getElementById('string-two-response');
const show_answer = document.getElementById('show-answer');
const submit_response = document.getElementById('submit-response');
const string_two = document.getElementById('string-two');
let trueResponse;
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
        string_two_response.innerHTML = data[randomIndex].string_two;
        trueResponse = data[randomIndex].string_two;
        // You can process the data here or update your UI
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
    });
function displayAnswer(){
    string_two_response.classList.toggle("d-none");
}
function displaySuccess(){
    displayAnswer();
    window.alert('success');
}
function displayError(){
    window.alert('error');
}
show_answer.addEventListener("click",displayAnswer);
submit_response.addEventListener("click",checkAnswer);
function checkAnswer(){
    string_two.value.toLowerCase() === trueResponse.toLowerCase() ? displaySuccess() : displayError();
};