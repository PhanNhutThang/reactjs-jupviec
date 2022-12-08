import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TableServiceManage.scss';
import * as actions from "../../store/actions";


class TableManageService extends Component {

    constructor(props) {
        super(props);
        this.state = {
            servicesRedux: []

        }
    }
    componentDidMount() {
        this.props.fetchServiceRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listServices !== this.props.listServices) {
            this.setState({
                servicesRedux: this.props.listServices
            })
        }
    }
    handleDeleteService = (service) => {
        this.props.deleteAServiceRedux(service.id);
    }
    handleEditService = (service) => {
        this.props.handleEditServiceFromParentKey(service)
    }

    render() {
        let arrServices = this.state.servicesRedux;
        return (
            <>
                <table id='TableManageService'>
                    <tbody>
                        <tr>
                            <th>Tên dịch vụ</th>
                            <th>Giới thiệu</th>
                            <th>Đơn giá</th>
                            <th></th>
                        </tr>
                        {arrServices && arrServices.length > 0 &&
                            arrServices.map((item, index, id) => {
                                return (
                                    // <>
                                    // <div class="container">
                                    //     <div class="modal" id="myModal">
                                    //         <div class="modal-dialog">
                                    //             <div class="modal-content" style={{ marginTop: '35%', width: '80%', marginLeft: '20%' }}>
                                    //                 <div class="modal-header">
                                    //                     <div class="modal-title">&#10071; Cảnh báo </div>
                                    //                     <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    //                 </div>
                                    //                 <div class="modal-body">
                                    //                     Bạn có chắc chắn xoá dịch vụ này không ?
                                    //                 </div>
                                    //                 <div class="modal-footer">
                                    //                     {/* <button className="btn-delete" onClick={() => this.handleDeleteService(item)}><i className='fas fa-trash'></i></button> */}
                                    //                     <button className="btn btn-danger" data-dismiss="modal" style={{ width: '40px' }} onClick={() => this.handleDeleteService(item)}>OK</button>
                                    //                     <button type="button" class="btn btn-danger" data-dismiss="modal" style={{ width: '60px' }}>CLOSE</button>
                                    //                 </div>
                                    //             </div>   
                                    //         </div>
                                    //     </div>
                                    // </div>
                                    <tr key={index}>
                                        <td>{item.serviceName}</td>
                                        <td>{item.introduce}</td>
                                        <td>{item.unitPrice}</td>
                                        <td>
                                            <button className='btn-edit' onClick={() => this.handleEditService(item)}><i className='fas fa-pencil-alt'></i></button>
                                            <button className="btn-delete" onClick={() => this.handleDeleteService(item)}><i className='fas fa-trash'></i></button>
                                            {/* <button className="btn-delete" data-toggle="modal" data-target="#myModal">
                                                <i className='fas fa-trash'></i>
                                            </button> */}
                                        </td>
                                    </tr>
                                    // </>
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
        listServices: state.service.services
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchServiceRedux: () => dispatch(actions.fetchAllServiceStart()),
        deleteAServiceRedux: (id) => dispatch(actions.deleteAService(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageService);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





