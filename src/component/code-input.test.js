import { expect } from 'chai';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import CodeInput from './../component/code-input'

Enzyme.configure({ adapter: new Adapter() });

describe('Code Input', () => {

    const props = { onSubmit: sinon.spy(),
                onChange: sinon.spy(),
                value: "44444"};
    const testComponent = shallow(<CodeInput {...props}/>);

    it('should render with correct texy', ()=> {
        expect(testComponent.find('.code-input').text())
            .contain('Please enter the encoded message:');
    });

    it('should call onSubmit when submitted', () => {
        testComponent.find('form').simulate('submit');
        expect(props.onSubmit.calledOnce).to.equal(true);
    });

    it('should call onChange with text input', () => {
        testComponent.find('input').first().simulate('change', 
            {target: {value: '11 22 33'}});
        expect(props.onChange.calledOnce).to.equal(true);
    });
});