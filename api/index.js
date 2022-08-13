const url = "https://ht-media.herokuapp.com/posts";

export const fetchPosts = async () => {
  const response = await fetch(url);
  const posts = await response.json();

  return posts;
};

export const createPost = async (formData) => {
  const response = await fetch(`${url}/create`, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const post = await response.json();

  return post;
}