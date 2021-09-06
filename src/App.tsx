/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   FlatList,
   Image,
   SafeAreaView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
import strings from './strings';

interface Props{}
interface State{
  commitDetails:any;
}
 class App extends React.PureComponent<Props>{

  constructor(props){
    super(props)

    this.state = {
      commitDetails: []
    }
  }

  componentDidMount(){
    this.fetchCommitsDetails();
  }

  fetchCommitsDetails = async () =>{
    try {
      const response = await fetch(
        // 'https://api.github.com/repos/octocat/hello-world/commits'
        'https://api.github.com/repos/ksarunsasi/GM_Case_Study/commits'
      );
      const commmitDetailsResp = await response.json();
      this.setState({commitDetails: commmitDetailsResp})
      console.warn(commmitDetailsResp)

    } catch (error) {
      this.setState({commitDetails: []})
      console.error(error);
    }
  }

listItemSeparator = () => {
  return (
    <View style={styles.itemDivider}/>
  );
}
 renderItem = (item:any) => {
  let authorName = item?.item?.author?.login;
  let authorAvatar = item?.item?.author?.avatar_url;
  let sha = item?.item?.sha
  let commmitMsg = item.item?.commit?.message;

   return (  
   <View style={styles.itemContainer}>
       <Image
        style={styles.avatarContainer}
        source={{
          uri: authorAvatar,
        }}
      />
      <View>
       <Text>{strings.AUTHOR_NAME + authorName}</Text>
       <Text>{strings.SHA + sha}</Text>
       <Text>{strings.COMMIT_MSG + commmitMsg}</Text>
      </View>
       
   </View>)
 }

  render(){ 

    return (
      <SafeAreaView>   
       <FlatList
       data={this.state.commitDetails}
       renderItem={this.renderItem}
       keyExtractor={item => item.id}
       ItemSeparatorComponent = {this.listItemSeparator}
     />
      </SafeAreaView>
    );
  }
 }

 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop: StatusBar.currentHeight || 0,
   },
   avatarContainer:{
    width:80,
    height:80
   },
   itemDivider:{
    height: 1,
    width: "100%",
    backgroundColor: "#000000",
   },
   itemContainer:{
    flexDirection:'row', 
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
        height: 0,
        width: 0
    },
    elevation: 1
   },
 });
 
 export default App;
 