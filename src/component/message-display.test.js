import { expect } from 'chai';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MessageDisplay from './message-display';

Enzyme.configure( {adapter: new Adapter() });

describe('MesssageDisplay', () => {

    const props = { message : "hello world" };
    const testComponent = shallow(<MessageDisplay {...props}/>);

    it('displays the decoded message', () => {
        expect(testComponent.find('.message-display').text())
            .to.equal(`Decoded message: ${props.message}` );
    });
});