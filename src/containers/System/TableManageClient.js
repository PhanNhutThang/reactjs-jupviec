import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TableManageClient.scss';
import * as actions from "../../store/actions";

class TableManageClient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientsRedux: []

        }
    }
    componentDidMount() {
        this.props.fetchClientRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listClients !== this.props.listClients) {
            this.setState({
                clientsRedux: this.props.listClients
            })
        }
    }
    handleDeleteClient = (client) => {
        this.props.deleteAClientRedux(client.id);
    }
    handleEditClient = (client) => {
        this.props.handleEditClientFromParentKey(client)
    }

    render() {
        let arrClients = this.state.clientsRedux;
        return (
            <>
                <table id='TableManageClient'>
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Gender</th>
                            <th>Phone</th>
                            <th>RoleId</th>
                            <th>Action</th>
                        </tr>
                        {arrClients && arrClients.length > 0 &&
                            arrClients.map((item, index) => {
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
                                                            <button className="btn btn-danger" data-dismiss="modal" style={{ width: '40px' }} onClick={() => this.handleDeleteClient(item)}>OK</button>
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
                                            <td>{item.roleid}</td>
                                            <td>
                                                <button className='btn-edit' onClick={() => this.handleEditClient(item)}><i className='fas fa-pencil-alt'></i></button>
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
        listClients: state.client.clients
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchClientRedux: () => dispatch(actions.fetchAllClientStart()),
        deleteAClientRedux: (id) => dispatch(actions.deleteAClient(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageClient);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





