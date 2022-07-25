const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "password": password,
            "email": email
        })
    }).then(res => resCheck(res))
}

export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({
            "password": password,
            "email": email
        })
    }).then(res => resCheck(res))
}

export const tokenCheck = (token) => {
    return fetch(`${BASE_URL}/users/me`,{
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        }
    }).then(res => resCheck(res))
}

export const resCheck = (res) => {
    if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка ${res.status}`);
      }
}