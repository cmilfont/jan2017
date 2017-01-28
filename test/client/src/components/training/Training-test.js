import React from 'react';
import { describe, beforeEach, it } from 'mocha';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';
import { spy } from 'sinon';

import { Training } from 'components/training/Training';
import Toolbar from 'components/training/Toolbar';

describe('Container: Training', function() {

  beforeEach(() => {
    this.verify = spy(() => {});
    this.training = shallow(
      <Training
        verify={this.verify}
        training={{}}
        params={{}}
      />
    );
  });

  it('should contain Toolbar', () => {
    expect(this.training.contains(<Toolbar />)).to.equal(true);
  });

  it('Verify was called', () => {
    this.training.instance().componentDidMount();
    expect(this.verify.called).to.equal(true);
  });

});
