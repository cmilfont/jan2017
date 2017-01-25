const Router = require('./router.js');
const moment = require('moment');

class Training extends Router {

  defineRoutes() {
    const {app} = this;
    app.get('/api/training/verify', this.verify.bind(this));
    app.post('/api/training/:id/apply', this.apply.bind(this));
    app.delete('/api/training/:id/dismiss', this.dismiss.bind(this));
    app.post('/api/training/:id/approve/:participantId', this.approve.bind(this));
    app.get('/api/training/:id', this.search.bind(this));
    app.post('/api/training', this.create.bind(this));
    app.put('/api/training/:id/cancel', this.cancel.bind(this));
    app.put('/api/training/:id', this.save.bind(this));
  }

  cancel(req, res) {
    const { id } = req.params;
    const { user: { id: UserId } } = req;
    const { Training } = this.models;
    //verificar se é o instrutor quem está cancelando mesmo
    Training.findById(id).then(training => {
      training.update({ canceled: true }).then(() => {
        res.send(training);
      })
    });
  }

  verify(req, res) {
    const { user: { id: UserId } } = req;
    const { Gym, Training, Instructor, User, Participant } = this.models;

    Participant.findOne({
      where: { UserId },
      include: [
        {
          model: Training,
          attributes: ['id', 'team', 'style', 'date', 'GymId', 'InstructorId'],
          required: true,
          where: {
            date: {
              $gt: moment().startOf('day').toDate(),
              $lt: moment().endOf('day').toDate()
            }
          },
          include: [
            { model: Gym, attributes: ['description'] },
            {
              model: Participant,
              attributes: ['id', 'status'],
              include: {
                model: User,
                attributes: ['id', 'name', 'imageUrl']
              }
            },
            {
              model: Instructor,
              attributes: ['id'],
              include: {
                model: User,
                attributes: ['id', 'name', 'imageUrl'],
              }
            }
          ]
        }
      ]
    }).then(participant => (res.send(participant)));

  }

  save(req, res) {

    const { Gym, Training, Instructor, User, Participant } = this.models;

    const { id } = req.params;
    const { user: { id: UserId }, body: { hours, minutes } } = req;
    const date = moment.tz("America/Fortaleza");
    const times = { minutes };
    if (hours) {
      times.hours = hours;
    }
    date.set(times);

    Training.findOne({
      where: { id },
      attributes: ['id', 'style', 'team', 'date'],
      include: [
        { model: Gym, attributes: ['description'] },
        {
          model: Participant,
          attributes: ['id', 'status'],
          include: {
            model: User,
            attributes: ['id', 'name', 'imageUrl']
          }
        },
        {
          model: Instructor,
          attributes: ['id'],
          include: {
            model: User,
            attributes: ['id', 'name', 'imageUrl'],
          }
        }
      ]
    }).then(training => (
      training.update({ date: date.toDate() }).then(() => {
        res.send(training);
      })
    ));

  }

  create(req, res) {
    const { Instructor, Training, Participant } = this.models;
    //validar se quem está criando realmente é instrutor
    const { user: { id: UserId }, body: { hours, minutes, GymId } } = req;
    const date = moment.tz("America/Fortaleza");
    const times = { minutes };
    if (hours) {
      times.hours = hours;
    }
    date.set(times);

    Instructor.findOne({
      attributes: ['id'],
      where: {
        UserId
      }
    }).then(instructor => {

      Training.create({
        InstructorId: instructor.id,
        GymId,
        style: "Luta Livre Brunocilla",
        team: "RGT",
        date: date.toDate()
      }).then(training => {

        Participant.create({ UserId, TrainingId: training.id, status: true })
          .then(() => {
            res.send(training);
          });

      });

    });

  }

  apply(req, res) {
    const { Participant } = this.models;
    const { user: { id: UserId }, params: { id: TrainingId } } = req;
    Participant.create({ UserId, TrainingId, status: false })
               .then((training) => {
                 res.send(training);
               });
  }

  dismiss(req, res) {
    const { Participant } = this.models;
    const { user: { id: UserId }, params: { id: TrainingId } } = req;
    Participant.findOne({
      where: { UserId, TrainingId }
    }).then(participant => {
      participant.destroy().then(() => {
        res.send({});
      })
    });
  }

  approve(req, res) {
    //validar se quem está aprovando realmente é instrutor
    const { user: { id: UserId }, params: { id: TrainingId, participantId } } = req;
    const { Participant } = this.models;
    Participant.findOne({
      where: { id: participantId },
    }).then(participant => {
      participant.update({ status: true }).then(() => {
        res.send(participant);
      });
    });
  }

  search(req, res) {
    const { id } = req.params;
    const { Gym, Training, Instructor, User, Participant } = this.models;

    Training.findOne({
      where: { id },
      attributes: ['id', 'style', 'team', 'date'],
      include: [
        { model: Gym, attributes: ['description'] },
        {
          model: Participant,
          attributes: ['id', 'status'],
          include: {
            model: User,
            attributes: ['id', 'name', 'imageUrl']
          }
        },
        {
          model: Instructor,
          attributes: ['id'],
          include: {
            model: User,
            attributes: ['id', 'name', 'imageUrl'],
          }
        }
      ]
    }).then(training => (
      res.send(training)
    ));

  }


}

module.exports = Training;
