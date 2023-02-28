// API endpoint URLs for creating and deleting users
const createUserURL = " ";
const deleteUserURL = " ";

// API endpoint URLs for creating and deleting posts
const createPostURL = " ";
const deletePostURL = " ";

// Function to create a new user
function createUser(username, password) {
  // Use fetch API to send a POST request to createUserURL with the user data
  fetch(createUserURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      // Handle the response from the server
      if (!response.ok) {
        throw new Error("Failed to create user");
      }
      console.log("User created successfully");
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function to delete a user
function deleteUser(userId) {
  // Use fetch API to send a DELETE request to deleteUserURL with the user ID
  fetch(deleteUserURL + `/${userId}`, {
    method: "DELETE",
  })
    .then((response) => {
      // Handle the response from the server
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
      console.log("User deleted successfully");
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function to create a new post
function createPost(userId, title, content) {
  // Use fetch API to send a POST request to createPostURL with the post data
  fetch(createPostURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, title, content }),
  })
    .then((response) => {
      // Handle the response from the server
      if (!response.ok) {
        throw new Error("Failed to create post");
      }
      console.log("Post created successfully");
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function to delete a post
function deletePost(postId) {
  // Use fetch API to send a DELETE request to deletePostURL with the post ID
  fetch(deletePostURL + `/${postId}`, {
    method: "DELETE",
  })
    .then((response) => {
      // Handle the response from the server
      if (!response.ok) {
        throw new Error("Failed to delete post");
      }
      console.log("Post deleted successfully");
    })
    .catch((error) => {
      console.error(error);
    });
}