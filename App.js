import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

/* ===== Component con: Button màu ===== */
class ColorButton extends Component {
  render() {
    const { title, color, onPress } = this.props;

    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: color }]}
        onPress={() => onPress(color, title)}
      >
        <Text
          style={[
            styles.buttonText,
            { color: color === 'yellow' ? 'black' : 'white' },
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}

/* ===== Component cha ===== */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'green',
    };
  }

  // Callback đổi màu background + hiển thị thông báo
  handleChangeColor = (color, title) => {
    this.setState({
      backgroundColor: color,
    });
    Alert.alert('Thông báo', `Bạn đã chọn màu ${title}`);
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.state.backgroundColor },
        ]}
      >
        <ColorButton title="GREEN" color="green" onPress={this.handleChangeColor} />
        <ColorButton title="BLUE" color="blue" onPress={this.handleChangeColor} />
        <ColorButton title="BROWN" color="brown" onPress={this.handleChangeColor} />
        <ColorButton title="YELLOW" color="yellow" onPress={this.handleChangeColor} />
        <ColorButton title="RED" color="red" onPress={this.handleChangeColor} />
        <ColorButton title="BLACK" color="black" onPress={this.handleChangeColor} />
      </View>
    );
  }
}

export default App;

/* ===== Style ===== */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
