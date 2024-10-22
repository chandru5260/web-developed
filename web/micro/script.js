function addPost() {
    const postInput = document.getElementById('postInput');
    const postList = document.getElementById('postList');
    
    if (postInput.value.trim() === "") return;

    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.textContent = postInput.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        postList.removeChild(postDiv);
    };

    postDiv.appendChild(deleteButton);
    postList.appendChild(postDiv);
    postInput.value = ''; // Clear input field
}
