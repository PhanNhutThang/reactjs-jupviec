import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import { emitter } from "../../utils/emitter";
import _ from 'lodash';
class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phone: ''
        }
    }

    componentDidMount() {
        let user = this.props.currentUser;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'hashcode',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
                phone: user.phone
            })
        }


        console.log('didmout edit modal', this.props.currentUser)
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

    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            this.props.editUser(this.state);
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
                <ModalHeader toggle={() => { this.toggle() }}>Edit a user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body '>
                        <div className='input-container'>
                            <label>Email</label>
                            <input
                                type="email"
                                onChange={(event) => { this.handOnChangeInput(event, "email") }}
                                value={this.state.email}
                                disabled
                            />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input
                                type="password"
                                onChange={(event) => { this.handOnChangeInput(event, "password") }}
                                value={this.state.password}
                                disabled
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
                                <option value="1">Quận 1</option>
                                <option value="2">Quận 2</option>
                                <option value="3">Quận 3</option>
                                <option value="4">Quận 4</option>
                                <option value="5">Quận 5</option>
                                <option value="6">Quận 6</option>
                                <option value="7">Quận 7</option>
                                <option value="8">Quận 8</option>
                                <option value="9">Quận 9</option>
                                <option value="10">Quận 10</option>
                                <option value="11">Quận 11</option>
                                <option value="12">Quận 12</option>
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
                        onClick={() => { this.handleSaveUser() }}>
                        Save changes
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);








