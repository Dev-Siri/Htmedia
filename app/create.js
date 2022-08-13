import { createPost } from "../api/index.js";

const username = document.querySelector('[data-input-username]');
const title = document.querySelector('[data-input-title]');
const description = document.querySelector('[data-input-description]');
const createPostBtn = document.querySelector('[data-btn-create-post]');

createPostBtn.onclick = async () => {
    const formData = {
        user: username.value,
        title: title.value,
        description: description.value,
    }

    try {
        await createPost(formData);
    
        window.location.href = '/';
    } catch (error) {
        console.log(error);
    }
}