import React, { Component, PropTypes } from 'react';
import { Router, IndexRedirect, Route, Link, browserHistory } from 'react-router'
import Base from 'Base';
import Map from 'components/search/Map';
import Training from 'components/training/Wrapper';
import './css/App.css';

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
        // {
        //   id: 3,
        //   name: 'Adalto Jr',
        //   belt: 'no-belt',
        //   image: 'https://scontent-grt2-1.xx.fbcdn.net/v/t1.0-1/p160x160/1491763_1098130876893867_1379900795801254803_n.jpg?oh=d7378bc541c5d7cc17bd95d58e6458a5&oe=5921A5AC',
        // },
        {
          id: 2,
          name: 'Kete Martins Rufino',
          belt: 'blue-belt',
          status: true,
          image: 'https://scontent-grt2-1.xx.fbcdn.net/v/t1.0-1/p160x160/15822776_1171637442872273_9062461770959193095_n.jpg?oh=7799c91c8c1fe4253a8ea242a2fc0d9d&oe=58E68014',
        },
        {
          id: 1,
          name: 'Christiano Martins Milfont de Almeida',
          belt: 'brown-belt',
          status: true,
          image: 'https://scontent-grt2-1.xx.fbcdn.net/v/t1.0-1/p160x160/15741313_10154753144152667_3342021528357378604_n.jpg?oh=23725582f6ecf08c02b07890fea3351c&oe=5923CF5D',
          owner: true,
        },
      ],
    },
    user: {
      id: 1,
      name: 'Christiano Martins Milfont de Almeida',
      belt: 'brown-belt',
      status: true,
      image: 'https://scontent-grt2-1.xx.fbcdn.net/v/t1.0-1/p160x160/15741313_10154753144152667_3342021528357378604_n.jpg?oh=23725582f6ecf08c02b07890fea3351c&oe=5923CF5D',
      owner: true,
    },
    pendents: []
  }

  static childContextTypes = {
    treinar: PropTypes.func,
    getState: PropTypes.func,
    dispatch: PropTypes.func,
  }

  getChildContext() {
    return {
      treinar: this.treinar,
      getState: this.getState,
      dispatch: this.aprovar,
    }
  }

  getState = () => (this.state)

  treinar = ({ action, payload: user }) => {
    if (action === 'TREINAR') {
      const { pendents, training, training: { participants } } = this.state;
      this.setState({
        pendents: [
          ...pendents,
          user
        ],
        training: {
          ...training,
          participants: [
            ...participants,
            user,
          ]
        }
      });
    }
  }

  aprovar = (participantId) => {
    const { pendents: list, training, training: { participants } } = this.state;

    const pendents = list.filter(user => (user.id !== participantId) );
    participants.forEach(user => {
      if (user.id === participantId) {
        user.status = true;
      }
    });

    this.setState({
      pendents,
      training: {
        ...training,
        participants,
      }
    });
  }

  componentWillMount() {
    window.dispatch = this.treinar;
  }

  render() {
    const { training, user, pendents } = this.state;
    const count = pendents.length;
    const instructor = {
      id: 1,
      name: 'Christiano Martins Milfont de Almeida',
      belt: 'brown-belt',
      status: true,
      image: 'https://scontent-grt2-1.xx.fbcdn.net/v/t1.0-1/p160x160/15741313_10154753144152667_3342021528357378604_n.jpg?oh=23725582f6ecf08c02b07890fea3351c&oe=5923CF5D',
      owner: true,
    };

    return (
      <Router history={browserHistory}>
        <Route path="/" component={Base}>
          <IndexRedirect to="/training" />
          <Route path="training" component={Training}/>
          <Route path="search" component={Map}/>
        </Route>
      </Router>
    );
  }
}

export default App;
