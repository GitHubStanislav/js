function getUsers() {
  return fetch("https://ajax.test-danit.com/api/json/users")
    .then((response) => response.json())
    .then((data) => data);
}

function getPosts() {
  return fetch("https://ajax.test-danit.com/api/json/posts")
    .then((response) => response.json())
    .then((data) => data);
}

function displayPosts(posts, users) {
  const cardsContainer = document.getElementById("cardsContainer");

  posts.forEach((post) => {
    const user = users.find((user) => user.id === post.userId);
    const card = createCard(post, user);
    cardsContainer.appendChild(card);
  });
}

function createCard(post, user) {
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-post-id", post.id); // Додано атрибут з id публікації

  const header = document.createElement("h3");
  header.textContent = post.title;

  const text = document.createElement("p");
  text.textContent = post.body;

  const userInfo = document.createElement("div");
  userInfo.className = "user-info";

  const name = document.createElement("span");
  name.textContent = `${user.firstName} ${user.lastName}`;

  const email = document.createElement("span");
  email.textContent = user.email;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => deletePost(post.id));

  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () =>
    openEditModal(post.id, post.title, post.body)
  );

  userInfo.appendChild(name);
  userInfo.appendChild(email);

  card.appendChild(header);
  card.appendChild(text);
  card.appendChild(userInfo);
  card.appendChild(deleteBtn);
  card.appendChild(editBtn);

  return card;
}

function deletePost(postId) {
  fetch(`https://ajax.test-danit.com/api/json/posts/${postId}`, {
    method: "DELETE",
  }).then(() => {
    const card = document.querySelector(`.card[data-post-id="${postId}"]`);
    if (card) {
      card.remove();
    }
  });
}

function openCreateModal() {
  const modal = document.getElementById("createModal");
  modal.style.display = "block";
}

function closeCreateModal() {
  const modal = document.getElementById("createModal");
  modal.style.display = "none";
}

function createPost(title, body) {
  const post = {
    title,
    body,
    userId: 1, // Автор публікації (користувач з id: 1)
  };

  fetch("https://ajax.test-danit.com/api/json/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  })
    .then((response) => response.json())
    .then((newPost) => {
      const cardsContainer = document.getElementById("cardsContainer");
      const users = JSON.parse(localStorage.getItem("users"));
      const user = users.find((user) => user.id === newPost.userId);
      const card = createCard(newPost, user);
      cardsContainer.prepend(card);
      closeCreateModal();
    });
}

function openEditModal(postId, title, body) {
  const modal = document.getElementById("editModal");
  const editTitleInput = document.getElementById("editPostTitle");
  const editBodyInput = document.getElementById("editPostBody");

  editTitleInput.value = title;
  editBodyInput.value = body;

  modal.style.display = "block";

  // Додати обробник події для кнопки "Update" у модальному вікні
  document.getElementById("updateBtn").addEventListener("click", () => {
    const updatedTitle = editTitleInput.value;
    const updatedBody = editBodyInput.value;
    updatePost(postId, updatedTitle, updatedBody);
  });
}

function closeEditModal() {
  const modal = document.getElementById("editModal");
  modal.style.display = "none";
}

function updatePost(postId, updatedTitle, updatedBody) {
  const post = {
    title: updatedTitle,
    body: updatedBody,
  };

  fetch(`https://ajax.test-danit.com/api/json/posts/${postId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  })
    .then((response) => response.json())
    .then((updatedPost) => {
      const card = document.querySelector(`.card[data-post-id="${postId}"]`);
      if (card) {
        const header = card.querySelector("h3");
        const text = card.querySelector("p");
        header.textContent = updatedPost.title;
        text.textContent = updatedPost.body;
      }
      closeEditModal();
    });
}

Promise.all([getUsers(), getPosts()]).then(([users, posts]) => {
  localStorage.setItem("users", JSON.stringify(users));
  displayPosts(posts, users);
  document.getElementById("loader").style.display = "none";
});

document
  .getElementById("addPostBtn")
  .addEventListener("click", openCreateModal);

document
  .getElementById("createClose")
  .addEventListener("click", closeCreateModal);
document.getElementById("createBtn").addEventListener("click", () => {
  const title = document.getElementById("postTitle").value;
  const body = document.getElementById("postBody").value;
  createPost(title, body);
});

document.getElementById("editClose").addEventListener("click", closeEditModal);
