import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { firstNumber: '', secondNumber: '', result: '', history: [] }
  }


  addNumber = () => {
    this.setState({ result: parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber) },
      function () {
        const result1 = `${this.state.firstNumber} + ${this.state.secondNumber} = ${this.state.result}`
        this.setState({ history: [...this.state.history, { key: result1 }], firstNumber: '', secondNumber: '', result: ''});
      })
  }

  subtractNumber = () => {
    this.setState({ result: parseInt(this.state.firstNumber) - parseInt(this.state.secondNumber) },
      function () {
        const result1 = `${this.state.firstNumber} - ${this.state.secondNumber} = ${this.state.result}`
        this.setState({ history: [...this.state.history, { key: result1 }], firstNumber: '', secondNumber: '', result: '' });
      })
  }




  render() {
    return (

      <View style={styles.container}>

        <Text style={styles.text}>Calculator</Text>
        <Text style={styles.text}>Result: {this.state.result}</Text>

        <TextInput style={{ width: 200, borderColor: 'red', borderWidth: 2, paddingBottom: 5, marginBottom: 5, paddingLeft: 5 }}
          onChangeText={(firstNumber) => this.setState({ firstNumber })} value={this.state.firstNumber} keyboardType='numeric' />

        <TextInput style={{ width: 200, borderColor: 'red', borderWidth: 2, paddingTop: 5, paddingLeft: 5 }}
          onChangeText={(secondNumber) => this.setState({ secondNumber })} value={this.state.secondNumber} keyboardType='numeric' />
        <View style={styles.button}>
          <Button onPress={this.addNumber} title='+' /><Button onPress={this.subtractNumber} title='-' />
        </View>
        <Text style={styles.text}>History</Text>
        <FlatList data={this.state.history} renderItem={({ item }) => <Text>{item.key}</Text>} />

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
    marginTop: 25,
    paddingTop: 5
  },
  text: {
    fontSize: 20
  },
  button: {
    width: 100,
    marginTop: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  }
});
