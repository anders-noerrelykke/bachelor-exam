import React from 'react';
import Nav from './Nav'

class LoginForm extends React.Component {
  componentDidMount(){
    
  }

  render() {
    return (
      <React.Fragment>
        <Nav
          clubname={this.props.match.params.clubname}
        />
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username"/>
          </div>
          <div className="form-group">
            <label htmlFor="username">Password</label>
            <input type="text" className="form-control" name="password"/>
          </div>
          <button className="btn btn-primary">Login</button>

        </form>
      </React.Fragment>
    )
  }
}

export default LoginForm;