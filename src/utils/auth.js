const BASE_URL = import.meta.env.VITE_BASE_URL;

async function validateToken() {
    try {
        const response = await fetch(`${BASE_URL}/jwt-auth/v1/token/validate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        const data = await response.json();
        if (data.code === 'jwt_auth_valid_token') {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error:', error);
    }
}


async function checkAuth() {
    const token = localStorage.getItem('token');
    if (token) {

        // check token valid or not
        const isValid = await validateToken();

        if (isValid) {
            return true;
        } else {
            return false;
        }

    } else {
        return false;
    }
}

export { checkAuth }