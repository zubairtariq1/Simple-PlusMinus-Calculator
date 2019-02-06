import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { firstNumber: '', secondNumber: '', result: '' }
  }

  addNumber = () => {
    this.setState({ result: parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber) })
  }

  subtractNumber = () => {
    this.setState({ result: parseInt(this.state.firstNumber) - parseInt(this.state.secondNumber) })
  }



  render() {
    return (

      <View style={styles.container}>

        <Text style={styles.text}>Calculator</Text>

        <View style={styles.inputArea}>
          <TextInput style={{ width: 200, borderColor: 'blue', borderWidth: 2, paddingBottom: 5, marginBottom: 5, paddingLeft: 5 }}
            onChangeText={(firstNumber) => this.setState({ firstNumber })} value={this.state.firstNumber} keyboardType='numeric' />

          <TextInput style={{ width: 200, borderColor: 'red', borderWidth: 2, paddingTop: 5, paddingLeft: 5 }}
            onChangeText={(secondNumber) => this.setState({ secondNumber })} value={this.state.secondNumber} keyboardType='numeric' />

          <View style={styles.button}>
            <Button onPress={this.addNumber} title='+' /><Button onPress={this.addNumber} title='-' />
          </View>
        </View>


        <View style={styles.result}>
          <Text style={styles.text}>Result: {this.state.result}</Text>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24
  },
  button: {
    height: 200,
    width: 200,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  inputArea: {
    marginTop:10,
    flex: 1,
  },
  result: {
    flex: 2,
  }
});
