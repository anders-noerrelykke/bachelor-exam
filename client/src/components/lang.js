const lang = {
  dk: {
    string: 'dansk',
    misc: {
      login: 'log ind',
      logout: 'log ud',
      account: 'konto',
      danish: 'dansk',
      english: 'engelsk'
    },
    calendar: {
      messages: {
        allDay: 'Heldags',
        previous: 'Forrige',
        next: 'Næste',
        today: 'I dag',
        month: 'Måned',
        week: 'Uge',
        day: 'År',
        agenda: 'Agenda',
        date: 'Dato',
        time: 'Tid',
        event: 'Event', // Or anything you want
        showMore: total => `+ ${total} Flere events`
      },
      day: [
        'mandag',
        'tirsdag',
        'onsdag',
        'torsdag',
        'fredag',
        'lørdag',
        'søndag',
      ]
    }
  },
  en: {
    string: 'english',
    misc: {
      login: 'log in',
      logout: 'log out',
      account: 'account',
      danish: 'danish',
      english: 'english'
    },
    calendar: {
      messages: {
        allDay: 'All day',
        previous: 'Previous',
        next: 'Next',
        today: 'Today',
        month: 'Month',
        week: 'Week',
        day: 'Year',
        agenda: 'Agenda',
        date: 'Date',
        time: 'Time',
        event: 'Event', // Or anything you want
        showMore: total => `+ ${total} More events`
      }
    }
  }
}

export { lang };