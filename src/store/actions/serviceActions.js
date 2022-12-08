import actionTypes from './actionTypes';
import { createNewServiceService, getAllServices, deleteServiceService, editServiceService } from '../../services/serviceService';
import { toast } from 'react-toastify'

export const createNewService = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewServiceService(data);
            if (res && res.errCode === 0) {
                toast.success("Thêm mới dịch vụ thành công!");
                dispatch(saveServiceSuccess())
                dispatch(fetchAllServiceStart());
            }
            else {
                dispatch(saveServiceFailded());
            }
        } catch (e) {
            dispatch(saveServiceFailded());
            console.log('saveServiceFailded error', e)
        }
    }
}
export const saveServiceSuccess = () => ({
    type: actionTypes.CREATE_SERVICE_SUCCESS
})
export const saveServiceFailded = () => ({
    type: actionTypes.CREATE_SERVICE_FAILDED
})

export const fetchAllServiceStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllServices("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllServiceSuccess(res.services))
            }
            else {
                dispatch(fetchAllServiceFaided());
            }
        } catch (e) {
            dispatch(fetchAllServiceFaided());
            console.log('fetchAllServiceFailded error', e)
        }
    }
}

export const fetchAllServiceSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_SERVICE_SUCCESS,
    services: data

})

export const fetchAllServiceFaided = (data) => ({
    type: actionTypes.FETCH_ALL_SERVICE_FAILDED
})

export const deleteAService = (serviceId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteServiceService(serviceId);
            if (res && res.errCode === 0) {
                toast.success("Xoá dịch vụ thành công!");
                dispatch(deleteServiceSuccess());
                dispatch(fetchAllServiceStart());
            }
            else {
                toast.error("Xoá dịch vụ thất bại!");
                dispatch(deleteServiceFailded());
            }
        } catch (e) {
            toast.error("Xoá dịch vụ thất bại!");
            dispatch(deleteServiceFailded());
            console.log('deleteServiceFailded error', e)
        }
    }
}
export const deleteServiceSuccess = () => ({
    type: actionTypes.DELETE_SERVICE_SUCCESS
})

export const deleteServiceFailded = () => ({
    type: actionTypes.DELETE_SERVICE_FAILDED
})

export const editAService = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editServiceService(data);
            if (res && res.errCode === 0) {
                toast.success("Cật nhật dịch vụ thành công!");
                dispatch(editServiceSuccess());
                dispatch(fetchAllServiceStart());
            }
            else {
                toast.error("Cật nhật dịch vụ thất bại1!");
                dispatch(editServiceFailded());
            }
        } catch (e) {
            toast.error("Cật nhật dịch vụ thất bại!");
            dispatch(editServiceFailded());
            console.log('editServiceFailded error', e)
        }
    }
}
export const editServiceSuccess = () => ({
    type: actionTypes.EDIT_SERVICE_SUCCESS,
})

export const editServiceFailded = () => ({
    type: actionTypes.EDIT_SERVICE_FAILDED
})
