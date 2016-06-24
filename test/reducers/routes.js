import routes from '../../src/reducers/routes'
import { expect } from 'chai';
import {addRoute, delRoute} from '../../src/actionCreators';

describe('Routes Reducer', () => {
	it('can add route', () => {
		const stateBefore = {};
		const action = addRoute('/test', 'test', true);
		const stateAfter = {
      '/test': {name: 'test', isMenuItem: true}
    };

		expect(
			routes(stateBefore, action)
		).to.deep.equal(stateAfter);
	});

  it('can delete route' , () => {
		const stateBefore = {
      '/test': {name: 'test', isMenuItem: true}
    };
		const action = delRoute('/test');
		const stateAfter = {};

		expect(
			routes(stateBefore, action)
		).to.deep.equal(stateAfter); 
  });
});
