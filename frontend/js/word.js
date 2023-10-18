// URL of the API endpoint you want to request data from
// Create a URL object from the current URL
const url = new URL(window.location.href);
const idList = Number(url.searchParams.get('listId'));
const apiUrl = 'http://localhost:3005/word/'+ idList;
const string_one = document.getElementById('string-one');
const string_two_response = document.getElementById('string-two-response');
const show_answer = document.getElementById('show-answer');
const submit_response = document.getElementById('submit-response');
const string_two = document.getElementById('string-two');
const crud_button = document.getElementById('crud-button');
const crud = document.getElementById('crud');
const create_word = document.getElementById('create-word');
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

function createWord() {
    const new_string_one = document.getElementById('new_string_one').value;
    const new_string_two = document.getElementById('new_string_two').value;

    const data = {
        stringOne: new_string_one,
        stringTwo: new_string_two,
    };
    console.log(data);
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Response Data:', responseData);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}
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
function displayCrud(){
    crud.classList.toggle("d-none");
}
show_answer.addEventListener("click",displayAnswer);
submit_response.addEventListener("click",checkAnswer);
crud_button.addEventListener("click",displayCrud);
create_word.addEventListener("click",createWord);
function checkAnswer(){
    string_two.value.toLowerCase() === trueResponse.toLowerCase() ? displaySuccess() : displayError();
};