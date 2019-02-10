import React from 'react';
import { lang } from './lang';
import { firstUpper } from '../utils';

class Nav extends React.Component {

  componentDidMount() {
    console.log(this.props.currentUser);
  }

  langRef = React.createRef();

  logIn() {
    console.log("logged in")
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand">{this.props.clubname.toUpperCase()}</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse" aria-expanded="false">
            <ul className="nav navbar-nav">
              <select className="form-control" ref={this.langRef} onChange={() => {this.props.setLang(this.langRef.current.value)}}>
                {Object.keys(lang).map(key => <option key={key} value={key}>{firstUpper(lang[key].string)}</option>)}
              </select>
            </ul>
            {/* <ul className="nav navbar-nav">
              <li className="active"><a>Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a>Action</a></li>
                  <li><a>Another action</a></li>
                  <li><a>Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li className="dropdown-header">Nav header</li>
                  <li><a>Separated link</a></li>
                  <li><a>One more separated link</a></li>
                </ul>
              </li>
            </ul> */}
            <ul className="nav navbar-nav navbar-right">
              {this.props.currentUser
              ?
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.props.currentUser.firstname+' '+this.props.currentUser.lastname}<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="/account">{firstUpper(lang[this.props.selectedLang].misc.account)}</a></li>
                  <li><a href="/logout">{firstUpper(lang[this.props.selectedLang].misc.logout)}</a></li>
                </ul>
              </li>
              :
              <li><a onClick={this.logIn()}>{firstUpper(lang[this.props.selectedLang].misc.login)}</a></li>
              }
              {/* <li><a href="../navbar-static-top/">Static top</a></li>
              <li><a href="./">Fixed top <span className="sr-only">(current)</span></a></li> */}
            </ul>
          </div>
        </div>
      </nav>
    )
  }

}

export default Nav;