const Router = require('./router.js');
const moment = require('moment');

class Search extends Router {

  defineRoutes() {
    const {app} = this;
    app.get('/api/search', this.search.bind(this));
  }

  search(req, res) {

    const { Gym, Training, Instructor, User } = this.models;

    Gym.findAll({
      include: [
        {
          model: Training,
          attributes: ['id', 'team', 'style', 'date', 'canceled'],
          required: false,
          where: {
            date: {
              $gt: moment().startOf('day').toDate(),
              $lt: moment().endOf('day').toDate()
            }
          },
          include: {
            model: Instructor,
            attributes: ['id'],
            include: {
              model: User,
              attributes: ['id', 'name'],
            }
          }
        },
        {
          model: Instructor,
          attributes: ['id', 'UserId'],
          required: false
        }
      ]
    }).then(list => (res.send(list)));

  }


}

module.exports = Search;
