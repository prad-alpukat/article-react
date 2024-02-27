const BASE_URL = import.meta.env.VITE_BASE_URL;
const ID_USER = 8

// get all posts
async function getPosts() {
    try {
        const response = await fetch(`${BASE_URL}/wp/v2/posts?_embed&author=8&per_page=100`);
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

// create a post
async function createPost(data) {
    try {
        if (!data) throw new Error('parameter data is required! in createPost() function.');

        const response = await fetch(`${BASE_URL}/wp/v2/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(data),
        });
        return response;
    } catch (error) {
        console.error('Error:', error);
    }
}

// get list media
async function getMedia() {
    try {
        const response = await fetch(`${BASE_URL}/wp/v2/media?_embed&author=${ID_USER}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// delete media item
async function deleteMediaItem(id) {
    try {
        if (!id) throw new Error('parameter id is required! in deleteMediaItem() function.');

        const response = await fetch(`${BASE_URL}/wp/v2/media/${id}?force=true`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.ok;
    } catch (error) {
        console.error('Error:', error);
    }
}

// create media item
async function createMediaItem(data) {
    try {
        if (!data) throw new Error('parameter data is required! in createMediaItem() function.');

        const form = new FormData();
        form.append('file', data);

        const options = {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        }

        options.body = form;
        const response = await fetch(`${BASE_URL}/wp/v2/media`, options);
        const res = await response.json();
        return res;
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

        localStorage.setItem('token', data.token)
        localStorage.setItem('user', data.id)
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}


// export functions
export { getPosts, getPost, updatePost, loginUser, createPost, getMedia, createMediaItem, deleteMediaItem }