import React from 'react';
import EventList from './EventList';

class App extends React.Component {
  state = {
    events: [
      { id: 1, name: 'Trail Biking', organizer: 'John Doe', type: 'Sport' },
      { id: 2, name: 'Basketball Games', organizer: 'Jane Smith', type: 'Sport' },
    ],
  };

  handleJoinRequest = eventId => {
    alert(`Request to join event ${eventId} sent.`);
  };

  render() {
    return (
      <div>
        <header>
          <h1>Metro Events</h1>
        </header>
        <EventList events={this.state.events} onJoinRequest={this.handleJoinRequest} />
      </div>
    );
  }
}

export default App;
