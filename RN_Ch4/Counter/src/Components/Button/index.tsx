import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity``;
const Icon = Styled.Image``;

/**Props와 State
 * 리액트에서 데이터를 다루기 위해 Props, State, Context를 사용
 * 
 * Props : 부모컴포넌트에서 자식컴포넌트로 전달되는 데이터. 자식 컴포넌트에서
 * 변경이 불가능. 컴포넌트의 속성을 의미
 * 
 * State : 유동적인 데이터를 다룰 때 사용. 데이터 변경 가능. 컴포넌트의 
 * 상태를 의미
 * 
 * Props : 변경불가능한 데이터 | State : 변경 가능한 데이터
 */

/**버튼컴포넌트는 iconName과 onPress 두 가지의 Props를 가지고 있음
 * 타입스크립트에서의 인터페이스는 다른 객체지향 언어의 인터페이스와 유사*/


interface Props {
  iconName: 'plus' | 'minus'; //
  onPress?: () => void; //'?'의 의미 : Optional 프로퍼티
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
