import { expect } from 'chai';
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import CodeInput from './code-input'

Enzyme.configure({ adapter: new Adapter() });

describe('Code Input', () => {

    const props = { 
                    onSubmit: sinon.spy(),
                    onChange: sinon.spy()
                };
    const testComponent = shallow(
        <CodeInput {...props} />
    );
    it('displays the decoded message', () => {
        testComponent.setState({value : "4 4 4 4"})
        // testComponent.find('[type="text"]').simulate('change', {target: {value: 'My new value'}});
        testComponent.find('[type="submit"]').simulate('click');
        console.log( testComponent.debug())
        // expect(props.onSubmit.calledOnce).to.equal(true);
        console.log(props.onSubmit.getCalls())
        expect(props.onSubmit.called).to.equal(true);
        // testComponent.find('tbody').find('td').first().simulate('click');
        // expect(props.history.push.calledOnce).to.equal(true);
        // expect(testComponent.find('.code-input').text()).to.equal('Please enter the code:');
    })
})