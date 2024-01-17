
export const loginUser = async( correo, contraseña ) => {
    const url = 'http://localhost:3001/user/login';

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
            correo,
            contraseña
        })
    };

    const resp = await fetch(url, requestOptions);

    const respJson = await resp.json();

    return respJson;
};