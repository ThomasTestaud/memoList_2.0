// URL of the API endpoint you want to request data from
// Create a URL object from the current URL
const url = new URL(window.location.href);
const idList = Number(url.searchParams.get('listId'));
const apiUrl = 'http://localhost:3005/word/'+ idList;
console.log(apiUrl);
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
        const tableBody = document.querySelector("table tbody");
        data.forEach(item => {
            const newRow = document.createElement("tr");
            const stringOneInput = document.createElement("input");
            stringOneInput.type = "text";
            stringOneInput.className = "form-control";
            stringOneInput.value = item.string_one;
            const stringTwoInput = document.createElement("input");
            stringTwoInput.type = "text";
            stringTwoInput.className = "form-control";
            stringTwoInput.value = item.string_two;
            const listIdInput = document.createElement("input");
            listIdInput.type = "text";
            listIdInput.className = "form-control";
            listIdInput.value = item.list_id;
            const stringOneCell = document.createElement("td");
            stringOneCell.appendChild(stringOneInput);
            const stringTwoCell = document.createElement("td");
            stringTwoCell.appendChild(stringTwoInput);
            const listIdCell = document.createElement("td");
            const actionsCell = document.createElement("td");
            actionsCell.innerHTML =
                `<svg style="height: 20px; cursor:pointer;" class="trash text-danger" data-id="data.id" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
                <svg style="height: 20px; cursor:pointer;" class="pen text-warning" data-id="data.id" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>          
            `
            listIdCell.appendChild(listIdInput);
            newRow.appendChild(stringOneCell);
            newRow.appendChild(stringTwoCell);
            newRow.appendChild(listIdCell);
            newRow.appendChild(actionsCell);
            tableBody.appendChild(newRow);
        });
    })
    .catch(error => {
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