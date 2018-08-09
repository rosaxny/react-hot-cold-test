// not passing
import React from 'react';
import { shallow } from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
	const seedGuesses = [];
	beforeAll(() => {
		for(let i = 0; i < 10; i++) {
			seedGuesses.push(i);
		}
	});

	it('renders without crashing', () => {
		// console.log(<GuessList />);
		// { '$$typeof': Symbol(react.element),
	  	//     type: [Function: GuessList],
	  	//     key: null,
	  	//     ref: null,
	  	//     props: {},
	  	//     _owner: null,
	 	//     _store: {} }
		shallow(<GuessList guesses={seedGuesses} />);
	});

	it('renders guess box', () => {
		const wrapper = shallow(<GuessList guesses={seedGuesses} />);
		expect(wrapper.hasClass('guessBox')).toEqual(true);
	});
});