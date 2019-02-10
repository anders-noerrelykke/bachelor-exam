import React from 'react'

class SignUpForm extends React.Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="username">Club name</label>
          <input type="text" className="form-control" name="username"/>
          <hr/>
          <button className="btn btn-primary">Sign up</button>
        </div>
      </form>
    )
  }
}

export default SignUpForm; 