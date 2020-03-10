import React from "react";
import { mount } from 'enzyme';
import Link from './Link';

describe('Link', () => {
  it('Test useEffect', () => {
    const link = mount(<Link className="my-link-class">Link to Google</Link>);
    expect(link).toMatchSnapshot();
    link.find('div').simulate('click');
    expect(link).toMatchSnapshot();
  });
});