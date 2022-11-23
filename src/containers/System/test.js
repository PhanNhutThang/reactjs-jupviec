// import React from "react";

// class FormEmailComponent extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             email: "",
//             isvalid: false,
//             message: "",
//         };
//         this.onChange = this.onChange.bind(this);
//     }

//     onChange(e) {
//         this.setState({
//             email: e.target.value,
//         });
//     }

//     emailValidation() {
//         const regex =
//             /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//         return !(!this.state.email || regex.test(this.state.email) === false);
//     }

//     onSubmit() {
//         const isEmailValid = this.emailValidation();
//         this.setState(
//             {
//                 isvalid: isEmailValid,
//                 message: isEmailValid
//                     ? "Email Address is Valid!"
//                     : "Email Address not valid!",
//             },
//             () => this.props.onEmailSubmit(this.state)
//         );

//         // Check if email is valid
//         if (this.state.isvalid) {
//             console.log(this.state);
//         }
//     }

//     render() {
//         const messageTemplate = this.state.message ? (
//             <div
//                 className={"alert alert-" + (this.state.isvalid ? "success" : "danger")}
//                 role="alert"
//             >
//                 {this.state.message}
//             </div>
//         ) : (
//             ""
//         );

//         return (
//             <div className="child-component">
//                 <div className="form-group mb-3">
//                     <label>
//                         <strong>Email</strong>
//                     </label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={this.state.email}
//                         onChange={this.onChange}
//                         className="form-control"
//                     />
//                 </div>

//                 <div className="d-grid">
//                     <button
//                         type="submit"
//                         className="btn btn-primary"
//                         onClick={() => this.onSubmit()}
//                     >
//                         Submit
//                     </button>
//                 </div>
//                 <br />
//                 {messageTemplate}
//             </div>
//         );
//     }
// }

// export default FormEmailComponent;



/////////////////////////////////////////////////////////////////////////////////////
// 
///////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import { sendFormData } from '../services/';

// class Signup extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isDisabled: true
//         }
//         this.submitForm = this.submitForm.bind(this);
//     }
//     validateEmail(email) {
//         const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
//         const result = pattern.test(email);
//         if (result === true) {
//             this.setState({
//                 emailError: false,
//                 email: email
//             })
//         } else {
//             this.setState({
//                 emailError: true
//             })
//         }
//     }
//     handleChange(e) {
//         const target = e.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;
//         this.setState({
//             [name]: value
//         });
//         if (e.target.name === 'firstname') {
//             if (e.target.value === '' || e.target.value === null) {
//                 this.setState({
//                     firstnameError: true
//                 })
//             } else {
//                 this.setState({
//                     firstnameError: false,
//                     firstName: e.target.value
//                 })
//             }
//         }
//         if (e.target.name === 'lastname') {
//             if (e.target.value === '' || e.target.value === null) {
//                 this.setState({
//                     lastnameError: true
//                 })
//             } else {
//                 this.setState({
//                     lastnameError: false,
//                     lastName: e.target.value
//                 })
//             }
//         }
//         if (e.target.name === 'email') {
//             this.validateEmail(e.target.value);
//         }
//         if (e.target.name === 'password') {
//             if (e.target.value === '' || e.target.value === null) {
//                 this.setState({
//                     passwordError: true
//                 })
//             } else {
//                 this.setState({
//                     passwordError: false,
//                     password: e.target.value
//                 })
//             }
//         }
//         if (this.state.firstnameError === false && this.state.lastnameError === false &&
//             this.state.emailError === false && this.state.passwordError === false) {
//             this.setState({
//                 isDisabled: false
//             })
//         }
//     }
//     submitForm(e) {
//         e.preventDefault();
//         const data = {
//             firstName: this.state.firstName,
//             lastName: this.state.lastName,
//             email: this.state.email,
//             password: this.state.password
//         }
//         sendFormData(data).then(res => {
//             if (res.status === 200) {
//                 alert(res.data);
//                 this.props.history.push('/');
//             } else {

//             }
//         });
//     }
//     render() {
//         return (
//             <div className="container">
//                 <div className="card card-login mx-auto mt-5">
//                     <div className="card-header">Register here</div>
//                     <div className="card-body">
//                         <form id="signup-form">
//                             <div className="form-group">
//                                 <div className="form-label-group">
//                                     <input type="text" id="firstname" name="firstname" className="form-control" placeholder="Enter firstname" onChange={(e) => { this.handleChange(e) }} />
//                                     <label htmlFor="firstname">firstname</label>
//                                     {this.state.firstnameError ? <span style={{ color: "red" }}>Please Enter some value</span> : ''}
//                                 </div>
//                             </div>
//                             <div className="form-group">
//                                 <div className="form-label-group">
//                                     <input type="text" id="lastname" name="lastname" className="form-control" placeholder="Enter lastname" onChange={(e) => { this.handleChange(e) }} />
//                                     <label htmlFor="lastname">lastname</label>
//                                     {this.state.lastnameError ? <span style={{ color: "red" }}>Please Enter some value</span> : ''}
//                                 </div>
//                             </div>
//                             <div className="form-group">
//                                 <div className="form-label-group">
//                                     <input type="email" id="email" name="email" className="form-control" placeholder="Enter your email" onChange={(e) => { this.handleChange(e) }} />
//                                     <label htmlFor="email">email</label>
//                                     {this.state.emailError ? <span style={{ color: "red" }}>Please Enter valid email address</span> : ''}
//                                 </div>
//                             </div>
//                             <div className="form-group">
//                                 <div className="form-label-group">
//                                     <input type="password" id="password" name="password" className="form-control" placeholder="Password" onChange={(e) => { this.handleChange(e) }} />
//                                     <label htmlFor="password">Password</label>
//                                     {this.state.passwordError ? <span style={{ color: "red" }}>Please enter some   value</span> : ''}
//                                 </div>
//                             </div>
//                             <button className="btn btn-primary btn-block" disabled={this.state.isDisabled} onClick={this.submitForm}>Signup</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
// export default Signup;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';

// class DemoForm extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             input: {},
//             errors: {}
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         let input = this.state.input;
//         input[event.target.name] = event.target.value;

//         this.setState({
//             input
//         });
//     }

//     handleSubmit(event) {
//         event.preventDefault();

//         if (this.validate()) {
//             console.log(this.state);

//             let input = {};
//             input["name"] = "";
//             input["email"] = "";
//             input["comment"] = "";
//             this.setState({ input: input });

//             alert('Demo Form is submited');
//         }
//     }

//     validate() {
//         let input = this.state.input;
//         let errors = {};
//         let isValid = true;

//         if (!input["name"]) {
//             isValid = false;
//             errors["name"] = "Please enter your name.";
//         }

//         if (!input["email"]) {
//             isValid = false;
//             errors["email"] = "Please enter your email Address.";
//         }

//         if (typeof input["email"] !== "undefined") {

//             var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//             if (!pattern.test(input["email"])) {
//                 isValid = false;
//                 errors["email"] = "Please enter valid email address.";
//             }
//         }

//         if (!input["comment"]) {
//             isValid = false;
//             errors["comment"] = "Please enter your comment.";
//         }

//         this.setState({
//             errors: errors
//         });

//         return isValid;
//     }

//     render() {
//         return (
//             <div>
//                 <h1>React Form Validation Example - ItSolutionStuff.com</h1>
//                 <form onSubmit={this.handleSubmit}>

//                     <div class="form-group">
//                         <label for="name">Name:</label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={this.state.input.name}
//                             onChange={this.handleChange}
//                             class="form-control"
//                             placeholder="Enter name"
//                             id="name" />

//                         <div className="text-danger">{this.state.errors.name}</div>
//                     </div>

//                     <div class="form-group">
//                         <label for="email">Email Address:</label>
//                         <input
//                             type="text"
//                             name="email"
//                             value={this.state.input.email}
//                             onChange={this.handleChange}
//                             class="form-control"
//                             placeholder="Enter email"
//                             id="email" />

//                         <div className="text-danger">{this.state.errors.email}</div>
//                     </div>

//                     <div class="form-group">
//                         <label for="comment">Comment:</label>
//                         <textarea
//                             name="comment"
//                             value={this.state.input.comment}
//                             onChange={this.handleChange}
//                             placeholder="Enter comment"
//                             class="form-control" />

//                         <div className="text-danger">{this.state.errors.comment}</div>
//                     </div>

//                     <input type="submit" value="Submit" class="btn btn-success" />
//                 </form>
//             </div>
//         );
//     }
// }

// export default DemoForm;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
const emailState = {
    email: '',
    error: ''
}
class FormComponent extends React.Component {

    constructor() {
        super();
        this.state = emailState;
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({
            email: e.target.value
        });
    }
    emailValidation() {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!this.state.email || regex.test(this.state.email) === false) {
            this.setState({
                error: "Email is not valid"
            });
            return false;
        }
        return true;
    }
    onSubmit() {
        if (this.emailValidation()) {
            console.log(this.state);
            this.setState(emailState);
        }
    }
    render() {
        return (
            <div>
                <div className="form-group mb-3">
                    <label><strong>Email</strong></label>
                    <input type="email" name="email" value={this.state.email} onChange={this.onChange} className="form-control" />
                    <span className="text-danger">{this.state.error}</span>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-dark" onClick={() => this.onSubmit()}>Submit</button>
                </div>
            </div>
        )
    }
}

export default FormComponent;

// for (let i = 0; i < arrCheck.length; i++) {
//     const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/i;
//     if (!this.state.phone || regex.test(this.state.phone) === false) {
//         //isValid = false;
//         //alert('Bạn vui lòng kiểm tra: ' + 'phone number')
//         this.setState({
//             errorPhone: "Số điện thoại không tồn tại"
//         });
//         break;
//     }
//     break;
// }

// for (let i = 0; i < arrCheck.length; i++) {
        //     const regex = /^([a-zA-Z0-9_\.\-\+])+\@gmail+\.+com$/i;
        //     if (!this.state.email || regex.test(this.state.email) === false) {
        //         isValid = false;
        //         //alert('Bạn vui lòng kiểm tra: ' + 'gmail' + '\n' + 'Ví dụ: Example123@gmail.com')
        //         break;
        //     }
        //     break;
        // }