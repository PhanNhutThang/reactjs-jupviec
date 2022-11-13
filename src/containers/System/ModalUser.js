import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Form from 'react-bootstrap/Form';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''

        }
    }
    componentDidMount() {
    }
    toggle = () => {
        this.props.toggleFromParent();
    }
    handOnChangeInput = (event) => {
        console.log(event.target.value)
    }
    render() {
        console.log('check child props', this.props);
        console.log('check child open modal', this.props.isOpen)
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size="lg"
                centered
            >
                <ModalHeader toggle={() => { this.toggle() }}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body '>
                        <div className='input-container'>
                            <label>Email</label>
                            <input type="email" onChange={(event) => { this.handOnChangeInput(event) }} />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input type="password" />
                        </div>
                        <div className='input-container'>
                            <label>FirstName</label>
                            <input type="text" />
                        </div>
                        <div className='input-container'>
                            <label>LastName</label>
                            <input type="text" />
                        </div>
                        <div className='input-container max-width-input'>
                            <label>Address</label>
                            <input type="text" />
                        </div>
                        <div className='input-container'>
                            <label>Phone</label>
                            <input type="text" />
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
                    <Button color="primary" className='px-3' onClick={() => { this.toggle() }}>
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








