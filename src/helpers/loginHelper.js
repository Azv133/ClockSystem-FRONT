import { API_ROUTE } from "./globalVariables";

export const loginUser = async( correo, contraseña ) => {
    const url = `${API_ROUTE}/user/login`;

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