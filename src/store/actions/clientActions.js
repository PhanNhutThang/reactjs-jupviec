import actionTypes from './actionTypes';
import { createNewClientService, getAllClients, deleteClientService, editClientService } from '../../services/clientService';
import { toast } from 'react-toastify'
//import { getLoaitkService, createNewClientService, getAllClients, deleteClientService, editClientService } from '../../services/clientService';
// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

// export const fetchGenderStart = () => {
//     return async (dispatch, getState) => {
//         try {
//             dispatch({ type: actionTypes.FETCH_GENDER_START })
//             let res = await getLoaitkService("GENDER");
//             if (res && res.errCode === 0) {
//                 dispatch(fetchGenderSuccess(res.data))
//             }
//             else {
//                 dispatch(fetchGenderFaided());
//             }
//         } catch (e) {
//             dispatch(fetchGenderFaided());
//             console.log('fetchGenderStart error', e)
//         }
//     }

// }

// export const fetchGenderSuccess = (genderData) => ({
//     type: actionTypes.FETCH_GENDER_SUCCESS,
//     data: genderData
// })

// export const fetchGenderFaided = () => ({
//     type: actionTypes.FETCH_GENDER_FAILDED
// })

// export const fetchRoleSuccess = (roleData) => ({
//     type: actionTypes.FETCH_ROLE_SUCCESS,
//     data: roleData
// })

// export const fetchRoleFaided = () => ({
//     type: actionTypes.FETCH_ROLE_FAILDED
// })


// export const fetchRoleStart = () => {
//     return async (dispatch, getState) => {
//         try {
//             let res = await getLoaitkService("ROLE");
//             if (res && res.errCode === 0) {
//                 dispatch(fetchRoleSuccess(res.data))
//             }
//             else {
//                 dispatch(fetchRoleFaided());
//             }
//         } catch (e) {
//             dispatch(fetchRoleFaided());
//             console.log('fetchRoleStart error', e)
//         }
//     }
// }

export const createNewClient = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewClientService(data);
            if (res && res.errCode === 0) {
                toast.success("Thêm mới khách hàng thành công!");
                dispatch(saveClientSuccess())
                dispatch(fetchAllClientStart());
            }
            else {
                dispatch(saveClientFailded());
            }
        } catch (e) {
            dispatch(saveClientFailded());
            console.log('saveClientFailded error', e)
        }
    }
}
export const saveClientSuccess = () => ({
    type: actionTypes.CREATE_CLIENT_SUCCESS
})
export const saveClientFailded = () => ({
    type: actionTypes.CREATE_CLIENT_FAILDED
})

export const fetchAllClientStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllClients("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllClientSuccess(res.clients.reverse()))
            }
            else {
                dispatch(fetchAllClientFaided());
            }
        } catch (e) {
            dispatch(fetchAllClientFaided());
            console.log('fetchAllClientFailded error', e)
        }
    }
}

export const fetchAllClientSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_CLIENT_SUCCESS,
    clients: data

})

export const fetchAllClientFaided = (data) => ({
    type: actionTypes.FETCH_ALL_CLIENT_FAILDED
})

export const deleteAClient = (clientId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteClientService(clientId);
            if (res && res.errCode === 0) {
                toast.success("Xoá khách hàng thành công!");
                dispatch(deleteClientSuccess());
                dispatch(fetchAllClientStart());
            }
            else {
                toast.error("Xoá khách hàng thất bại!");
                dispatch(deleteClientFailded());
            }
        } catch (e) {
            toast.error("Xoá khách hàng thất bại!");
            dispatch(deleteClientFailded());
            console.log('deleteClientFailded error', e)
        }
    }
}
export const deleteClientSuccess = () => ({
    type: actionTypes.DELETE_CLIENT_SUCCESS
})

export const deleteClientFailded = () => ({
    type: actionTypes.DELETE_CLIENT_FAILDED
})

export const editAClient = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editClientService(data);
            if (res && res.errCode === 0) {
                toast.success("Cật nhật khách hàng thành công!");
                dispatch(editClientSuccess());
                dispatch(fetchAllClientStart());
            }
            else {
                toast.error("Cật nhật khách hàng thất bại!");
                dispatch(editClientFailded());
            }
        } catch (e) {
            toast.error("Cật nhật khách hàng thất bại!");
            dispatch(editClientFailded());
            console.log('editClientFailded error', e)
        }
    }
}
export const editClientSuccess = () => ({
    type: actionTypes.EDIT_CLIENT_SUCCESS,
    // users: data
})

export const editClientFailded = () => ({
    type: actionTypes.EDIT_CLIENT_FAILDED
})
