const BASE_URL = import.meta.env.VITE_BASE_URL;

function getPosts() {
    return fetch(`${BASE_URL}/wp/v2/posts?_embed&author=1`)
        .then(response => response.json())
        .then(json => json);
}

export { getPosts }