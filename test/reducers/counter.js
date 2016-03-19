/*
import counter from '../../src/reducers/counter'
import deepFreeze from 'deep-freeze-strict';
import { expect } from 'chai';

describe('Counter', () => {
	it('can increment count', () => {
		const stateBefore = 0;
		const action = {
			type: 'INCREMENT'
		};
		const stateAfter = 1;

		deepFreeze(stateBefore);
		deepFreeze(action);

		expect(
			counter(stateBefore, action)
		).to.deep.equal(stateAfter);
	});

	it('can decrement count', () => {
		const stateBefore = 1;
		const action = {
			type: 'DECREMENT'
		}
		const stateAfter = 0;

		deepFreeze(stateBefore);
		deepFreeze(action);

		expect(
			counter(stateBefore, action)
		).to.deep.equal(stateAfter);
	});

	it('should return state given after invalid action type', () => {
		const stateBefore = 0;
		const stateAfter = 0;
		expect(counter(stateBefore, {type: 'GARBAGE'})).to.deep.equal(stateAfter);
	})
});
*/
