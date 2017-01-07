import React, { Component, PropTypes } from 'react';
import Training from 'components/training/Training';
import './App.css';

class App extends Component {

  state = {
    training: {
      gym: 'Central do Corpo Dunas',
      image: 'https://scontent-gru2-1.cdninstagram.com/t51.2885-15/e35/12276898_527131300782718_275278123_n.jpg?ig_cache_key=MTEyNjkwODg1ODc0MzYwNzIxNg%3D%3D.2',
      team: 'RGT',
      style: 'Luta Livre',
      date: 'May 24, 2016',
      hour: '12:00',
      participants: [
        {
          id: 2,
          name: 'Kete Martins Rufino',
          belt: 'blue-belt',
          image: 'https://scontent-grt2-1.xx.fbcdn.net/v/t1.0-1/p160x160/15822776_1171637442872273_9062461770959193095_n.jpg?oh=7799c91c8c1fe4253a8ea242a2fc0d9d&oe=58E68014',
        },
        {
          id: 1,
          name: 'Christiano Martins Milfont de Almeida',
          belt: 'brown-belt',
          image: 'https://scontent-grt2-1.xx.fbcdn.net/v/t1.0-1/p160x160/15741313_10154753144152667_3342021528357378604_n.jpg?oh=23725582f6ecf08c02b07890fea3351c&oe=5923CF5D',
          owner: true,
        },
      ],
    },
    user: {
      id: 3,
      name: 'Adalto Jr',
      belt: 'no-belt',
      image: 'https://scontent-grt2-1.xx.fbcdn.net/v/t1.0-1/p160x160/1491763_1098130876893867_1379900795801254803_n.jpg?oh=d7378bc541c5d7cc17bd95d58e6458a5&oe=5921A5AC',
    }
  }

  static childContextTypes = {
    treinar: PropTypes.func,
  }

  getChildContext() {
    return {
      treinar: this.treinar
    }
  }

  treinar = () => {
    const { user, training, training: { participants } } = this.state;
    this.setState({
      ...this.state,
      training: {
        ...training,
        participants: [
          ...participants,
          user,
        ]
      }
    });
  }

  render() {
    const { training } = this.state;
    return (
      <div className="App">
        <Training training={training} />
      </div>
    );
  }
}

export default App;
