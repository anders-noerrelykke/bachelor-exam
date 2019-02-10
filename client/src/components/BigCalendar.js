import React from "react";
import Calendar from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("dk", {
  week: {
    dow: 1,
    doy: 1
  }
});

const localizer = Calendar.momentLocalizer(moment);

class BigCalendar extends React.Component {
  render() {
    return (
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={this.props.events}
        style={{ height: "80vh" }}
        messages={this.props.lang[this.props.selectedLang].calendar.messages}
      />
    );
  }
}

// class CustomToolbar extends Toolbar {
//   render() {
//     return (
//       <div className='rbc-toolbar'>
//         <span className="rbc-btn-group">
//           <button type="button" onClick={() => this.navigate('TODAY')} >today</button>
//           <button type="button" onClick={() => this.navigate('PREV')}>back</button>
//           <button type="button" onClick={() => this.navigate('NEXT')}>next</button>
//         </span>
//         <span className="rbc-toolbar-label">{this.props.label}</span>
//       </div>
//     );
//   }
// }

export default BigCalendar;
