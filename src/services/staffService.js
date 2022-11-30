import axios from '../axios';

const handleLoginApi = (staffEmail, staffPassword) => {
    return axios.post('/api/login', { email: staffEmail, password: staffPassword });

}

const getAllStaffs = (inputId) => {
    return axios.get(`/api/get-all-staffs?id=${inputId}`)
}

const createNewStaffService = (data) => {
    console.log('check data from service: ', data)
    return axios.post('/api/create-new-staff', data)
}

const deleteStaffService = (staffId) => {
    return axios.delete('/api/delete-staff', {
        data: {
            id: staffId
        }
    });
}

const editStaffService = (inputData) => {
    return axios.put('/api/edit-staff', inputData);
}

const getLoaitkService = (inputType) => {
    return axios.get(`/api/loaitk?type=${inputType}`)
}

export { handleLoginApi, getAllStaffs, createNewStaffService, deleteStaffService, editStaffService, getLoaitkService }
