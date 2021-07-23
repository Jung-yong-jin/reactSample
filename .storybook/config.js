import { configure, setAddon } from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from 'storybook-addon-jsx';

function loadStories() {
  //InputStory.jsx 파일을 loadStories() 함수 안에서 require() 함수로 임포트했습니다. 즉, input 스토리를 스토리북에 연결했습니다.
  //require('../src/stories/InputStory');
  //스토리 파일을 이곳에 추가할 수 있습니다.
  //require('../src/stories/NewCounterStory');

  // 해당폴더에 Story이름이 들어간 파일 require목록 생성
  const context = require.context('../src/stories', true, /Story\.jsx$/);
  // 위에서 만든 목록을 require로 추가
  context.keys().forEach((srcFile) => {
    interopRequireDefault(context(srcFile));
  });
}
setAddon(JSXAddon);
configure(loadStories, module);
