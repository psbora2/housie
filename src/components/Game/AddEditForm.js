import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { updateGame, addGame} from '../../actions';
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import momentLocaliser from 'react-widgets-moment'
import moment from 'moment'
import 'react-widgets/dist/css/react-widgets.css'

momentLocaliser(moment)

const SimpleForm = (props) => {
  const { handleSubmit, reset, dispatch, error, game } = props
  const startTime = (!game ? new Date() : game.startTime)
  const submitForm = (e) =>  {
    if(game === undefined){
      var data = {startTime: e.startTime}
      dispatch(addGame(data)).then(() => {props.toggle()});
      return
    } else{
      dispatch(updateGame({startTime: e.startTime, id: game.id})).then(() => {props.toggle()});
    }
  }

  const renderDateTimePicker = function({ input: { onChange, value }, showTime, time }){
    return (<DateTimePicker
      onChange={onChange}
      format="YYYY-MM-DD HH:mm:ss Z"
      time={showTime}
      value={!value ? new Date(time) : new Date(value)}
    />)
  }


  return (
    <div className="container">
      <div className = "col-lg-12">
        <form onSubmit={handleSubmit(submitForm)}>
          <div>
            <div>
              <label>Start Time</label>
              <Field
                name="startTime"
                time = {startTime}
                showTime={true}
                component={renderDateTimePicker}
                value = {startTime}
              />
            </div>
          </div>
          {error && <strong className = "text-danger">{error}</strong>}
          <div className = "form-group">
            <button type="submit" className = "btn btn-primary">Submit</button>
            <button type="button" className= "btn btn-default" onClick={reset}>Clear Values</button>
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
  form: 'gameEditForm'  // a unique identifier for this form
})(SimpleForm)

export default connect(mapStateToProps)(form);