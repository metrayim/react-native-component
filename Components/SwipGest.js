import React, { Component } from "react";
import { Animated, StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { Easing } from "react-native-reanimated";

export default class AppleStyleSwipeableRow extends Component {
    // renderLeftActions = (progress, dragX) => {
    //     const trans = dragX.interpolate({
    //         inputRange: [0, 0, 0, 100],
    //         outputRange: [0, 0, 0, 0],
    //     });
    //     return (
    //         <RectButton style={styles.leftAction} onPress={this.close}>
    //             <Animated.View
    //                 style={[
    //                     styles.actionText,
    //                     {
    //                         transform: [{ translateX: trans }],
    //                     },
    //                 ]}>
    //                 <Text>gggggg</Text>
    //             </Animated.View>
    //         </RectButton>
    //     );
    // };
    constructor(props) {
        super(props)
        // this.renderLeftActions()
    }
    state = {
        flexMe: 'flex-end',
        zIndex: 100,
        fate: this.translateX = new Animated.Value(0)
    }
    renderLeftActions = (progress, dragX) => {
        const trans = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: ['0deg', '360deg'],
            extrapolate: 'clamp'
            // inputRange: [0, 100],
            // outputRange: [1,0],
        });
        return (
            <View>

                <RectButton>
                    <Animated.View
                        style={[
                            styles.actionTextLeft,
                            {
                                transform: [{ translateX: trans }],
                            },
                        ]}>

                    </Animated.View>
                    <Text>gggggg</Text>
                </RectButton>
            </View>

        )
    }
    renderRightActions = (progress, dragX) => {
        const trans = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [-0, -0],
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
            <RectButton onPress={() => alert('hello')}>
                <Animated.View
                    style={[
                        styles.actionTextRight,
                        {
                            transform: [{ translateX: trans }],
                        },
                    ]}>
                    <Text>gggggg</Text>
                </Animated.View>
                <Animated.View
                    style={[
                        styles.actionTextRight,
                        {
                            transform: [{ translateX: trans }],
                        },
                    ]}>
                    <Text>gggggg</Text>
                </Animated.View>
            </RectButton>

        )
    }

    render() {
        console.log(this.renderRightActions, 'meta')
        return (
            <SafeAreaView>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                    <TouchableOpacity onPress={() => { alert("hello") }} style={{
                        width: 100, height: 140, backgroundColor: 'red', position: 'absolute', left: 110, borderRadius: 25, top: 5
                    }}>

                    </TouchableOpacity >
                    <RectButton onPress={()=>{alert('hello')}}>
                        <Swipeable
                            
                            // renderLeftActions={this.renderLeftActions}
                            onSwipeableLeftOpen={() => { this.setState({ zIndex: 100 }) }}
                            renderRightActions={this.renderRightActions}
                            onSwipeableRightOpen={() => { this.setState({ zIndex: 0 }) }}
                            leftThreshold={1}
                            rightThreshold={1}


                        >
                            <Animated.View style={{ width: 300, height: 150, flexDirection: 'row', justifyContent: 'flex-end', borderWidth: 0, borderRadius: 20 }}>
                                <TouchableOpacity style={[styles.swipCade]} >
                                    <Text>  </Text>
                                </TouchableOpacity>
                            </Animated.View>

                        </Swipeable>
                    </RectButton>




                </View>
            </SafeAreaView>

        );
    }
}
const styles = StyleSheet.create({
    actionTextLeft: {
        backgroundColor: 'yellow',
        width: 100,
        height: 150,
        borderWidth: 1,
        borderRadius: 30,
        paddingTop: 30,
        paddingBottom: 30,
        paddingRight: 30,
        zIndex: 100

    },
    actionTextRight: {
        backgroundColor: 'black',
        width: 100,
        height: 65,
        borderWidth: 1,
        borderRadius: 40,
        paddingTop: 30,
        paddingBottom: 30,
        paddingRight: 30,
        marginTop: 10,
        zIndex: 100

    },
    swipCade: {
        backgroundColor: 'grey',
        height: 150,
        width: 150,
        borderRadius: 40,


        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 7,
        // },
        // shadowOpacity: 0.41,
        // shadowRadius: 9.11,

        // elevation: 14,


    }
})


// render() {
//     return (
//         <SafeAreaView>
//              <PanGestureHandler onGestureEvent={this.onGestureEvent}  minDeltaX={20} maxDeltaY={20} >

//           <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
//                 <Animated.View style={[styles.swipCade,
//                 {transform: [{ translateX: this.translateX }]}]}>
//                     <Text>  </Text>
//                 </Animated.View>
//             </View>

//             </PanGestureHandler>


//         </SafeAreaView>

//     )
// }
// }
// const styles = StyleSheet.create({
// swipCade: {
//     backgroundColor: 'grey',
//     height: 150,
//     width: 200,
//     borderRadius: 40,
//     shadowColor: "#000",
//     shadowOffset: {
//         width: 0,
//         height: 7,
//     },
//     shadowOpacity: 0.41,
//     shadowRadius: 9.11,

//     elevation: 14,


// }
// })
