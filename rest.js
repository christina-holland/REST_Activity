//Creating a constant for the apiUrl for convenience
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

//Creating a function that will clear any previous results before rendering new results
function clearResults() {
    document.getElementById('results').innerHTML = '';
};

//Creating a function to render the JSON string response from the API and 
//having the results placed on the webpage inside the div called 'results'
function renderResult(data) {
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result');
    resultDiv.textContent = JSON.stringify(data);
    document.getElementById('results').appendChild(resultDiv);
};

//Task 1 - Creating a function to fetch all posts
function getAllPosts() {
    clearResults();
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => renderResult(data));
};

//Task 2 - Creating a function to fetch the post with id 10
function getPostById() {
    clearResults();
    fetch(`${apiUrl}/10`)
      .then(response => response.json())
      .then(data => renderResult(data));
};

//Task 3 - Creating a function to create a new post
//Using a new object called postData that contains the new post data that will be added
//Logging the id for the new post in the console per assignment instructions
function createNewPost() {
    clearResults();
    const postData = {
      title: 'Hello!',
      body: 'You are awesome',
      userId: 1
    };

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => {
      renderResult(data);
      console.log('New post ID:', data.id);
    });
};   

//Task 4 - Creating a function to replace the post with id 12
//Using a new object called replaceData that contains the replacement data that will overwrite id 12
function replacePost() {
    clearResults();
    const replaceData = {
      id: 12,
      title: 'Replacement Post',
      body: 'If you dont like it, replace it!',
      userId: 1
    };

    fetch(`${apiUrl}/12`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(replaceData)
    })
    .then(response => response.json())
    .then(data => renderResult(data));
};

//Task 5 - Creating a function to change the title of the post with id 12
//Using a new object called updateData that contains the replacement title for id 12
function updatePost() {
    clearResults();
    const updateData = {
      title: 'Updated Post Title'
    };

    fetch(`${apiUrl}/12`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateData)
    })
    .then(response => response.json())
    .then(data => renderResult(data));
};

//Task 6 - Creating a function to delete the post with id 12
//Rendering a success message after the post is deleted
function deletePost() {
    clearResults();
    fetch(`${apiUrl}/12`, {
      method: 'DELETE'
    })
    .then(() => {
      const successMessage = document.createElement('div');
      successMessage.textContent = 'Successfully deleted post with ID 12';
      document.getElementById('results').appendChild(successMessage);
    });
};