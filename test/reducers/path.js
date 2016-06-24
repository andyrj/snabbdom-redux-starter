import counter from '../../src/reducers/path'
import {expect} from 'chai';
import {changePath} from '../../src/actionCreators';

describe('Path Reducer', () => {
	it('can change path value in state atom', () => {
		const stateBefore = '/';
		const action = changePath('/test');
		const stateAfter = '/test';

		expect(
			counter(stateBefore, action)
		).to.deep.equal(stateAfter);
	});
});

