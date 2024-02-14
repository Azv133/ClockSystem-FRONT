import { API_ROUTE } from "./globalVariables";

export const getQrLink = async( email, secret ) => {
    const url = `${API_ROUTE}/user/qr`;

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
            email,
            secret
        })
    };

    const resp = await fetch(url, requestOptions);

    const respJson = await resp.json();

    return respJson;
};

export const compareToken = async( code, secret ) => {
    const url = `${API_ROUTE}/user/token`;

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
            code,
            secret
        })
    };

    const resp = await fetch(url, requestOptions);

    const respJson = await resp.json();

    return respJson;
};