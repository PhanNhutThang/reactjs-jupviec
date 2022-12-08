import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import './ServiceManage.scss';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import TableManageService from './TableServiceManage';
import { CRUD_ACTIONS, CommonUtils } from "../../utils";
class ServiceManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previewImgURL: '',
            isOpen: false,

            serviceName: '',
            introduce: '',
            unitPrice: '',
            avatar: '',

            action: '',
            serviceEditId: '',
        }

    }
    async componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.listServices !== this.props.listServices) {
            this.setState({
                serviceName: '',
                introduce: '',
                unitPrice: '',
                avatar: '',

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

    handleSaveService = () => {

        let { action } = this.state;
        if (action === CRUD_ACTIONS.CREATE) {
            // let isValid = this.checkValidateInput()
            // if (isValid === false) return;
            this.props.createNewService({
                serviceName: this.state.serviceName,
                introduce: this.state.introduce,
                unitPrice: this.state.unitPrice,
                avatar: this.state.avatar
            })
        }

        if (action === CRUD_ACTIONS.EDIT) {
            // let isValid = this.checkValidateEditInput()
            // if (isValid === false) return;
            this.props.editAServiceRedux({
                id: this.state.serviceEditId,
                serviceName: this.state.serviceName,
                introduce: this.state.introduce,
                unitPrice: this.state.unitPrice,
                avatar: this.state.avatar
            })
        }
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
            serviceName: e.target.value
        });
    }
    handleEditServiceFromParent = (service) => {

        let imageBase64 = '';
        if (service.image) {
            //imageBase64 = new Buffer(service.image, 'base64').toString('binary');
        }
        this.setState({
            serviceName: service.serviceName,
            introduce: service.introduce,
            unitPrice: service.unitPrice,
            avatar: '',
            previewImgURL: imageBase64,
            action: CRUD_ACTIONS.EDIT,
            serviceEditId: service.id
        })
    }

    render() {
        console.log('thang', this.state)

        let { isTrueVal, serviceName, introduce, unitPrice, avatar } = this.state;

        return (
            <div className='user-redux-container'>
                <div className='title' style={{ marginTop: '4%' }}>
                    Quản lý dịch vụ
                </div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='col-5 my-3' style={{ marginLeft: '-5%', fontSize: '20px', color: 'blue' }}>Thêm mới dịch vụ</div>
                        <div className='row'>
                            <div className='col-4'>
                                <label>Tên dịch vụ</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
                                <input className='form-control' type="text"
                                    value={this.state.serviceName}
                                    onChange={(event) => { this.onChangeInput(event, 'serviceName') }}
                                />
                            </div>
                            <div className='col-4'>
                                <label>Đơn giá</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
                                <input className='form-control' type="text"
                                    value={unitPrice}
                                    onChange={(event) => { this.onChangeInput(event, 'unitPrice') }}
                                />
                            </div>
                            <div className='col-12 mt-3' style={{ width: '50px' }}>
                                <label>Giới thiệu dịch vụ</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
                                <input className='form-control' type="text"
                                    value={introduce}
                                    onChange={(event) => { this.onChangeInput(event, 'introduce') }}
                                />
                            </div>
                            <div className='col-4 mt-3'>
                                <label>Ảnh dịch vụ</label>&ensp;<label style={{ color: 'red' }}>(*)</label>
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
                                    onClick={() => this.handleSaveService()} style={{ width: '200px' }}>
                                    {this.state.action === CRUD_ACTIONS.EDIT ? <p>Cập nhật dịch vụ</p> : <p>Lưu dịch vụ</p>}
                                </button>
                            </div>
                            <div className='col-12 mb-5'>
                                <TableManageService
                                    handleEditServiceFromParentKey={this.handleEditServiceFromParent}
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
        isLoadingGender: state.service.isLoadingGender,
        listServices: state.service.services
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createNewService: (data) => dispatch(actions.createNewService(data)),
        fetchServiceRedux: () => dispatch(actions.fetchAllServiceStart()),
        editAServiceRedux: (data) => dispatch(actions.editAService(data))
        //processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceManage);

