import React, { Component } from 'react'
import { Text, View,TouchableOpacity,StyleSheet } from 'react-native'

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.Button}>
             <Text>{title}</Text>
            </TouchableOpacity>
        )
    }
}
const styles=StyleSheet.create({
    Button:{
        
    }
})