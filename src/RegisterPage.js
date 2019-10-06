import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { registerUser } from './redux-token-auth-config'
import { SubmissionError } from 'redux-form'
import {connect} from 'react-redux';
import { Redirect } from 'react-router'


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className = "form-group">
    <label>{label}</label>
    <div>
      <input {...input} className = "form-control" placeholder={label} type={type}/>
      {touched && error && <span className = "text-danger">{error}</span>}
    </div>
  </div>
)


const SimpleForm = (props) => {
    const { handleSubmit, pristine, reset, submitting, dispatch, isSignedIn, error } = props


    if (isSignedIn) {
       return <Redirect to='/'/>;
    }

    const throw_error = (hash) => {
      Object.keys(hash).forEach(function (key) { 
        var value = hash[key]
        if(key !== "full_messages"){
          throw new SubmissionError({[key]: value, _error: "Login failed"})
        }
      })
    }
    const submitForm = (e) =>  {
      var email = e.email;
      var password_confirmation = e.password_confirmation
      var password = e.password
      var name = e.name

      return dispatch(registerUser({email:email, name:name, password:password, password_confirmation:password_confirmation})).then((e) => {}).catch((e) => { throw_error(e.response.data.errors)
      });
    }
  return (
    <div className="container">
      <div className = "offset-lg-2 col-lg-6">
        <form onSubmit={handleSubmit(submitForm)}>
          <div>
            <h2>Register</h2>
            <div>
              <Field className = "form-group" name="name" component={renderField} type="text" placeholder="Name" label="Name"/>
            </div>
            <div>
              <Field className = "form-group" name="email" component={renderField} type="email" placeholder="Email" label="Email"/>
            </div>
            <div>
                <Field className = "form-group" name="password" type="password" component={renderField} label="Password"/>
            </div>
            <div>
                <Field className = "form-group" name="password_confirmation" type="password" component={renderField} label="Password Confirmation"/>
            </div>
          </div>
          {error && <strong className = "text-danger">{error}</strong>}
          <div className = "form-group">
            <button type="submit" disabled={pristine || submitting} className = "btn btn-primary">Submit</button>
            <button type="button" className= "btn btn-default" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isSignedIn: state.reduxTokenAuth.currentUser.isSignedIn
})

const form =  reduxForm({
  form: 'simple'  // a unique identifier for this form
})(SimpleForm)

export default connect(mapStateToProps)(form);