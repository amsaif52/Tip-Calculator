/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Slider,
  SegmentedControlIOS
} from 'react-native';

export default class TipCalculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      amount: 0,
      tip: 0.15,
      totalTip: 0,
      amountPerPerson: 0,
      person:1,
      selectedIndex: 0,
      values: ['Ok 15%', 'Good 18%','Great 20%', 'Wow 25%']
    };
  }

  handleAmountChange(value){
    this.state.amount = value;
    this.state.totalTip = (this.state.tip * value);
    this.setState(this.state);
    this.sliderChange(this.state.person);
  }

  sliderChange(person){
    this.state.person = person;
    this.state.amountPerPerson = ((this.state.amount)/person);
    this.setState(this.state);
  }

  handleTipPercent(tipPercent){
    const tipArray = [0.15,0.18,0.20,0.25];
    this.state.tip = tipArray[this.state.values.indexOf(tipPercent)];
    this.setState(this.state);
    console.log(this.state);
    this.handleAmountChange(this.state.amount);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.label}>
            Amount Total:
          </Text>
          <TextInput
            style={styles.textInput}
            defaultValue={this.state.amount}
            onChangeText={this.handleAmountChange.bind(this)}
          />
        </View>
        <View>
          <SegmentedControlIOS
            values={this.state.values}
            selectedIndex={this.state.selectedIndex}
            onValueChange={this.handleTipPercent.bind(this)}
            onChange={(event) => {
              this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
            }}
             style={{margin:10,height: 50}}
          />
        </View>
        <View style={styles.row}>
           <Text style={styles.label}>
             Split Amongst {this.state.person}:
           </Text>
           <Slider
             minimumValue={1}
             maximumValue={10}
             step={1}
             value={1}
             style={styles.slider}
             onValueChange={this.sliderChange.bind(this)}
             />
         </View>

        <View style={styles.row}>
        <Text style={styles.label}>
             Amount Per Person:
         </Text>
         <Text style={styles.amount}>
           ${this.state.amountPerPerson.toFixed(2)}
         </Text>
       </View>

       <View style={styles.row}>
          <Text style={styles.label}>
            Total Tip:
          </Text>
          <Text style={styles.amount}>
          ${this.state.totalTip.toFixed(2)}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  textInput: {
    textAlign: 'left',
    color: '#333333',
    margin: 5,
    height: 50,
    borderColor: '#60b7e2',
    borderWidth: 1,
    flex: 2
  },
  amount: {
    fontWeight: 'bold',
    textAlign: 'left',
    flex: 2
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
AppRegistry.registerComponent('TipCalculator', () => TipCalculator);
