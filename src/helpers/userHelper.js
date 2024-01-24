export const getQrLink = async( email, secret ) => {
    const url = 'http://localhost:3001/user/qr';

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
    const url = 'http://localhost:3001/user/token';

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