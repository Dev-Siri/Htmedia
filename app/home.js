import { fetchPosts } from "../api/index.js";

const table = document.querySelector('#table');

const mapPosts = async () => {
    const posts = await fetchPosts();

    try {
        posts?.map(post => {
            const tr = document.createElement('tr');
            const title = document.createElement('td');
            const description = document.createElement('td');
            const user = document.createElement('td');
    
            title.className = 'content';
            description.className = 'content';
            user.className = 'content';
    
            title.textContent = post.title;
            description.textContent = post.description;
            user.textContent = post.user;
    
            tr.append(title);
            tr.append(description);
            tr.append(user);
    
            table.append(tr);
        });
    } catch (error) {
        console.log(error);
    }
}

mapPosts();