import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  SegmentedControlIOS
} from 'react-native';


export default class SegmentControl extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedIndex: 0,
      values: ['Ok 15%', 'Good 18%','Great 20%', 'Wow 25%'],
      tipPercent: [0.15,0.18,0.20,0.25]
    }
  }

  render(){
    return(
      <SegmentedControlIOS
        values={this.state.values}
        selectedIndex={this.state.selectedIndex}
        // onValueChange={this.handleTipPercent.bind(this)}
        onChange={(event) => {
          let _selectedIndex = event.nativeEvent.selectedSegmentIndex
          this.setState({selectedIndex: _selectedIndex});
          this.props.segment(this.state.tipPercent[_selectedIndex]);
        }}
         style={{margin:10,height: 50}}
      />
    );
  }
}
