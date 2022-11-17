import actionTypes from './actionTypes';
import { getLoaitkService } from '../../services/userService';

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })
            let res = await getLoaitkService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            }
            else {
                dispatch(fetchGenderFaided());
            }
        } catch (e) {
            dispatch(fetchGenderFaided());
            console.log('fetchGenderStart error', e)
        }
    }

}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFaided = () => ({
    type: actionTypes.FETCH_GENDER_FAIDED
})

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFaided = () => ({
    type: actionTypes.FETCH_ROLE_FAIDED
})


export const fetchAreaSuccess = (areaData) => ({
    type: actionTypes.FETCH_AREA_SUCCESS,
    data: areaData
})

export const fetchAreaFaided = () => ({
    type: actionTypes.FETCH_AREA_FAIDED
})

export const fetchAreaStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getLoaitkService("AREA");
            if (res && res.errCode === 0) {
                dispatch(fetchAreaSuccess(res.data))
            }
            else {
                dispatch(fetchAreaFaided());
            }
        } catch (e) {
            dispatch(fetchAreaFaided());
            console.log('fetchAreaStart error', e)
        }
    }
}

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getLoaitkService("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data))
            }
            else {
                dispatch(fetchRoleFaided());
            }
        } catch (e) {
            dispatch(fetchRoleFaided());
            console.log('fetchRoleStart error', e)
        }
    }
}
