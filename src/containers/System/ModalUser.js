import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import { emitter } from "../../utils/emitter";
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phone: '',
            gender: '',
            roleId: '',
            khuvuc: ''
        }
        this.listenToEmitter();
    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
                phone: '',
                gender: '',
                roleId: '',
                khuvuc: ''
            })
        })
    }

    componentDidMount() {
    }
    toggle = () => {
        this.props.toggleFromParent();
    }
    handOnChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;

        this.setState({
            ...copyState
        });
    }
    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address', 'phone'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing prarameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleAddNewUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            this.props.createNewUser(this.state, 'abc');
        }
    }
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size="lg"

            >
                <ModalHeader toggle={() => { this.toggle() }}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body '>
                        <div className='input-container'>
                            <label>Email</label>
                            <input
                                type="email"
                                onChange={(event) => { this.handOnChangeInput(event, "email") }}
                                value={this.state.email}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input
                                type="password"
                                onChange={(event) => { this.handOnChangeInput(event, "password") }}
                                value={this.state.password}
                            />
                        </div>
                        <div className='input-container'>
                            <label>FirstName</label>
                            <input
                                type="text"
                                onChange={(event) => { this.handOnChangeInput(event, "firstName") }}
                                value={this.state.firstName}
                            />
                        </div>
                        <div className='input-container'>
                            <label>LastName</label>
                            <input
                                type="text"
                                onChange={(event) => { this.handOnChangeInput(event, "lastName") }}
                                value={this.state.lastName}
                            />
                        </div>
                        <div className='input-container max-width-input'>
                            <label>Address</label>
                            <input
                                type="text"
                                onChange={(event) => { this.handOnChangeInput(event, "address") }}
                                value={this.state.address}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Phone</label>
                            <input
                                type="text"
                                onChange={(event) => { this.handOnChangeInput(event, "phone") }}
                                value={this.state.phone}
                            />
                        </div>
                        <div>
                            <label>Area</label>
                            <Form.Select className='option-input'>
                                <option value="1">Qu???n 1</option>
                                <option value="2">Qu???n 2</option>
                                <option value="3">Qu???n 3</option>
                                <option value="4">Qu???n 4</option>
                                <option value="5">Qu???n 5</option>
                                <option value="6">Qu???n 6</option>
                                <option value="7">Qu???n 7</option>
                                <option value="8">Qu???n 8</option>
                                <option value="9">Qu???n 9</option>
                                <option value="10">Qu???n 10</option>
                                <option value="11">Qu???n 11</option>
                                <option value="12">Qu???n 12</option>
                            </Form.Select>
                        </div>
                        <div>
                            <label>Gender</label>
                            <Form.Select className='option-input'>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                            </Form.Select>
                        </div>
                        <div>
                            <label>RoleId</label>
                            <Form.Select className='option-input'>
                                <option value="1">Admin</option>
                            </Form.Select>
                        </div>
                    </div>


                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        className='px-3'
                        onClick={() => { this.handleAddNewUser() }}>
                        Add new
                    </Button>{' '}
                    <Button color="secondary" className='px-3' onClick={() => { this.toggle() }}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);








