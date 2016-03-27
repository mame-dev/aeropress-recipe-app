'use strict';

var React = require('react-native');

var {
  Text,
  View,
  ListView,
  ScrollView,
} = React;

var styles = require("./style");

//View Elements
var RecipeCell = require("./elements/recipe_cell");
var RecipeView = require("../recipe");
var FooterView = require("../footer");

var ViewReactClass = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      loaded: false,
    };
  },
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData: function() {
    var responseData = [
      {
        store_name: 'Light up coffee',
        origin_name: 'Costarica',
        beans_amount: 18,
        water_amount: 200,
        water_temp: 92,
      },
      {
        store_name: 'PNB Coffee',
        origin_name: 'Kenya',
        beans_amount: 18,
        water_amount: 200,
        water_temp: 92,
      },
      {
        store_name: 'Light up coffee',
        origin_name: 'Costarica',
        beans_amount: 18,
        water_amount: 200,
        water_temp: 92,
      }
    ];
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(responseData),
      loaded: true
    });
  },
  render: function() {
    if(!this.state.loaded){
      return(
        <View style={styles.container}>
        <Text style={styles.loadingText}>
          Fetching Recipes...
        </Text>
      </View>
      );
    }
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.renderListView()}
        </ScrollView>
        <FooterView navigator={this.props.navigator}/>
      </View>
    );
  },
  renderListView: function(){
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRecipeCell}
        style={styles.recipesListView}/>
    );
  },
  renderRecipeCell: function(recipe, sectionID, rowID){
    return(
      <RecipeCell
        onSelect={() => this.selectRecipe(recipe)}
        rowID={rowID}
        sectionID={sectionID}
        recipe={recipe}/>
    );
  },
  selectRecipe: function(recipe){
    this.props.navigator.push({
      title: recipe.name,
      component: RecipeView,
      passProps: {
          recipe: recipe,
      }
    });
  },

});
module.exports = ViewReactClass;
