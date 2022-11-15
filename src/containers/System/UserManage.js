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
//                                         <td>{item.khuvuc}</td>
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

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class ProductManage extends Component {

    state = {

    }

    componentDidMount() {
    }


    render() {
        return (
            <div className='user-redux-container'>
                <div className='title'>
                    Nhựt Thắng nè
                </div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='col-2 my-3'>Thêm mới người dùng</div>
                        <div className='row'>

                            <div className='col-3'>
                                <label>Email</label>
                                <input className='form-control' type="email" />
                            </div>
                            <div className='col-3'>
                                <label>Password</label>
                                <input className='form-control' type="password" />
                            </div>
                            <div className='col-3'>
                                <label>First Name</label>
                                <input className='form-control' type="text" />
                            </div>
                            <div className='col-3'>
                                <label>Last Name</label>
                                <input className='form-control' type="text" />
                            </div>
                            <div className='col-3'>
                                <label>Phone Number</label>
                                <input className='form-control' type="text" />
                            </div>
                            <div className='col-9'>
                                <label>Address</label>
                                <input className='form-control' type="text" />
                            </div>
                            <div className='col-3'>
                                <label>Gender</label>
                                <select className='form-control'>
                                    <option selected>chose...</option>
                                    <option>....</option>
                                </select>
                            </div>
                            <div className='col-3'>
                                <label>Area</label>
                                <select className='form-control'>
                                    <option selected>chose...</option>
                                    <option>....</option>
                                </select>
                            </div>
                            <div className='col-3'>
                                <label>RoleId</label>
                                <select className='form-control'>
                                    <option selected>chose...</option>
                                    <option>....</option>
                                </select>
                            </div>
                            <div className='col-3'>
                                <label>Image</label>
                                <input className='form-control' type="text" />
                            </div>
                            <div className='col-2 mt-3'>
                                <button className='btn btn-primary'>Lưu</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
