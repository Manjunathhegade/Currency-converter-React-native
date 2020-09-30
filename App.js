import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Dimensions,
} from "react-native";

const currencyPerRupee = {
  DOLLAR: 0.01356,
  EURO: 0.0115872,
  POUND: 0.01056,
  RUBEL: 0.93,
  AUSDOLLAR: 0.0190427,
  CANDOLLAR: 0.0181591,
  YEN: 1.54,
  DINAR: 0.00510093,
  BITCOIN: 0.00000126629,
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      resultValue: "0.0",
    };
  }

  

  buttonPress = (currency) => {
    if (this.state.inputValue === "") {
      Alert.alert("Enter some value");
    }
    let Result = parseFloat(this.state.inputValue) * currencyPerRupee[currency];
    this.setState({ resultValue: Result.toFixed(2) });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require("./assets/logo1.png")} style={styles.logo} />
          </View>
          <View style={styles.screenView}>
            <View style={styles.resultContainer}>
              <Text style={styles.resultValue}>{this.state.resultValue}</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                selectionColor="#FFF"
                keyboardType="number-pad"
                placeholder="Enter Value"
                placeholderTextColor="#FFF"
                value={this.state.inputValue}
                onChangeText={(inputValue) => {
                  this.setState({ inputValue });
                }}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPress("DOLLAR")}
              >
                <Text style={styles.buttonText}>DOLLAR</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPress("EURO")}
              >
                <Text style={styles.buttonText}>EURO</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPress("POUND")}
              >
                <Text style={styles.buttonText}>POUND</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPress("RUBEL")}
              >
                <Text style={styles.buttonText}>RUBEL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPress("AUSDOLLAR")}
              >
                <Text style={styles.buttonText}>AUS</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPress("CANDOLLAR")}
              >
                <Text style={styles.buttonText}>CAND</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPress("YEN")}
              >
                <Text style={styles.buttonText}>YEN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPress("DINAR")}
              >
                <Text style={styles.buttonText}>DINAR</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterButton}
                onPress={() => this.buttonPress("BITCOIN")}
              >
                <Text style={styles.buttonText}>BITCOIN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF0F1",
    marginTop: 20,
    margin: 10,
  },
  screenView: {
    flex: 1,
  },
  resultContainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "#192A56",
    alignItems: "center",
    borderWidth: 2,
  },
  resultValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c1c1c1",
    borderWidth: 2,
    backgroundColor: "#192A56",
  },
  input: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#FFF",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderColor: "#c1c1c1",
    borderWidth: 2,
  },
  converterButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#192A56",
    height: 100,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    width: "33.3%",
  },
  buttonText: {
    fontSize: 20,
    color: "#FFF",
  },
  logo: {
    width: Dimensions.get("window").width,
    height: 150,
    marginTop:20
  },
});
