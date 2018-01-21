import { expect } from 'chai';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import sinon from 'sinon';


import CodeInput from './code-input'

Enzyme.configure({ adapter: new Adapter() });

describe('Code Input', () => {

    const props = { value : "hello world",
                    // onSubmit: sinon.spy(),
                    onChange: ()  => 'hello',};
    const testComponent = shallow(
        <CodeInput {...props} />
    );
    it('displays the decoded message', () => {
        // expect(testComponent.find('.code-input').text()).to.equal('Please enter the code:');
    })
})