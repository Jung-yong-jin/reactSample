import React from 'react';
import Text from '../04/Text';
import Button from '../04/Button';
import ModalProviderWithKey, {CREATE_MEMBER_MODAL, CONFIRM_DELETE_MODEAL} from '../06/ModalProviderWithKey';
import {Consumer as ModalConsumer} from '../06/ModalContext'

export default {
    title: 'Example/members'
};

const Template = (args) => (<ModalProviderWithKey {...args}>
                                <div>
                                    <Text>다음 버튼 눌러 모달을 실행합니다.</Text>
                                    <ModalConsumer>
                                  {
                                    ({openModal}) => (
                                      <Button onPress={()=> openModal(CREATE_MEMBER_MODAL, {id:'1', name:'회원가입'})}>모달열기</Button>
                                    )
                                  }
                                </ModalConsumer>
                                </div>
                            </ModalProviderWithKey>);


export const 회원가입_예제 =  Template.bind({});
회원가입_예제.args = {};