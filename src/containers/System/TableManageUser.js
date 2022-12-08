// import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
// import { connect } from 'react-redux';
// import './TableManageUser.scss';
// import * as actions from "../../store/actions";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import Form from 'react-bootstrap/Form';




// class TableManageUser extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             usersRedux: [],
//             isOpenModalUser: false,
//         }
//     }
//     componentDidMount() {
//         this.props.fetchUserRedux();
//     }

//     componentDidUpdate(prevProps, prevState, snapshot) {
//         if (prevProps.listUsers !== this.props.listUsers) {
//             this.setState({
//                 usersRedux: this.props.listUsers
//             })
//         }
//     }
//     handleDeleteUser = (user) => {
//         this.props.deleteAUserRedux(user.id);
//     }
//     handleEditUser = (user) => {
//         this.props.handleEditUserFromParentKey(user)
//     }

//     handleNewModal = () => {
//         this.setState({
//             isOpenModalUser: true,
//         })
//     }
//     toggleUserModal = () => {
//         this.setState({
//             isOpenModalUser: !this.state.isOpenModalUser,
//         })
//     }

//     render() {
//         let arrUsers = this.state.usersRedux;
//         return (
//             <>
//                 <table id='TableManageUser'>
//                     <tbody>
//                         <tr>
//                             <th>Email</th>
//                             <th>First Name</th>
//                             <th>Last Name</th>
//                             <th>Address</th>
//                             <th>Gender</th>
//                             <th>Phone</th>
//                             <th>Area</th>
//                             <th>RoleId</th>
//                             <th>Action</th>
//                         </tr>
//                         {arrUsers && arrUsers.length > 0 &&
//                             arrUsers.map((item, index) => {
//                                 return (

//                                     <tr key={index}>
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
//                                             <button className='btn-delete' onClick={() => this.handleDeleteUser(item)} ><i className='fas fa-trash'></i></button>
//                                             <button className='btn-delete' onClick={() => this.handleNewModal(item)} ><i className='fas fa-trash'></i></button>
//                                         </td>
//                                     </tr>
//                                 )
//                             })
//                         }

//                     </tbody>
//                 </table>
//                 <div class="container">
//                     <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
//                         Open modal
//                     </button>
//                     <div class="modal" id="myModal">
//                         <div class="modal-dialog">
//                             <div class="modal-content">
//                                 <div class="modal-header">
//                                     <h4 class="modal-title">Modal Heading</h4>
//                                     <button type="button" class="close" data-dismiss="modal">&times;</button>
//                                 </div>
//                                 <div class="modal-body">
//                                     Modal body..
//                                 </div>
//                                 <div class="modal-footer">
//                                     <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </>

//         );
//     }

// }

// const mapStateToProps = state => {
//     return {
//         listUsers: state.admin.users
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchUserRedux: () => dispatch(actions.fetchAllUserStart()),
//         deleteAUserRedux: (id) => dispatch(actions.deleteAUser(id))
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss';
import * as actions from "../../store/actions";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Form from 'react-bootstrap/Form';




class TableManageUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usersRedux: [],

        }
    }
    componentDidMount() {
        this.props.fetchUserRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                usersRedux: this.props.listUsers
            })
        }
    }
    handleDeleteUser = (user) => {
        this.props.deleteAUserRedux(user.id);
    }
    handleEditUser = (user) => {
        this.props.handleEditUserFromParentKey(user)
    }



    render() {
        let arrUsers = this.state.usersRedux;
        return (
            <>
                <table id='TableManageClient'>
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <th>Họ</th>
                            <th>Tên</th>
                            <th>Địa chỉ</th>
                            <th>Giới tính</th>
                            <th>Số điện thoại</th>
                            <th>Khu vực làm việc</th>
                            <th>Quyền</th>
                            <th></th>
                        </tr>
                        {arrUsers && arrUsers.length > 0 &&
                            arrUsers.map((item, index) => {
                                return (
                                    <>
                                        <div class="container">
                                            <div class="modal" id="myModal">
                                                <div class="modal-dialog">
                                                    <div class="modal-content" style={{ marginTop: '35%', width: '80%', marginLeft: '20%' }}>
                                                        <div class="modal-header">
                                                            <div class="modal-title">&#10071; Cảnh báo </div>
                                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                        </div>
                                                        <div class="modal-body">
                                                            Bạn có chắc chắn xoá người dùng này không ?
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button className="btn btn-danger" data-dismiss="modal" style={{ width: '40px' }} onClick={() => this.handleDeleteUser(item)}>OK</button>
                                                            <button type="button" class="btn btn-danger" data-dismiss="modal" style={{ width: '60px' }}>CLOSE</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <tr key={index}>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>{item.gender}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.area}</td>
                                            <td>{item.roleId}</td>
                                            <td>
                                                <button className='btn-edit' onClick={() => this.handleEditUser(item)}><i className='fas fa-pencil-alt'></i></button>
                                                {/* <button className='btn-delete' onClick={() => this.handleDeleteUser(item)} ><i className='fas fa-trash'></i></button> */}
                                                <button className="btn-delete" data-toggle="modal" data-target="#myModal">
                                                    <i className='fas fa-trash'></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUserStart()),
        deleteAUserRedux: (id) => dispatch(actions.deleteAUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





