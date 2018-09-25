import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';
import Header from './src/header';
import 'react';
import Svg,{
    Circle,
    Ellipse,
} from 'react-native-svg';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
}

const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#FFFFFF'} ]}>
  <Image
    style={{
      flex: 1,
      alignSelf: 'center',
      width: Dimensions.get('window').width,
    }}
    source={require('./src/images/CPR1.png')}
    resizeMode="contain"
  />
</View>;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#FFFFFF'} ]}>
<Image
  style={{
    flex: 1,
    alignSelf: 'center',
    width: Dimensions.get('window').width,
  }}
  source={require('./src/images/CPR2.png')}
  resizeMode="contain"
/>
</View>;
const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: '#FFFFFF'} ]}>
<Image
  style={{
    flex: 1,
    alignSelf: 'center',
    width: Dimensions.get('window').width,
  }}
  source={require('./src/images/CPR3.png')}
  resizeMode="contain"
/>
</View>;
const FourthRoute = () => <View style={[ styles.container, { backgroundColor: '#FFFFFF'} ]}>
<Image
  style={{
    flex: 1,
    alignSelf: 'center',
    width: Dimensions.get('window').width,
  }}
  source={require('./src/images/CPR4.png')}
  resizeMode="contain"
/>
</View>;
const FifthRoute = () => <View style={[ styles.container, { backgroundColor: '#FFFFFF'} ]}>
<Image
  style={{
    flex: 1,
    alignSelf: 'center',
    width: Dimensions.get('window').width,
  }}
  source={require('./src/images/CPR5.png')}
  resizeMode="contain"
/>
</View>;


export default class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
      { key: 'third', title: 'Third' },
      { key: 'fourth', title: 'Fourth'},
      { key: 'fifth', title: 'Fifth'},
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  //_renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
    fifth: FifthRoute,
  });

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 0,
          backgroundColor: 'transparent',
        }}>
        <Header headerText={'CPR Assist'} />
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}>
          <Svg
              height="100"
              width="100"
          >
              <Circle
                  cx="50"
                  cy="50"
                  r="30"
                  stroke="blue"
                  strokeWidth="0"
                  fill="green"
              />
          </Svg>
          <Svg
              height="200"
              width="100"
          >
              <Circle
                  cx="50"
                  cy="50"
                  r="30"
                  stroke="blue"
                  strokeWidth="0"
                  fill="red"
              />
          </Svg>
          </View>
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this._renderScene}
          onIndexChange={this._handleIndexChange}
          onRequestChangeTab={this.handleIndexChange}
          initialLayout={initialLayout}
        />
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
});
