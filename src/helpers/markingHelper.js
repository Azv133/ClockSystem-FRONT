import { API_ROUTE } from "./globalVariables";

const path = 'marcaciones';

export const getMarkings = async( id_usuario ) => {
    const url = `${API_ROUTE}/${path}/${id_usuario}`;

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', 
        },
    };

    const resp = await fetch(url, requestOptions);

    const respJson = await resp.json();

    return respJson;
};

export const mark = async( id_usuario, id_tipo_marcacion ) => {
    const url = `${API_ROUTE}/${path}`;

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
            id_usuario,
            id_tipo_marcacion
        })
    };

    const resp = await fetch(url, requestOptions);

    const respJson = await resp.json();

    return respJson;
};

export const getGroupMarkings = async( id_usuario ) => {
    const url = `${API_ROUTE}/${path}/group/${id_usuario}`;

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', 
        },
    };

    const resp = await fetch(url, requestOptions);

    const respJson = await resp.json();

    return respJson;
};

export const getGroupMarkingsByDate = async( id_usuario, from, to ) => {
    const url = `${API_ROUTE}/${path}/groupByDate/${id_usuario}/${from}/${to}`;

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', 
        },
    };

    const resp = await fetch(url, requestOptions);

    const respJson = await resp.json();

    return respJson;
};