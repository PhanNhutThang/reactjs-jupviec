import axios from '../axios';

const getAllServices = (inputId) => {
    return axios.get(`/api/get-all-services?id=${inputId}`)
}

const createNewServiceService = (data) => {
    console.log('check data from service: ', data)
    return axios.post('/api/create-new-service', data)
}

const deleteServiceService = (serviceId) => {
    return axios.delete('/api/delete-service', {
        data: {
            id: serviceId
        }
    });
}

const editServiceService = (inputData) => {
    return axios.put('/api/edit-service', inputData);
}


export { getAllServices, createNewServiceService, deleteServiceService, editServiceService }
