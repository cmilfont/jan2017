import actions from 'api/actions';

export default (state = [], { type, payload }) => {
  if (type === actions.gym.requestSuccess) {
    // const gyms = [{
    //   id: 1,
    //   lat: -3.7345753,
    //   lng: -38.4697248,
    //   description: 'Central do Corpo',
    //   address: 'Av. Luís Viêira, 920 - Vicente Pinzon, Fortaleza - CE, 60177-250',
    //   tel: '(85) 2181-1715',
    //   site: 'http://centraldocorpo.com.br',
    //   trainings: [
    //     { id: 101, team: 'RGT', style: 'Luta Livre', date: '09/01/2017', hour: '12:00', instructor: 'Christiano Milfont' },
    //     { id: 102, team: 'RGT-Caio Terra', style: 'Jiujitsu', date: '09/01/2017', hour: '19:00', instructor: 'Mylena Silva' },
    //     { id: 103, team: 'RGT-Caio Terra', style: 'Jiujitsu', date: '09/01/2017', hour: '20:00', instructor: 'Filipe Matos' },
    //   ]
    // }, {
    //   id: 2,
    //   lat: -3.8286273,
    //   lng: -38.4902006,
    //   description: 'Academia O-Positivo',
    //   address: 'Rua Cesário Lange, 745 - Messejana, Fortaleza - CE',
    //   tel: '',
    //   site: '',
    //   trainings: [
    //     { id: 104, team: 'RGT-Caio Terra', style: 'Jiujitsu', date: '09/01/2017', hour: '20:00', instructor: 'Armando Cavalcante' },
    //   ]
    // }]

    /*

    training
      style
      gym
      team
      date
      hour
      instructorId
      styleId

     */
    return payload;
  }
  return state;
}
