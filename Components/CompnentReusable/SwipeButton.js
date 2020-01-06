import React, { Component } from 'react'
import { Animated, StyleSheet, View, Text, TouchableOpacity, SafeAreaView  } from 'react-native'
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Easing } from "react-native-reanimated";
import Icon from 'react-native-vector-icons/FontAwesome';
export default class SwipeButton extends Component {
    state = {
        flexMe: 'flex-end',
        zIndex: 100,
        fate: this.translateX = new Animated.Value(0)
    }
    
    renderRightActions = (progress, dragX) => {
        const trans = dragX.interpolate({
            inputRange: [-100 ,0],
            outputRange: [-0, 0],
            extrapolate: 'clamp'
        });
        moveRight = () => {
            Animated.timing(this.state.fate, {
                toValue: 100,
                duration: 1000,
                easing: Easing.linear
            })
        }
        return (
            
            <View style={{borderWidth:0,width:90,alignItems:'center'}}>
                <RectButton onPress={()=>{alert('metra')}}>
                <Animated.View
                    style={[
                        styles.actionTop,
                        {
                            transform: [{ translateX: trans }],
                        },
                    ]}>
                 <Text style={{textAlign:'center',marginTop:9}}> <Icon name="glasses" size={27} color="#FFFCFA" type="fontAwesome" />;</Text>
                </Animated.View>
                </RectButton >
                <RectButton onPress={()=>{alert('how are yoj')}}>
                <Animated.View
                    style={[
                        styles.actionCenter,
                        {
                            transform: [{ translateX: trans }],
                        },
                    ]}>
                  
                </Animated.View>
                </RectButton>
                <RectButton onPress={()=>{alert('time to go')}}>
                <Animated.View
                    style={[
                        styles.actionBottom,
                        {
                            transform: [{ translateX: trans }],
                        },
                    ]}>
                  
                </Animated.View>
                </RectButton>
                
            </View>
          

        )
    }

    
    render() {
        return (
            <SafeAreaView>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                <TouchableOpacity onPress={() => { alert("hello") }} style={[styles.dateShow]}>

                </TouchableOpacity >
                
                    <Swipeable
                        
                        // renderLeftActions={this.renderLeftActions}
                        onSwipeableLeftOpen={() => { this.setState({ zIndex: 100 }) }}
                        renderRightActions={this.renderRightActions}
                        onSwipeableRightOpen={() => { this.setState({ zIndex: 0 }) }}
                        leftThreshold={1}
                        rightThreshold={1}
                    >
                        <Animated.View style={styles.ViewContainer}>
                            <TouchableOpacity style={[styles.swipCade]} >
                                <Text>  </Text>
                            </TouchableOpacity>
                        </Animated.View>

                    </Swipeable>
                




            </View>
        </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    dateShow:{
        width: 85, height: 150, backgroundColor: 'red', position: 'absolute', left: 70, borderRadius: 25, top: 5
    },
    actionTop: {
        backgroundColor: '#2731F2',
        width:50,
        height:45,
        borderRadius:30,
        marginTop:10,
    },
    actionCenter:{
        backgroundColor: 'red',
        width:50,
        height:45,
        borderRadius:30,
        marginTop:10
        

    },
    actionBottom:{
        backgroundColor: 'yellow',
        width:50,
        height:45,
        borderRadius:30,
        marginTop:5

    },
    swipCade: {
        backgroundColor: 'grey',
        height: 160,
        width: 200,
        borderRadius: 40,
        
    },
    ViewContainer:{
        width: 300, height: 160, flexDirection: 'row', justifyContent: 'flex-end', borderWidth: 0, borderRadius: 20 ,alignContent:'center',
       
       
    }
})