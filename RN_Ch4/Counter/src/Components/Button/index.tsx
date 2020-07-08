import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity``;
const Icon = Styled.Image``;

/**버튼컴포넌트는 iconName과 onPress 두 가지의 Props를 가지고 있음
 * 타입스크립트에서의 인터페이스는 다른 객체지향 언어의 인터페이스와 유사*/


interface Props {
  iconName: 'plus' | 'minus'; //
  onPress?: () => void; //?의 의미 : Optional 프로퍼티
  /**Optinal 프로퍼티 : 선택적으로 구현하는 프로퍼티. 구현해도 되고 안해도 됨 */
}

/**타입스크립트의 익명함수
 * var(또는 let) 함수이름 = function(매개변수명 : 자료형){}
 * 
 * 타입스크립트의 화살표함수
 * const 변수명 = (매개변수명:자료형) =>{...}
 */
const Button = ({ iconName, onPress }: Props) => {
  return (
    <Container onPress={onPress}> 
      <Icon
        source={
          iconName === 'plus'
            ? require('~/Assets/Images/add.png')
            : require('~/Assets/Images/remove.png')
        }
      />
    </Container>
  );
};
export default Button;
