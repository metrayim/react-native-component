import React, { Component } from 'react'
import { Text, View,SafeAreaView } from 'react-native'
import Button from './Button'
import SwipeButton from './SwipeButton'

export default class App extends Component {
    showData=()=>{
        alert('metra')
    }
    render() {
        const {Butt}=styles;
        return (
            <SafeAreaView>
                <Button title="Custom Button" onPress={()=>{this.showData()}} style={Butt}/>
                
                <SwipeButton/>
            </SafeAreaView>
        )
    }
}
const styles={
    Butt:{
        width:'40%',
        height:40,
        backgroundColor:'red'
    }
}