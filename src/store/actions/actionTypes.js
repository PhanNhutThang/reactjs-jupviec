const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',

    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',

    USER_LOGIN_SUCCESS: 'USER_LOGIN-SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    // admin
    FETCH_GENDER_START: 'FETCH_GENDER_START',
    FETCH_GENDER_SUCCESS: 'FETCH_GENDER_SUCCESS',
    FETCH_GENDER_FAILDED: 'FETCH_GENDER_FAILDED',

    FETCH_ROLE_SUCCESS: 'FETCH_ROLE_SUCCESS',
    FETCH_ROLE_FAILDED: 'FETCH_ROLE_FAILDED',

    FETCH_AREA_SUCCESS: 'FETCH_AREA_SUCCESS',
    FETCH_AREA_FAILDED: 'FETCH_AREA_FAILDED',

    CREATE_USER_SUCCESS: ' CREATE_USER_SUCCESS',
    CREATE_USER_FAILDED: 'CREATE_USER_FAILDED',

    EDIT_USER_SUCCESS: ' EDIT_USER_SUCCESS',
    EDIT_USER_FAILDED: 'EDIT_USER_FAILDED',

    FETCH_ALL_USER_SUCCESS: 'FETCH_ALL_USER_SUCCESS',
    FETCH_ALL_USER_FAILDED: 'FETCH_ALL_USER_FAILDED',

    DELETE_USER_SUCCESS: ' DELETE_USER_SUCCESS',
    DELETE_USER_FAILDED: 'DELETE_USER_FAILDED',

    // client

    CREATE_CLIENT_SUCCESS: ' CREATE_CLIENT_SUCCESS',
    CREATE_CLIENT_FAILDED: 'CREATE_CLIENT_FAILDED',

    EDIT_CLIENT_SUCCESS: ' EDIT_CLIENT_SUCCESS',
    EDIT_CLIENT_FAILDED: 'EDIT_CLIENT_FAILDED',

    FETCH_ALL_CLIENT_SUCCESS: 'FETCH_ALL_CLIENT_SUCCESS',
    FETCH_ALL_CLIENT_FAILDED: 'FETCH_ALL_CLIENT_FAILDED',

    DELETE_CLIENT_SUCCESS: ' DELETE_CLIENT_SUCCESS',
    DELETE_CLIENT_FAILDED: 'DELETE_CLIENT_FAILDED',

    // staff

    CREATE_STAFF_SUCCESS: ' CREATE_STAFF_SUCCESS',
    CREATE_STAFF_FAILDED: 'CREATE_STAFF_FAILDED',

    EDIT_STAFF_SUCCESS: ' EDIT_STAFF_SUCCESS',
    EDIT_STAFF_FAILDED: 'EDIT_STAFF_FAILDED',

    FETCH_ALL_STAFF_SUCCESS: 'FETCH_ALL_STAFF_SUCCESS',
    FETCH_ALL_STAFF_FAILDED: 'FETCH_ALL_STAFF_FAILDED',

    DELETE_STAFF_SUCCESS: ' DELETE_STAFF_SUCCESS',
    DELETE_STAFF_FAILDED: 'DELETE_STAFF_FAILDED',

    // service

    CREATE_SERVICE_SUCCESS: ' CREATE_SERVICE_SUCCESS',
    CREATE_SERVICE_FAILDED: 'CREATE_SERVICE_FAILDED',

    EDIT_SERVICE_SUCCESS: ' EDIT_SERVICE_SUCCESS',
    EDIT_SERVICE_FAILDED: 'EDIT_SERVICE_FAILDED',

    FETCH_ALL_SERVICE_SUCCESS: 'FETCH_ALL_SERVICE_SUCCESS',
    FETCH_ALL_SERVICE_FAILDED: 'FETCH_ALL_SERVICE_FAILDED',

    DELETE_SERVICE_SUCCESS: ' DELETE_SERVICE_SUCCESS',
    DELETE_SERVICE_FAILDED: 'DELETE_SERVICE_FAILDED',
})

export default actionTypes;