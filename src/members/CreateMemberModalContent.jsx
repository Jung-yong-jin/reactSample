import React from 'react';
import {Consumer} from '../06/ModalContext'
import Button from '../04/Button';
import Text from '../04/Text';
import Input from '../03/Input';


export default  class CreateMemberModalContent extends React.PureComponent {
    render() {
        return (
            <Consumer>
                {
                    ({closeModal}) => (
                        <div>
                            <div>
                                <Text large>회원가입</Text>
                                <hr/>
                                <Input label="이메일" name="email" />
                                <Input label="이름" name="name" />
                                <Input label="비밀번호" name="password" />
                            </div>
                            <Button primary>가입하기</Button>
                            <Button onPress={closeModal}>닫기</Button>
                        </div>
                        
                    )
                }
            </Consumer>
        );
    }
}
