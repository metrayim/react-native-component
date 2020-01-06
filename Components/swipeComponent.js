import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView,Animated } from 'react-native'
import { gestureHandlerRootHOC,PanGestureHandler, } from 'react-native-gesture-handler'


export default class swipeComponent extends Component {
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
            <SafeAreaView>
                 <PanGestureHandler onGestureEvent={this.onGestureEvent}  minDeltaX={20} maxDeltaY={20} >
                
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Animated.View style={[styles.swipCade,
                    {transform: [{ translateX: this.translateX }]}]}>
                        <Text>  </Text>
                    </Animated.View>
                </View>

                </PanGestureHandler>
                

            </SafeAreaView>

        )
    }
}
const styles = StyleSheet.create({
    swipCade: {
        backgroundColor: 'grey',
        height: 150,
        width: 200,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,


    }
})
