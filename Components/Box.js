import React, { Component } from 'react'
import { Text, View ,StyleSheet,Animated, SafeAreaView} from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler';

export default class Box extends Component {
    constructor(prop){
        super();
        this.translateX = new Animated.Value(0)
        this.onGestureEvent =Animated.event([
            {
              nativeEvent: {
                translationX: this.translateX,
                              }
            }
          ]);
    }
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <Text>hello</Text>
                <View style={styles.container}>
                <PanGestureHandler onGestureEvent={this.onGestureEvent}>
                {/* <Animated.View style={[styles.box],{
                transform: [{ translateX: this.translateX }]
              }}/> */}
              <Animated.View style={{width:100,
        height:100,
        backgroundColor:'red',transform:[{translateX:this.translateX}]}}>

              </Animated.View>
                </PanGestureHandler>
                
            </View>
            </SafeAreaView>
            
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
    },
    box:{
        width:100,
        height:100,
        backgroundColor:'red'
    }
})