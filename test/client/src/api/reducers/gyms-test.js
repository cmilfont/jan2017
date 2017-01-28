import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';
import actions from 'api/actions.js';
import gyms from 'api/reducers/gyms';

describe('Reducer: gyms', function() {

  beforeEach(() => {
    this.payload = [{
      description: 'Central do Corpo',
    }];
    this.action = {
      type: actions.gym.requestSuccess,
      payload: this.payload,
    };
  });

  it('should return payload', () => {
    const resultado = gyms(null, this.action);
    expect(resultado).to.be.eql(this.payload);
  });

});
