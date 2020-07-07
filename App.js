/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//RN은 HTML의 태그를 사용할 수 없으므로 자체적인 특별한 태그(컴포넌트)를 사용함
//RN에서 태그 = 컴포넌트 라고 생각해도 좋음. 컴포넌트는 화면에 나타나는 일정 부분을 말함

import {
  SafeAreaView, //아이폰X 이상의 단말기에서 나타나는 '노치'부분에 컨텐츠를 표시할 것인지 결정하는 컴포넌트
  StyleSheet, //컴포넌트에 스타일을 적용할 때 사용
  ScrollView, //화면 스크롤이 가능한 컴포넌트
  View, //전체적인 레이아웃을 잡는 컴포넌트
  Text, //화면에 텍스트를 표기하기 위해서 반드시 필요한 컴포넌트
  StatusBar, //상단바를 숨기거나 색을 변경하는데 사용되는 컴포넌트
} from 'react-native';

//얘 안씀. 신경안써도 됨
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return ( //RN은 컴포넌트'들'을 반환하는 함수로 구성됨.
  //반환하는 컴포넌트는 하나의 노드로 구성시키기 위해 아래 <>를 이용함. <>는 Fragnent라는 컴포넌트
  //<>밑으로 오는 RN의 컴포넌틑는 하나의 노드들로 구성되어 함수 리턴을 이용할 수 있게 된다.
    <> 
      <StatusBar barStyle="light-content" />  
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>모리리링</Text>
              <Text style={styles.sectionDescription}>
                무니니 <Text style={styles.highlight}>무니니니니</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
