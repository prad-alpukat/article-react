const BASE_URL = import.meta.env.VITE_BASE_URL;

// get all posts
async function getPosts() {
    try {
        const response = await fetch(`${BASE_URL}/wp/v2/posts?_embed&author=2`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// get a post
async function getPost($id) {
    try {
        if (!$id) throw new Error('parameter $id is required! in getPost() function.');

        const response = await fetch(`${BASE_URL}/wp/v2/posts/${$id}?_embed`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// update a post
async function updatePost($id, $data) {
    try {
        if (!$id) throw new Error('parameter $id is required! in updatePost() function.');
        if (!$data) throw new Error('parameter $data is required! in updatePost() function.');

        const response = await fetch(`${BASE_URL}/wp/v2/posts/${$id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify($data),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// login user
async function loginUser($data) {
    try {
        if (!$data) throw new Error('parameter $data is required! in loginUser() function.');

        const response = await fetch(`${BASE_URL}/jwt-auth/v1/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify($data),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}


// export functions
export { getPosts, getPost, updatePost, loginUser }