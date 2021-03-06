'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
  },
  row: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
  },
  row_center: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  underline: {
    marginRight: 10,
    marginLeft: 10,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  inputLabel: {
    fontSize: 16,
    width: 120,
    paddingLeft: 10,
  },
  textInput: {
    height: 40,
    flex: 1,
    marginTop: 2,
    paddingLeft: 10,
  },
  selectableText: {
    fontSize: 16,
    height: 40,
    flex: 1,
    marginTop: 15,
    paddingLeft: 10,
  },
  inputUnit: {
    paddingRight: 10,
  },
  note: {
    flex: 1,
    height: 100,
    marginRight: 10,
    marginLeft: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
  },
  button: {
    padding: 10,
    borderColor: 'gray',
    backgroundColor: '#c3c3c3',
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  button_text: {
    color: '#fff',
  }
});
