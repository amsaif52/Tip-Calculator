import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider
} from 'react-native';

export default class SliderNew extends Component{
  test(person){
    this.props.changeSlider(person)
  }
  render(){
    return(
      <View style={styles.row}>
        <Text style={styles.label}>
          Split Amongst {this.props.persons}:
        </Text>
        <Slider
          minimumValue={1}
          maximumValue={10}
          step={1}
          value={1}
          style={styles.slider}
          onValueChange={this.test.bind(this)}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  slider: {
    margin: 5,
    height: 40,
    flex: 2
  },
  label: {
    textAlign: 'right',
    margin: 10,
    flex: 1,
    color: '#60b7e2'
  }
});
