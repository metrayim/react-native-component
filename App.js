import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity,Dimensions, Button } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { RectButton } from "react-native-gesture-handler";

const slides = [
  {
    key: 'somethun',
    title: 'HRD',
    text: 'Description.\nSay something cool',
    image: require('./Components/asset/buiding.png'),
    backgroundColor: '#59b2ab',
    borderWidth:2,
    borderColor:'red',
    width: width*.8,
   height: height*0.08,
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('./Components/asset/year2020.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('./Components/asset/undraw_goal_0v5v.png'),
    backgroundColor: '#22bcb5',
  },
  

];

export default class App extends React.Component {
  state = {
    showRealApp: false,
    width: width*.8,
    marginLeft:width*.09,
    show:true
   
    
  }
  _renderItem = ({ item ,dimeansonj}) => {
    console.log(item,'metra')
    
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.title1}>{item.title} APP </Text>
        <Text style={styles.title2}>Hlloe this is HRD</Text>
        <Image source={item.image} style={styles.image} />
        {/* <TouchableOpacity style={{ width: 100, height: 100, borderWidth: 2, borderColor: 'red' }} onPress={()=>alert("metra")}>
          <Text style={styles.text}>Hello</Text>
        </TouchableOpacity> */}

      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  _renderNextButton = () => {
    //  console.log('metra',item)
    return (
      <View style={[styles.buttonCircleNext,{width:this.state.width,marginLeft:this.state.marginLeft}]}>
        <Text style={styles.textInside} >Next</Text>
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircleDone}>
        <Text style={styles.textInside}>Done</Text>
      </View>
    );
  };
  _renderSkipButton = () => {
    // this.setState({show:false})
    
    return (
      
          <View style={styles.buttonCircleskip}> 
        <Text style={styles.textInside1}>SKIPE</Text>
      </View>
    );
  };
  _renderPrevButton = () => {
    return (
      
          <View style={styles.buttonCirclePrev}> 
        <Text style={styles.textInside1}>prev</Text>
      </View>
    );
  };
  onSlidChange=(index,end)=>{
    console.log('s', index)
    if(index==0){
       this.setState({width: width*.8,marginLeft:width*.1,show:true})
    }
    else if(index==1){
      this.setState({width: width*.5,marginLeft:width*.4,show:true})
    }
    else {
      this.setState({show:false})
    }
    

  }
  
  
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return <AppIntroSlider  renderItem={this._renderItem} slides={slides} renderDoneButton={this._renderDoneButton} 
       buttonStyle={styles.buttonCircleskip}  buttonTextStyle={styles.textInside1} 
       showSkipButton={true} renderSkipButton={this._renderSkipButton} 
      renderNextButton={this._renderNextButton} onDone={()=>alert('hello')} dotStyle={{backgroundColor: 'rgba(0, 0, 0, 0)'}} 
      bottomButton  
      onSlideChange={this.onSlidChange}
      renderPrevButton={this._renderPrevButton} showPrevButton={this.state.show}
        />
       
    }
  }
}
const {height,width}=Dimensions.get('window');
const styles = StyleSheet.create({
  MainContainer: {
    //  flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    borderWidth:0,
    borderColor:'green'
    // backgroundColor: 'black'
  },
  title1: {
    fontSize: 59,
    color: 'black',
    fontWeight: 'bold',
    position:'absolute',
    bottom:height*0.17,
    zIndex:100,
    left:width*.08
    // textAlign: 'center',
    
  },
  title2: {
    fontSize: 23,
    color: 'black',
    position:'absolute',
    bottom:width*.2,
    zIndex:100,
    left:width*0.09
    // textAlign: 'center',
    
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  image: {
    width: width*1,
    height: height*.8,
    resizeMode: 'center',
    borderWidth:0,
    borderColor:'red'
     
    
  },
  buttonCircleNext: {
     
     height: height*0.08,
     backgroundColor: 'rgba(5, 68, 255,1)',
     borderRadius: 30,
     justifyContent: 'center',
     alignItems: 'center',
     marginBottom:height*.05,
      // width: width*.8,
     // marginLeft:width*.09,
    //  position:'absolute',
    //  right:20,
    //  bottom:7,
    //  zIndex:100
     
     
  },
  buttonCirclePrev: {
     width: width*.25,
   height: height*0.08,
   backgroundColor: 'rgba(5, 68, 255,1)',
   borderRadius: 30,
   justifyContent: 'center',
   alignItems: 'center',
   marginLeft:width*.01,
   marginBottom:height*.05,
   borderWidth:2,
    position:'absolute',
    left:20,
    bottom:height*.001,
  //  zIndex:100
   
   
},
  buttonCircleDone: {
    width: width*.8,
   height: height*0.08,
   backgroundColor: 'rgba(5, 68, 255,1)',
   borderRadius: 30,
   justifyContent: 'center',
   alignItems: 'center',
    marginLeft:width*.09,
    marginBottom:height*.05
  //  position:'absolute',
  //  right:20,
  //  bottom:7,
  
   
   
},
buttonCircleskip: {
  width: width*.3,
 height: height*0.05,
 backgroundColor: 'rgba(5, 68, 255,1)',
 borderRadius: 30,
 justifyContent: 'center',
 alignItems: 'center',
  // marginLeft:30,
  // marginBottom:400
  position:'absolute',
    right:20,
    borderWidth:1,
    bottom:height*.8
    
    
 
 
},
  textInside:{
    color:'white',
    fontSize:30,
    fontWeight:'bold'
  },
  textInside1:{
    color:'white',
    fontSize:17,
    fontWeight:'bold'
  }

});