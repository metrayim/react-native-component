import React, { Component } from 'react'
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native'

export default class Button extends Component {
    render() {
        const {title,onPress,style}=this.props
        const {Button,TextSyle}=styles
        return (
            <TouchableOpacity onPress={onPress} style={[Button,style]}>
                <Text style={[TextSyle]}>
                    {title}
                </Text>
            </TouchableOpacity>
        )
    }
}
const styles=StyleSheet.create({
    Button:{
        width: '90%',
        height: 40,
        padding: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        marginTop: 30,
        marginLeft: 15  
    },
    TextSyle:{
        color: '#fff',
        textAlign: 'center',
    }
})