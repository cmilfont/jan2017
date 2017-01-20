const Router = require('./router.js');
const moment = require('moment');

class Notifications extends Router {

  defineRoutes() {
    const {app} = this;
    const passport = app.get('passport');
    app.get('/api/notifications', this.search.bind(this));
  }

  search(req, res) {
    const { user: { id: UserId } } = req;
    const { Training, Instructor, User, Participant } = this.models;

    Participant.findAll({
      attributes: ['id'],
      where: {
        status: false
      },
      include: [
        {
          model: User,
          attributes: ['id', 'name', 'imageUrl']
        },
        {
          model: Training,
          attributes: ['id'],
          where: {
            date: {
              $gt: moment().startOf('day').toDate(),
              $lt: moment().endOf('day').toDate()
            }
          },
          include: {
            model: Instructor,
            attributes: ['id'],
            where: {
              UserId
            }
          }
        }
      ]
    }).then(participants => (res.send(participants)));

  }


}

module.exports = Notifications;