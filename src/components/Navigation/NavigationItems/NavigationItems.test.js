import React from 'react';

// enzyme allows to write unit test without having to
// compile the entire app
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

// connects enzyme
configure({ adapter: new Adapter() });

describe('<NavigationItPASSems />', () => {
	let wrapper;

	// Remember: each test runs indepedently, with its own wrapper
	beforeEach(() => {
		wrapper = shallow(<NavigationItems />);
	});

	it('should render two <NavigationItem /> elements if not authenticated!', () => {
		expect(wrapper.find(NavigationItem)).toHaveLength(2);
	});

	it('should render three <NavigationItem /> elements if authenticated!', () => {
		//wrapper = shallow(<NavigationItems isAuthenticated />);
		wrapper.setProps({ isAuthenticated: true });
		expect(wrapper.find(NavigationItem)).toHaveLength(3);
	});

	it('should render one <NavigationItem /> element containing a link to logout if autheticated', () => {
		wrapper.setProps({ isAuthenticated: true });
		expect(
			wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)
		).toEqual(true);
	});
});
