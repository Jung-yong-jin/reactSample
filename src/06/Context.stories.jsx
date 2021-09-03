import React, { Component } from 'react';
import HomePageComponent  from './HomePageComponent';
import HomePageWithComponent from './HomePageWithProvider';
//import ButtonWithNewConsumer from './ButtonWithNewConsumer';
import Text from '../04/Text';
import Button from '../04/Button'
import Modal from './Modal';


import ButtomWithModal from './ButtonWithModal'
import ModalProvider, {Consumer} from './ModalProvider';
import ModalProviderWithKey, {CONFIRM_DELETE_MODEAL} from './ModalProviderWithKey';
import {Consumer as ModalConsumer} from './ModalContext';

export default {
    title: 'Example/context',
  };


const Template = (args) => <HomePageComponent {...args} />;
const Template2 = (args) => <HomePageWithComponent {...args} />;
//const Template3 = (args) => <ButtonWithNewConsumer {...args} />;

const Template3 = (args) => <Modal {...args}> <div><Text>정말 삭제하시겠습니까?</Text></div><Button primary>예</Button><Button>닫기</Button></Modal>;
const Template4 = (args) => <ButtomWithModal {...args}/>;

const Template5 = (args) => (<ModalProvider {...args}>
                                <div>
                                  <Text>다음 버튼 눌러 모달을 실행합니다.</Text>
                                </div>
                                <Consumer>
                                  { ({openModal}) => <Button onPress={()=> openModal()}>삭제</Button>}
                                </Consumer>
                              </ModalProvider>);

const Template6 = (args) => ( <ModalProviderWithKey>
                                <div>
                                  <Text>다음 버튼 눌러 모달을 실행합니다.2</Text>
                                </div>
                                <ModalConsumer>
                                  {
                                    ({openModal}) => (
                                      <Button onPress={()=> openModal(CONFIRM_DELETE_MODEAL, {id:'1', name:'게시글'})}>모달열기</Button>
                                    )
                                  }
                                </ModalConsumer>
                              </ModalProviderWithKey>)

export const 컨텍스트_예제 = Template.bind({});
컨텍스트_예제.args = {};

export const Provider_예제 = Template2.bind({});
Provider_예제.args = {};

///export const Provider_API_예제 = Template3.bind({});
//Provider_API_예제.args = {};
export const modal_예제 = Template3.bind({});
modal_예제.args = {};

export const modal_닫기_예제 = Template4.bind({});
modal_닫기_예제.args = {};

export const modal_provider_예제 = Template5.bind({});
modal_provider_예제.args = {};

export const modal_provider2_예제 = Template6.bind({});
modal_provider2_예제.args = {};