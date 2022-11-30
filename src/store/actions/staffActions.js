import actionTypes from './actionTypes';
import { getLoaitkService, createNewStaffService, getAllStaffs, deleteStaffService, editStaffService } from '../../services/staffService';
import { toast } from 'react-toastify'


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

export const createNewStaff = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewStaffService(data);
            if (res && res.errCode === 0) {
                toast.success("Thêm mới nhân viên thành công!");
                dispatch(saveStaffSuccess())
                dispatch(fetchAllStaffStart());
            }
            else {
                dispatch(saveStaffFailded());
            }
        } catch (e) {
            dispatch(saveStaffFailded());
            console.log('saveUserFailded error', e)
        }
    }
}
export const saveStaffSuccess = () => ({
    type: actionTypes.CREATE_STAFF_SUCCESS
})
export const saveStaffFailded = () => ({
    type: actionTypes.CREATE_STAFF_FAILDED
})

export const fetchAllStaffStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllStaffs("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllStaffSuccess(res.staffs.reverse()))
            }
            else {
                dispatch(fetchAllStaffFaided());
            }
        } catch (e) {
            dispatch(fetchAllStaffFaided());
            console.log('fetchAllStaffFailded error', e)
        }
    }
}

export const fetchAllStaffSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_STAFF_SUCCESS,
    staffs: data

})

export const fetchAllStaffFaided = (data) => ({
    type: actionTypes.FETCH_ALL_STAFF_FAILDED
})

export const deleteAStaff = (staffId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteStaffService(staffId);
            if (res && res.errCode === 0) {
                toast.success("Xoá nhân viên thành công!");
                dispatch(deleteStaffSuccess());
                dispatch(fetchAllStaffStart());
            }
            else {
                toast.error("Xoá nhân viên thất bại!");
                dispatch(deleteStaffFailded());
            }
        } catch (e) {
            toast.error("Xoá nhân viên thất bại!");
            dispatch(deleteStaffFailded());
            console.log('deleteStaffFailded error', e)
        }
    }
}
export const deleteStaffSuccess = () => ({
    type: actionTypes.DELETE_STAFF_SUCCESS
})

export const deleteStaffFailded = () => ({
    type: actionTypes.DELETE_STAFF_FAILDED
})

export const editAStaff = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editStaffService(data);
            if (res && res.errCode === 0) {
                toast.success("Cật nhật nhân viên thành công!");
                dispatch(editStaffSuccess());
                dispatch(fetchAllStaffStart());
            }
            else {
                toast.error("Cật nhật nhân viên thất bại1!");
                dispatch(editStaffFailded());
            }
        } catch (e) {
            toast.error("Cật nhật nhân viên thất bại!");
            dispatch(editStaffFailded());
            console.log('editStaffFailded error', e)
        }
    }
}
export const editStaffSuccess = () => ({
    type: actionTypes.EDIT_STAFF_SUCCESS,
    // users: data
})

export const editStaffFailded = () => ({
    type: actionTypes.EDIT_STAFF_FAILDED
})
