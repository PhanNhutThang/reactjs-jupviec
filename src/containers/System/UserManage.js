// import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
// import { connect } from 'react-redux';
// import './UserManage.scss';
// import { getAllUsers, createNewUserService, deleteUserService, editUserService } from '../../services/userService';
// import ModalUser from './ModalUser';
// import ModalEditUser from './ModalEditUser';
// import { emitter } from '../../utils/emitter'
// class UserManage extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             arrUsers: [],
//             isOpenModalUser: false,
//             isOpenModalEditUser: false,
//             userEdit: {}
//         }
//     }
//     async componentDidMount() {
//         await this.getAllUserFormReact();
//     }

//     getAllUserFormReact = async () => {
//         let response = await getAllUsers('ALL');
//         if (response && response.errCode === 0) {
//             this.setState({
//                 arrUsers: response.users
//             })
//         }
//     }

//     handleAddNewUser = () => {
//         this.setState({
//             isOpenModalUser: true,
//         })
//     }
//     toggleUserModal = () => {
//         this.setState({
//             isOpenModalUser: !this.state.isOpenModalUser,
//         })
//     }

//     toggleUserEditModal = () => {
//         this.setState({
//             isOpenModalEditUser: !this.state.isOpenModalEditUser,
//         })
//     }

//     createNewUser = async (data) => {
//         try {
//             let response = await createNewUserService(data);

//             if (response && response.errCode !== 0) {
//                 alert(response.errMessage)

//             } else {
//                 await this.getAllUserFormReact();
//                 this.setState({
//                     isOpenModalUser: false
//                 })
//                 emitter.emit('EVENT_CLEAR_MODAL_DATA')
//             }
//         }
//         catch (e) {
//             console.log(e)
//         }
//     }

//     /* life cyle
//     * Run component :
//         * 1. Run construct -> init state
//         * 2. Did mount (set state)
//         * 3. Render
//     */
//     handleDeleteUser = async (user) => {
//         try {
//             let res = await deleteUserService(user.id);
//             if (res && res.errCode === 0) {
//                 await this.getAllUserFormReact();
//             }
//             else {
//                 alert(res.errMessage)
//             }
//         } catch (e) {
//             console.log(e);
//         }
//     }
//     handleEditUser = (user) => {
//         console.log('check edit user', user)
//         this.setState({
//             isOpenModalEditUser: true,
//             userEdit: user
//         })
//     }
//     doEditUser = async (user) => {
//         try {
//             let res = await editUserService(user);
//             if (res && res.errCode === 0) {
//                 this.setState({
//                     isOpenModalEditUser: false
//                 })
//                 await this.getAllUserFormReact()
//             }
//             else {
//                 alert(res.errCode)
//             }
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     render() {
//         console.log('check render', this.state)
//         let arrUsers = this.state.arrUsers;
//         return (
//             <div className="users-container">
//                 <ModalUser
//                     isOpen={this.state.isOpenModalUser}
//                     toggleFromParent={this.toggleUserModal}
//                     createNewUser={this.createNewUser}

//                 />
//                 {
//                     this.state.isOpenModalEditUser &&
//                     <ModalEditUser
//                         isOpen={this.state.isOpenModalEditUser}
//                         toggleFromParent={this.toggleUserEditModal}
//                         currentUser={this.state.userEdit}
//                         editUser={this.doEditUser}

//                     />
//                 }

//                 <div className='title text-center'> MANAGER USER</div>
//                 <div className='mx-1'>
//                     <button className='btn btn-primary px-3 mt-3 mx-2' onClick={() => this.handleAddNewUser()}>
//                         <i className='fas fa-plus'></i> Add new users
//                     </button>
//                 </div>
//                 <div className='users-table mt-3 mx-2'>
//                     <table id="customers">
//                         <tbody>
//                             <tr>
//                                 <th>Email</th>
//                                 <th>FirstName</th>
//                                 <th>LastName</th>
//                                 <th>Address</th>
//                                 <th>Gender</th>
//                                 <th>Phone</th>
//                                 <th>Area</th>
//                                 <th>RoleId</th>
//                                 <th>Action</th>
//                             </tr>

//                             {arrUsers && arrUsers.map((item, index) => {
//                                 return (
//                                     <tr>
//                                         <td>{item.email}</td>
//                                         <td>{item.firstName}</td>
//                                         <td>{item.lastName}</td>
//                                         <td>{item.address}</td>
//                                         <td>{item.gender}</td>
//                                         <td>{item.phone}</td>
//                                         <td>{item.area}</td>
//                                         <td>{item.roleId}</td>
//                                         <td>
//                                             <button className='btn-edit' onClick={() => this.handleEditUser(item)}><i className='fas fa-pencil-alt'></i></button>
//                                             <button className='btn-delete' onClick={() => this.handleDeleteUser(item)}><i className='fas fa-trash'></i></button>
//                                         </td>
//                                     </tr>
//                                 )
//                             })
//                             }
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         );
//     }

// }

// const mapStateToProps = state => {
//     return {
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserManage);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { Component, useState, useEffect } from 'react';
// import { FormattedMessage } from 'react-intl';
// import { connect } from 'react-redux';
// import { getLoaitkService } from '../../services/userService';
// import * as actions from "../../store/actions";
// import './UserManage.scss';
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';
// import TableManageUser from './TableManageUser';
// import { CRUD_ACTIONS } from "../../utils";
// import PhoneInput from 'react-phone-input-2';
// import { useFormik } from 'formik';
// import * as Yup from "yup";



// class UserManage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             genderArr: [],
//             areaArr: [],
//             roleArr: [],
//             previewImgURL: '',
//             isOpen: false,

//             email: '',
//             password: '',
//             firstName: '',
//             lastName: '',
//             phone: '',
//             address: '',
//             gender: '',
//             role: '',
//             area: '',
//             avatar: '',

//             action: '',
//             userEditId: '',
//         }
//     }


//     async componentDidMount() {
//         this.props.getGenderStart();
//         this.props.getRoleStart();
//         this.props.getAreaStart();
//     }

//     componentDidUpdate(prevProps, prevState, snapshot) {
//         if (prevProps.genderRedux !== this.props.genderRedux) {
//             let arrGenders = this.props.genderRedux
//             this.setState({
//                 genderArr: arrGenders,
//                 gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : ''
//             })
//         }
//         if (prevProps.roleRedux !== this.props.roleRedux) {
//             let arrRoles = this.props.roleRedux
//             this.setState({
//                 roleArr: arrRoles,
//                 role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : ''
//             })
//         }
//         if (prevProps.areaRedux !== this.props.areaRedux) {
//             let arrAreas = this.props.areaRedux
//             this.setState({
//                 areaArr: arrAreas,
//                 area: arrAreas && arrAreas.length > 0 ? arrAreas[0].key : ''
//             })
//         }
//         if (prevProps.listUsers !== this.props.listUsers) {
//             let arrGenders = this.props.genderRedux;
//             let arrRoles = this.props.roleRedux;
//             let arrAreas = this.props.areaRedux;
//             this.setState({
//                 email: '',
//                 password: '',
//                 firstName: '',
//                 lastName: '',
//                 phone: '',
//                 address: '',
//                 gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : '',
//                 role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : '',
//                 area: arrAreas && arrAreas.length > 0 ? arrAreas[0].key : '',
//                 avatar: '',
//                 action: CRUD_ACTIONS.CREATE,


//             })
//         }
//     }
//     handleOnChangeImage = (event) => {
//         let data = event.target.files;
//         let file = data[0];
//         if (file) {
//             let objectUrl = URL.createObjectURL(file);
//             this.setState({
//                 previewImgURL: objectUrl,
//                 avatar: file
//             })
//         }

//     }
//     openPreviewImage = () => {
//         if (!this.state.previewImgURL) return;
//         this.setState({
//             isOpen: true
//         })
//     }
//     handleSaveUser = () => {

//         let isValid = this.checkValidateInput()
//         if (isValid === false) return;
//         let { action } = this.state;
//         if (action === CRUD_ACTIONS.CREATE) {
//             this.props.createNewUser({
//                 email: this.state.email,
//                 password: this.state.password,
//                 firstName: this.state.firstName,
//                 lastName: this.state.lastName,
//                 address: this.state.address,
//                 gender: this.state.gender,
//                 phone: this.state.phone,
//                 area: this.state.area,
//                 roleId: this.state.role,

//             })
//         }
//         this.props.fetchUserRedux();
//         if (action === CRUD_ACTIONS.EDIT) {
//             this.props.editAUserRedux({
//                 id: this.state.userEditId,
//                 email: this.state.email,
//                 password: this.state.password,
//                 firstName: this.state.firstName,
//                 lastName: this.state.lastName,
//                 address: this.state.address,
//                 gender: this.state.gender,
//                 phone: this.state.phone,
//                 area: this.state.area,
//                 roleId: this.state.role,
//                 //image: this.state.image
//             })
//         }
//     }

//     checkValidateInput = () => {
//         let isValid = true;
//         let arrCheck = ['email', 'password', 'firstName', 'lastName', 'phone', 'address']
//         for (let i = 0; i < arrCheck.length; i++) {
//             if (!this.state[arrCheck[i]]) {
//                 isValid = false;
//                 alert('This input is required: ' + arrCheck[i])
//                 break;
//             }
//         }
//         return isValid;
//     }
//     onChangeInput = (event, id) => {
//         let copySate = { ...this.state }

//         copySate[id] = event.target.value;

//         this.setState({
//             ...copySate
//         }, () => {
//             console.log('nhutthang check input onchange', this.state)
//         })
//     }
//     handleEditUserFromParent = (user) => {
//         console.log('nhutthang check edit: ', user)
//         this.setState({
//             email: user.email,
//             password: 'hashpassword',
//             firstName: user.firstName,
//             lastName: user.lastName,
//             phone: user.phone,
//             address: user.address,
//             gender: user.gender,
//             role: user.roleId,
//             area: user.area,
//             avatar: '',
//             action: CRUD_ACTIONS.EDIT,
//             userEditId: user.id
//         })
//     }

//     render() {
//         console.log('thang', this.state)

//         let genders = this.state.genderArr;
//         let roles = this.state.roleArr;
//         let areas = this.state.areaArr;
//         let isLoadingGenderReact = this.props.isLoadingGender;

//         let { isTrueVal, email, password, firstName, lastName, phone, address, gender, area, role, avatar } = this.state;

//         return (
//             <div className='user-redux-container'>
//                 <div className='title'>
//                     Quản lý Admin
//                 </div>
//                 <div className='user-redux-body'>
//                     <div className='container'>
//                         <div className='col-2 my-3'>Thêm mới người dùng</div>
//                         <div className='row'>

//                             <div className='col-3'>
//                                 <label>Email</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
//                                 <input className='form-control' type="email"
//                                     value={email}
//                                     onChange={(event) => { this.onChangeInput(event, 'email') }}
//                                     disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
//                                 />
//                             </div>
//                             {/* <div className='col-3'>
//                                 <label>Email</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
//                                 <input className='form-control' type="email"
//                                     value={email}
//                                     onChange={(event) => { this.onChangeInput(event, 'email'); this.changeEmail() }}

//                                     disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
//                                 />{!this.state.isTrueVal && (
//                                     <div style={{ color: "#F61C04" }}>URL is not valid.</div>
//                                 )}
//                             </div> */}
//                             <div className='col-3'>
//                                 <label>Password</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
//                                 <input className='form-control' type="password"
//                                     value={password}
//                                     onChange={(event) => { this.onChangeInput(event, 'password') }}
//                                     disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
//                                 />
//                             </div>
//                             <div className='col-3'>
//                                 <label>First Name</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
//                                 <input className='form-control' type="text"
//                                     value={firstName}
//                                     onChange={(event) => { this.onChangeInput(event, 'firstName') }}
//                                 />
//                             </div>
//                             <div className='col-3'>
//                                 <label>Last Name</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
//                                 <input className='form-control' type="text"
//                                     value={lastName}
//                                     onChange={(event) => { this.onChangeInput(event, 'lastName') }}
//                                 />
//                             </div>
//                             <div className='col-3 mt-3'>
//                                 <label>Phone Number</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
//                                 <input className='form-control' type="text"
//                                     value={phone}
//                                     onChange={(event) => { this.onChangeInput(event, 'phone') }}
//                                 />
//                             </div>
//                             {/* <div className='col-3'>
//                                 <PhoneInput
//                                     defaultCountry="RU"
//                                     value={value}
//                                     onChange={setValue} />
//                             </div> */}

//                             <div className='col-9 mt-3'>
//                                 <label>Address</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
//                                 <input className='form-control' type="text"
//                                     value={address}
//                                     onChange={(event) => { this.onChangeInput(event, 'address') }}
//                                 />
//                             </div>
//                             <div className='col-3 mt-3'>
//                                 <label>Gender</label>
//                                 <select className='form-control'
//                                     onChange={(event) => { this.onChangeInput(event, 'gender') }}
//                                     value={gender}
//                                 >
//                                     {genders && genders.length > 0 &&
//                                         genders.map((item, index) => {
//                                             return (
//                                                 <option key={index} value={item.key}>{item.valueVi}</option>
//                                             )
//                                         })
//                                     }


//                                 </select>
//                             </div>
//                             <div className='col-3 mt-3'>
//                                 <label>Area</label>
//                                 <select className='form-control'
//                                     onChange={(event) => { this.onChangeInput(event, 'area') }}
//                                     value={area}
//                                 >
//                                     {areas && areas.length > 0 &&
//                                         areas.map((item, index) => {
//                                             return (
//                                                 <option key={index} value={item.key}>{item.valueVi}</option>
//                                             )
//                                         })
//                                     }
//                                 </select>
//                             </div>
//                             <div className='col-3 mt-3'>
//                                 <label>RoleId</label>
//                                 <select className='form-control'
//                                     onChange={(event) => { this.onChangeInput(event, 'role') }}
//                                     value={role}
//                                 >
//                                     {roles && roles.length > 0 &&
//                                         roles.map((item, index) => {
//                                             return (
//                                                 <option key={index} value={item.key}>{item.valueVi}</option>
//                                             )
//                                         })
//                                     }
//                                 </select>
//                             </div>
//                             <div className='col-3 mt-3'>
//                                 <label>Image</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
//                                 <div className='preview-img-container'>
//                                     <input id="previewImg" type="file" hidden
//                                         onChange={(event) => this.handleOnChangeImage(event)}

//                                     />
//                                     <label className='label-upload' htmlFor='previewImg'>Tải ảnh <i className='fas fa-upload'></i></label>
//                                     <div className='preview-image'
//                                         style={{ background: `url(${this.state.previewImgURL})` }}
//                                         onClick={() => this.openPreviewImage()}
//                                     >

//                                     </div>
//                                 </div>

//                             </div>
//                             <div className='col-12 my-3' >
//                                 <button className={this.state.action === CRUD_ACTIONS.EDIT ? "btn btn-warning" : 'btn btn-primary'}
//                                     onClick={() => this.handleSaveUser()} style={{ width: '200px' }}>
//                                     {this.state.action === CRUD_ACTIONS.EDIT ? <p>Cập nhật</p> : <p>Lưu người dùng</p>}

//                                 </button>
//                             </div>
//                             <div className='col-12 mb-5'>
//                                 <TableManageUser
//                                     handleEditUserFromParentKey={this.handleEditUserFromParent}
//                                     action={this.state.action}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {this.state.isOpen === true &&
//                     <Lightbox
//                         mainSrc={this.state.previewImgURL}
//                         onCloseRequest={() => this.setState({ isOpen: false })}
//                     />
//                 }
//             </div>
//         )
//     }
//     // class ProductManage extends Component {


// }


// const mapStateToProps = state => {
//     return {
//         genderRedux: state.admin.genders,
//         isLoadingGender: state.admin.isLoadingGender,
//         roleRedux: state.admin.roles,
//         areaRedux: state.admin.areas,
//         listUsers: state.admin.users
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         getGenderStart: () => dispatch(actions.fetchGenderStart()),
//         getRoleStart: () => dispatch(actions.fetchRoleStart()),
//         getAreaStart: () => dispatch(actions.fetchAreaStart()),
//         createNewUser: (data) => dispatch(actions.createNewUser(data)),
//         fetchUserRedux: () => dispatch(actions.fetchAllUserStart()),
//         editAUserRedux: (data) => dispatch(actions.editAUser(data))
//         //processLogout: () => dispatch(actions.processLogout()),
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserManage);


//88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888//
import React, { Component, useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getLoaitkService } from '../../services/userService';
import * as actions from "../../store/actions";
import './UserManage.scss';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import TableManageUser from './TableManageUser';
import { CRUD_ACTIONS, CommonUtils } from "../../utils";


const emailState = {
    email: '',
    errorMail: ''
}
const passwordSate = {
    password: '',
    errorPassword: ''
}
const phoneState = {
    phone: '',
    errorPhone: ''
}
const firstNameState = {
    firstName: '',
    errorfirstName: ''
}
const lastNameState = {
    lastName: '',
    errorlastName: ''
}
const addRessState = {
    lastName: '',
    erroraddRess: ''
}
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            areaArr: [],
            roleArr: [],
            previewImgURL: '',
            isOpen: false,

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            gender: '',
            role: '',
            area: '',
            avatar: '',
            isShowPassword: false,
            action: '',
            userEditId: '',
        }
        this.state = emailState;
        this.state = passwordSate;
        this.state = phoneState;
        this.state = firstNameState;
        this.state = lastNameState;
        this.state = addRessState;

    }
    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getRoleStart();
        this.props.getAreaStart();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            let arrGenders = this.props.genderRedux
            this.setState({
                genderArr: arrGenders,
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : ''
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            let arrRoles = this.props.roleRedux
            this.setState({
                roleArr: arrRoles,
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : ''
            })
        }
        if (prevProps.areaRedux !== this.props.areaRedux) {
            let arrAreas = this.props.areaRedux
            this.setState({
                areaArr: arrAreas,
                area: arrAreas && arrAreas.length > 0 ? arrAreas[0].key : ''
            })
        }
        if (prevProps.listUsers !== this.props.listUsers) {
            let arrGenders = this.props.genderRedux;
            let arrRoles = this.props.roleRedux;
            let arrAreas = this.props.areaRedux;
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phone: '',
                address: '',
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : '',
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : '',
                area: arrAreas && arrAreas.length > 0 ? arrAreas[0].key : '',
                avatar: '',
                errorMail: '',
                errorPassword: '',
                errorPhone: '',
                errorfirstName: '',
                errorlastName: '',
                erroraddRess: '',
                action: CRUD_ACTIONS.CREATE,
                previewImgURL: ''
            })
        }
    }
    handleOnChangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: objectUrl,
                avatar: base64
            })
        }

    }
    openPreviewImage = () => {
        if (!this.state.previewImgURL) return;
        this.setState({
            isOpen: true
        })
    }

    handleSaveUser = () => {

        let { action } = this.state;
        if (action === CRUD_ACTIONS.CREATE) {
            let isValid = this.checkValidateInput()
            if (isValid === false) return;
            this.props.createNewUser({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                gender: this.state.gender,
                phone: this.state.phone,
                area: this.state.area,
                roleId: this.state.role,
                avatar: this.state.avatar

            })
        }

        if (action === CRUD_ACTIONS.EDIT) {
            //this.props.fetchUserRedux();
            let isValid = this.checkValidateEditInput()
            if (isValid === false) return;
            this.props.editAUserRedux({
                id: this.state.userEditId,
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                gender: this.state.gender,
                phone: this.state.phone,
                area: this.state.area,
                roleId: this.state.role,
                avatar: this.state.avatar
            })
        }
    }


    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['email', 'password', 'firstName', 'lastName', 'phone', 'address']
        console.log('check vali', isValid)
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('Vui lòng điền đầy đủ thông tin: ' + arrCheck[i])
                break;
            }
            break;
        }
        for (let i = 0; i < arrCheck.length; i++) {
            const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i;
            if (!this.state.email) {
                isValid = false;
                this.setState({
                    errorMail: "Vui lòng nhập email "
                });
                break;
            }
            if (!this.state.email || regex.test(this.state.email) === false) {
                isValid = false;
                this.setState({
                    errorMail: "Email không hợp lệ!"
                });
                break;
            }
            else {
                this.setState({
                    errorMail: ''
                })
            }
            break;
        }
        for (let i = 0; i < arrCheck.length; i++) {
            //const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i;
            const regex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/i;
            if (!this.state.password) {
                isValid = false;
                this.setState({
                    errorPassword: "Vui lòng nhập password "
                });
                break;
            }
            if (!this.state.password || regex.test(this.state.password) === false) {
                isValid = false;
                this.setState({
                    errorPassword: "Tối thiểu 8 ký tự, ít nhất một chữ cái, một chữ in hoa, một số và một ký tự đặc biệt"
                });
                break;
            }
            else {
                this.setState({
                    errorPassword: ''
                })
            }
            break;
        }
        for (let i = 0; i < arrCheck.length; i++) {
            const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/i;
            if (!this.state.phone) {
                isValid = false;
                this.setState({
                    errorPhone: "Vui lòng nhập số điện thoại "
                });
                break;
            }
            if (!this.state.phone || regex.test(this.state.phone) === false) {
                isValid = false;
                this.setState({
                    errorPhone: "Số điện thoại không tồn tại"
                });
                break;
            }
            else {
                this.setState({
                    errorPhone: ''
                })
            }
            break;
        }
        for (let i = 0; i < arrCheck.length; i++) {
            const regex = /[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/i;
            if (!this.state.firstName) {
                isValid = false;
                this.setState({
                    errorfirstName: "Vui lòng nhập tên "
                });
                break;
            }
            if (!this.state.firstName || regex.test(this.state.firstName) === false) {
                isValid = false;
                this.setState({
                    errorfirstName: "Tên không hợp lệ"
                });
                break;
            }
            else {
                this.setState({
                    errorfirstName: ''
                })
            }
            break;
        }
        for (let i = 0; i < arrCheck.length; i++) {
            const regex = /[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/i;
            if (!this.state.lastName) {
                isValid = false;
                this.setState({
                    errorlastName: "Vui lòng nhập họ "
                });
                break;
            }
            if (!this.state.lastName || regex.test(this.state.lastName) === false) {
                isValid = false;
                this.setState({
                    errorlastName: "Họ không hợp lệ"
                });
                break;
            }
            else {
                this.setState({
                    errorlastName: ''
                })
            }
            break;
        }
        for (let i = 0; i < arrCheck.length; i++) {
            const regex = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]*$/i;
            if (!this.state.address) {
                isValid = false;
                this.setState({
                    erroraddRess: "Vui lòng nhập địa chỉ "
                });
                break;
            }
            if (!this.state.address || regex.test(this.state.address) === false) {
                isValid = false;
                this.setState({
                    erroraddRess: "Địa chỉ không hợp lệ (!@#~#$%^&*) không tồn tại"
                });
                break;
            }
            else {
                this.setState({
                    erroraddRess: ''
                })
            }
            break;
        }

        return isValid;
    }

    checkValidateEditInput = () => {
        let isValid = true;
        let arrCheck = ['firstName', 'lastName', 'phone', 'address']
        console.log('check vali', isValid)
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('Vui lòng điền đầy đủ thông tin: ' + arrCheck[i])
                break;
            }
            break;
        }
        for (let i = 0; i < arrCheck.length; i++) {
            const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/i;
            if (!this.state.phone) {
                isValid = false;
                this.setState({
                    errorPhone: "Vui lòng nhập số điện thoại "
                });
                break;
            }
            if (!this.state.phone || regex.test(this.state.phone) === false) {
                isValid = false;
                this.setState({
                    errorPhone: "Số điện thoại không tồn tại"
                });
                break;
            }
            else {
                this.setState({
                    errorPhone: ''
                })
            }
            break;
        }
        for (let i = 0; i < arrCheck.length; i++) {
            const regex = /[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/i;
            if (!this.state.firstName) {
                isValid = false;
                this.setState({
                    errorfirstName: "Vui lòng nhập tên "
                });
                break;
            }
            if (!this.state.firstName || regex.test(this.state.firstName) === false) {
                isValid = false;
                this.setState({
                    errorfirstName: "Tên không hợp lệ"
                });
                break;
            }
            else {
                this.setState({
                    errorfirstName: ''
                })
            }
            break;
        }
        for (let i = 0; i < arrCheck.length; i++) {
            const regex = /[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/i;
            if (!this.state.lastName) {
                isValid = false;
                this.setState({
                    errorlastName: "Vui lòng nhập họ "
                });
                break;
            }
            if (!this.state.lastName || regex.test(this.state.lastName) === false) {
                isValid = false;
                this.setState({
                    errorlastName: "Họ không hợp lệ"
                });
                break;
            }
            else {
                this.setState({
                    errorlastName: ''
                })
            }
            break;
        }
        for (let i = 0; i < arrCheck.length; i++) {
            const regex = /[A-Za-z0-9'\.\-\s\,]/i;
            if (!this.state.address) {
                isValid = false;
                this.setState({
                    erroraddRess: "Vui lòng nhập địa chỉ "
                });
                break;
            }
            if (!this.state.address || regex.test(this.state.address) === false) {
                isValid = false;
                this.setState({
                    erroraddRess: "Địa chỉ không hợp lệ (!@#~#$%^&*) không tồn tại"
                });
                break;
            }
            else {
                this.setState({
                    erroraddRess: ''
                })
            }
            break;
        }

        return isValid;
    }

    onChangeInput = (event, id, e) => {
        let copySate = { ...this.state }

        copySate[id] = event.target.value;

        this.setState({
            ...copySate
        }, () => {
            console.log('nhutthang check input onchange', this.state)
        })
        this.setState({
            email: e.target.value
        });
        this.setState({
            password: event.target.value
        })
    }
    handleEditUserFromParent = (user) => {

        let imageBase64 = '';
        if (user.image) {

            // imageBase64 = new Buffer(user.image, 'base64').toString('binary');

        }
        this.setState({
            email: user.email,
            password: '**********',
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            address: user.address,
            gender: user.gender,
            role: user.roleId,
            area: user.area,
            avatar: '',
            previewImgURL: imageBase64,
            action: CRUD_ACTIONS.EDIT,
            userEditId: user.id
        })
    }
    handleShowHidePassword = (event) => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })

    }
    render() {
        console.log('thang', this.state)

        let genders = this.state.genderArr;
        let roles = this.state.roleArr;
        let areas = this.state.areaArr;
        let isLoadingGenderReact = this.props.isLoadingGender;

        let { isTrueVal, email, password, firstName, lastName, phone, address, gender, area, role, avatar } = this.state;

        return (
            <div className='user-redux-container'>
                <div className='title' style={{ marginTop: '4%' }}>
                    Quản lý quản trị viên
                </div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='col-5 my-3' style={{ marginLeft: '-5%', fontSize: '20px', color: 'blue' }}>Thêm mới người dùng</div>
                        <div className='row'>
                            <div className='col-12'>{isLoadingGenderReact === true ? 'Loading genders' : ''}</div>
                            <div className='col-3'>
                                <label>Email</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
                                <input className='form-control' type="email"
                                    value={this.state.email}
                                    onChange={(event) => { this.onChangeInput(event, 'email') }}
                                    disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                /> <span className="text-black" style={{ fontSize: '12px', opacity: '0.7', fontStyle: 'italic' }}>{this.state.errorMail}</span>
                            </div>
                            <div className='col-3'>
                                <label>Mật khẩu</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
                                <div className='eye-password'>
                                    <input className='form-control'
                                        value={password}
                                        type={this.state.isShowPassword ? 'text' : 'password'}
                                        onChange={(event) => { this.onChangeInput(event, 'password') }}
                                        disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                    />
                                    <span
                                        onClick={() => { this.handleShowHidePassword() }}>
                                        <i className={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'} style={{ display: 'flex' }}></i>
                                    </span>
                                    <span className="text-black" style={{ fontSize: '12px', opacity: '0.7', fontStyle: 'italic' }} >{this.state.errorPassword}</span>
                                </div>
                            </div>
                            <div className='col-3'>
                                <label>Họ</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
                                <input className='form-control' type="text"
                                    value={firstName}
                                    onChange={(event) => { this.onChangeInput(event, 'firstName') }}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Tên</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
                                <input className='form-control' type="text"
                                    value={lastName}
                                    onChange={(event) => { this.onChangeInput(event, 'lastName') }}
                                />
                            </div>
                            <div className='col-3 mt-3'>
                                <label>Số điện thoại</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
                                <input className='form-control' type="text"
                                    value={phone}
                                    onChange={(event) => { this.onChangeInput(event, 'phone') }}
                                />
                            </div>
                            {/* <div className='col-3'>
                                <PhoneInput
                                    defaultCountry="RU"
                                    value={value}
                                    onChange={setValue} />
                            </div> */}

                            <div className='col-9 mt-3'>
                                <label>Địa chỉ</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
                                <input className='form-control' type="text"
                                    value={address}
                                    onChange={(event) => { this.onChangeInput(event, 'address') }}
                                />
                            </div>
                            <div className='col-3 mt-3'>
                                <label>Giới tính</label>
                                <select className='form-control'
                                    onChange={(event) => { this.onChangeInput(event, 'gender') }}
                                    value={gender}
                                >
                                    {genders && genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option key={index} value={item.key}>{item.valueVi}</option>
                                            )
                                        })
                                    }


                                </select>
                            </div>
                            <div className='col-3 mt-3'>
                                <label>Khu vực làm việc</label>
                                <select className='form-control'
                                    onChange={(event) => { this.onChangeInput(event, 'area') }}
                                    value={area}
                                >
                                    {areas && areas.length > 0 &&
                                        areas.map((item, index) => {
                                            return (
                                                <option key={index} value={item.key}>{item.valueVi}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='col-3 mt-3'>
                                <label>Quyền</label>
                                <select className='form-control'
                                    onChange={(event) => { this.onChangeInput(event, 'role') }}
                                    value={role}
                                >
                                    {roles && roles.length > 0 &&
                                        roles.map((item, index) => {
                                            return (
                                                <option key={index} value={item.key}>{item.valueVi}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='col-3 mt-3'>
                                <label>Ảnh đại diện</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
                                <div className='preview-img-container'>
                                    <input id="previewImg" type="file" hidden
                                        onChange={(event) => this.handleOnChangeImage(event)}

                                    />
                                    <label className='label-upload' htmlFor='previewImg'>Tải ảnh <i className='fas fa-upload'></i></label>
                                    <div className='preview-image'
                                        style={{ background: `url(${this.state.previewImgURL})` }}
                                        onClick={() => this.openPreviewImage()}
                                    >

                                    </div>
                                </div>

                            </div>
                            <div className='col-12 my-3' >
                                <button className={this.state.action === CRUD_ACTIONS.EDIT ? "btn btn-warning" : 'btn btn-primary'}
                                    onClick={() => this.handleSaveUser()} style={{ width: '200px' }}>
                                    {this.state.action === CRUD_ACTIONS.EDIT ? <p>Cập nhật</p> : <p>Lưu người dùng</p>}

                                </button>
                            </div>
                            <div className='col-12 mb-5'>
                                <TableManageUser
                                    handleEditUserFromParentKey={this.handleEditUserFromParent}
                                    action={this.state.action}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {this.state.isOpen === true &&
                    <Lightbox
                        mainSrc={this.state.previewImgURL}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        genderRedux: state.admin.genders,
        isLoadingGender: state.admin.isLoadingGender,
        roleRedux: state.admin.roles,
        areaRedux: state.admin.areas,
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        getAreaStart: () => dispatch(actions.fetchAreaStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        fetchUserRedux: () => dispatch(actions.fetchAllUserStart()),
        editAUserRedux: (data) => dispatch(actions.editAUser(data))
        //processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);