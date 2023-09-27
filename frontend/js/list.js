const url = 'http://localhost:3000/list/';
const validate = document.getElementById('validate');
const allLists = document.getElementById('all-lists');
const editPopup = document.getElementById('edit-popup');
const cancelEdit = document.getElementById('cancel-edit');
const validateEdit = document.getElementById('validate-edit');
let listData;
let clipId;
const titleEdit = document.getElementById('title-edit');
const descriptionEdit = document.getElementById('description-edit');

validate.addEventListener('click', () => {
    createList();
})

cancelEdit.addEventListener('click', () => {
    editPopup.classList.add('none');
})
validateEdit.addEventListener('click', () => {
    editPopup.classList.add('none');
    patchList(clipId, titleEdit.value, descriptionEdit.value);
})



getLists();

function createList() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    
    const data = {
      title: title,
      description: description
    };
    
    fetch(url, {
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
        getLists();
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
}

function getLists() {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(responseData => {
        console.log('Response Data:', responseData);
        displayLists(responseData);
        listData = responseData;
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
}

function deleteList(id) {
    
    fetch(url+id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(responseData => {
        console.log('Response Data:', responseData);
        getLists();
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
}

function patchList(id, title, description) {
    
    const data = {
      title: title,
      description: description
    };
    
    fetch(url+id, {
      method: 'PATCH',
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
        getLists();
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
}

function displayLists(data) {
    allLists.innerHTML = "";

    for(list of data) {
        allLists.innerHTML += `
        <div class="card m-2 position-relative">
            <svg style="position:absolute; top:10px; right: 10px; height: 20px; cursor:pointer;" class="trash text-danger" data-id="${list.id}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>      
            <svg style="position:absolute; top:10px; right: 40px; height: 20px; cursor:pointer;" class="pen text-warning" data-id="${list.id}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>
            <a href="http://localhost/C_O_D_E/MDS/GIT/memoList/frontend/word.php?listId=${list.id}" class="card-body text-decoration-none">
                <h2 class="card-title">${list.name}</h2>
                <p class="card-text">${list.description}</p>
            </a>
        </div>
        `;
    }

    mapEventsOnCards();
}

function openPopUp(id) {
    editPopup.classList.remove('none');

    for(list of listData) {
        if(Number(list.id) === Number(id)) {
            titleEdit.value = list.name;
            descriptionEdit.value = list.description;
            clipId = id;
        }
    }
}

function mapEventsOnCards() {
    const trashs = document.querySelectorAll('.trash');
    trashs.forEach((el, index) =>  {
        el.addEventListener('click', () => {
            deleteList(el.dataset.id);
        })
    })
    const pen = document.querySelectorAll('.pen');
    pen.forEach((el, index) =>  {
        el.addEventListener('click', () => {
            openPopUp(el.dataset.id);
        })
    })
}