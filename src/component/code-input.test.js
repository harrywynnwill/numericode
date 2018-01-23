import { expect } from 'chai';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import BrowserMocks from '../../browser-mocks';
import CodeInput from './../component/code-input'

Enzyme.configure({ adapter: new Adapter() });

describe('Code Input', () => {

    const props = { onSubmit: sinon.spy(),
                onChange: sinon.spy(),
                value: "44444"};
    const testComponent = shallow(<CodeInput {...props}/>);
    it('inputs the encoded message', () => {
        testComponent.setState( {value : "4 4 4 4"} )
        testComponent.find('[type="submit"]').simulate('click');
        // console.log(testComponent.debug())
        // console.log(props.onSubmit.getCalls())
        //expect(props.onSubmit.calledOnce).to.equal(true);
        expect(testComponent.find('.code-input').text())
            .contain('Please enter the encoded message:');
    })
})