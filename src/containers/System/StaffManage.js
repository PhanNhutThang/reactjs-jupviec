// import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
// import { connect } from 'react-redux';
// class StaffManage extends Component {

//     state = {

//     }

//     componentDidMount() {
//     }


//     render() {
//         return (
//             <div className='user-redux-container'>
//                 <div className='title'>
//                     Quản lý nhân viên
//                 </div>
//                 <div className='user-redux-body'>
//                     <div className='container'>
//                         <div className='row'>

//                         </div>
//                     </div>
//                 </div>

//             </div>

//         )
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

// export default connect(mapStateToProps, mapDispatchToProps)(StaffManage);
import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import './StaffManage.scss';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import TableStaffManage from './TableStaffManage';
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
const salaryState = {
    salary: '',
    errorsalary: ''
}
class StaffManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
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
            avatar: '',
            salary: '',
            // star: '',
            // evaluate: '',
            action: '',
            staffEditId: '',
        }
        this.state = emailState;
        this.state = passwordSate;
        this.state = phoneState;
        this.state = firstNameState;
        this.state = lastNameState;
        this.state = addRessState;
        this.state = salaryState;

    }
    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getRoleStart();
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

        if (prevProps.listStaffs !== this.props.listStaffs) {
            let arrGenders = this.props.genderRedux;
            let arrRoles = this.props.roleRedux;
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phone: '',
                address: '',
                salary: '',
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : '',
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : '',
                avatar: '',
                // star: '',
                // evaluate: '',
                errorMail: '',
                errorPassword: '',
                errorPhone: '',
                errorfirstName: '',
                errorlastName: '',
                erroraddRess: '',
                errorsalary: '',
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

    handleSaveStaff = () => {

        let { action } = this.state;
        if (action === CRUD_ACTIONS.CREATE) {
            let isValid = this.checkValidateInput()
            if (isValid === false) return;
            this.props.createNewStaff({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                gender: this.state.gender,
                phone: this.state.phone,
                roleid: this.state.role,
                salary: this.state.salary,
                avatar: this.state.avatar,
                // star: this.state.star,
                // evaluate: this.state.evaluate,
            })
        }

        if (action === CRUD_ACTIONS.EDIT) {
            //this.props.fetchUserRedux();
            let isValid = this.checkValidateEditInput()
            if (isValid === false) return;
            this.props.editAStaffRedux({
                id: this.state.staffEditId,
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                gender: this.state.gender,
                phone: this.state.phone,
                roleid: this.state.role,
                salary: this.state.salary,
                avatar: this.state.avatar,
                // star: this.state.star,
                // evaluate: this.state.evaluate,
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
            const regex = /^([a-zA-Z0-9_\.\-\+])+\@gmail+\.+com$/i;
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
                    errorMail: "Bạn vui lòng kiểm tra email: VD:Example123@gmail.com"
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
    }
    handleEditStaffFromParent = (staff) => {

        let imageBase64 = '';
        if (staff.image) {

            // imageBase64 = new Buffer(staff.image, 'base64').toString('binary');

        }
        this.setState({
            email: staff.email,
            password: '**********',
            firstName: staff.firstName,
            lastName: staff.lastName,
            phone: staff.phone,
            address: staff.address,
            gender: staff.gender,
            role: staff.roleid,
            avatar: '',
            salary: staff.salary,
            previewImgURL: imageBase64,
            action: CRUD_ACTIONS.EDIT,
            // star: staff.star,
            // evaluate: staff.evaluate,
            staffEditId: staff.id
        })
    }

    render() {
        console.log('thang', this.state)

        let genders = this.state.genderArr;
        let roles = this.state.roleArr;
        let isLoadingGenderReact = this.props.isLoadingGender;

        let { isTrueVal, email, password, firstName, lastName, phone, address, gender, role, salary, avatar } = this.state;

        return (
            <div className='user-redux-container'>
                <div className='title'>
                    Quản lý Nhân Viên
                </div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='col-2 my-3'>Thêm mới nhân viên</div>
                        <div className='row'>
                            <div className='col-12'>{isLoadingGenderReact === true ? 'Loading genders' : ''}</div>
                            <div className='col-3'>
                                <label>Email</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
                                <input className='form-control' type="email"
                                    value={this.state.email}
                                    onChange={(event) => { this.onChangeInput(event, 'email') }}
                                    disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                /> <span className="text-danger">{this.state.errorMail}</span>
                            </div>
                            <div className='col-3'>
                                <label>Password</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
                                <input className='form-control' type="text"
                                    value={password}
                                    onChange={(event) => { this.onChangeInput(event, 'password') }}
                                    disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                /><span className="text-danger">{this.state.errorPassword}</span>
                            </div>
                            <div className='col-3'>
                                <label>First Name</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
                                <input className='form-control' type="text"
                                    value={firstName}
                                    onChange={(event) => { this.onChangeInput(event, 'firstName') }}
                                /><span className="text-danger">{this.state.errorfirstName}</span>
                            </div>
                            <div className='col-3'>
                                <label>Last Name</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
                                <input className='form-control' type="text"
                                    value={lastName}
                                    onChange={(event) => { this.onChangeInput(event, 'lastName') }}
                                /><span className="text-danger">{this.state.errorlastName}</span>
                            </div>
                            <div className='col-3 mt-3'>
                                <label>Phone Number</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
                                <input className='form-control' type="text"
                                    value={phone}
                                    onChange={(event) => { this.onChangeInput(event, 'phone') }}
                                /><span className="text-danger">{this.state.errorPhone}</span>
                            </div>
                            <div className='col-9 mt-3'>
                                <label>Address</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
                                <input className='form-control' type="text"
                                    value={address}
                                    onChange={(event) => { this.onChangeInput(event, 'address') }}
                                /><span className="text-danger">{this.state.erroraddRess}</span>
                            </div>
                            <div className='col-3 mt-3'>
                                <label>Gender</label>
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
                                <label>RoleId</label>
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
                                <label>Salary</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
                                <input className='form-control' type="text"
                                    value={salary}
                                    onChange={(event) => { this.onChangeInput(event, 'salary') }}
                                /><span className="text-danger">{this.state.errorsalary}</span>
                            </div>
                            <div className='col-3 mt-3'>
                                <label>Image</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
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
                                    onClick={() => this.handleSaveStaff()} style={{ width: '200px' }}>
                                    {this.state.action === CRUD_ACTIONS.EDIT ? <p>Cập nhật nhân viên</p> : <p>Lưu nhân viên mới</p>}

                                </button>
                            </div>
                            <div className='col-12 mb-5'>
                                <TableStaffManage
                                    handleEditStaffFromParentKey={this.handleEditStaffFromParent}
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
        genderRedux: state.staff.genders,
        isLoadingGender: state.staff.isLoadingGender,
        roleRedux: state.staff.roles,
        listStaffs: state.staff.staffs
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewStaff: (data) => dispatch(actions.createNewStaff(data)),
        fetchStaffRedux: () => dispatch(actions.fetchAllStaffStart()),
        editAStaffRedux: (data) => dispatch(actions.editAStaff(data))
        //processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StaffManage);