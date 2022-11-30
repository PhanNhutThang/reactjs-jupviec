import axios from '../axios';

const handleLoginApi = (clientEmail, clientPassword) => {
    return axios.post('/api/login', { email: clientEmail, password: clientPassword });
}

const getAllClients = (inputId) => {
    return axios.get(`/api/get-all-clients?id=${inputId}`)
}

const createNewClientService = (data) => {
    console.log('check data from service: ', data)
    return axios.post('/api/create-new-client', data)
}

const deleteClientService = (clientId) => {
    return axios.delete('/api/delete-client', {
        data: {
            id: clientId
        }
    });
}

const editClientService = (inputData) => {
    return axios.put('/api/edit-client', inputData);
}

const getLoaitkService = (inputType) => {
    return axios.get(`/api/loaitk?type=${inputType}`)
}

export { handleLoginApi, getAllClients, createNewClientService, deleteClientService, editClientService, getLoaitkService }
