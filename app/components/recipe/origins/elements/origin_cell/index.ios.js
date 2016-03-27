'use strict';

var React = require('react-native');

var {
  Text,
  View,
  TouchableHighlight,
  Image,
} = React;

var styles = require("./style");

var OriginCell = React.createClass({
  render: function() {
    return (
      <TouchableHighlight onPress={this.props.onSelect}>
      <View style={styles.container}>
        <View style={styles.placeDetailsContainer}>
          <Text style={styles.placeTitle}>
            {this.props.place.name}
          </Text>
          <Text style={styles.waterTemp}>
          </Text>
        </View>
      </View>
      </TouchableHighlight>
    );
  }
});

module.exports = OriginCell;
