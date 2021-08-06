import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Text from './Index';

describe('<Text /> Test Code', () => {
  it('렌더스 without crashing', () => {
    //const wrapper = shallow(<Text>테스트</Text>);
    expect(() => {
      shallow(<Text>테스트</Text>);
    }).not.toThrow();
  });

  it('contains <span>', () => {
    console.log(shallow(<Text>테스트</Text>).html());

    const compHtml = shallow(<Text>테스트</Text>).html();
    console.log(String(compHtml));

    console.log(
      expect(() => {
        shallow(<Text>테스트</Text>)
          .dive()
          .find('span');
      }),
    );
  });
});
