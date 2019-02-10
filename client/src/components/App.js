import React from "react";
import Nav from "./Nav";
import Calendar from "./BigCalendar";
import moment from "moment";
import { lang } from "./lang";

class App extends React.Component {
  state = {
    currentUser: {
      firstname: "Anders",
      lastname: "Nørrelykke"
    },
    events: [
      {
        start: new Date(moment()),
        end: new Date(moment().add(1, "days")),
        title: "J/70 Sailing"
      },
      {
        start: new Date(moment().add(1, "week")),
        end: new Date(moment().add(2, "weeks")),
        title: "Bjarnemissen"
      }
    ],

    selectedLang: "dk"
  };

  formats = {
    dayFormat: "MM-dd-yyyy"
  };

  setLang = value => {
    var selectedLang = { ...this.state.selectedLang };
    selectedLang = value;
    this.setState({ selectedLang });
  };

  render() {
    return (
      <React.Fragment>
        <Nav
          clubname={this.props.match.params.clubname}
          lang={lang}
          selectedLang={this.state.selectedLang}
          currentUser={this.state.currentUser}
          setLang={this.setLang}
        />
        <Calendar
          lang={lang}
          events={this.state.events}
          selectedLang={this.state.selectedLang}
          messages={this.messages}
          formats={this.formats}
        />
      </React.Fragment>
    );
  }
}

export default App;
