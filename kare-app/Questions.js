import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'

const Questions=props=>{

    return(
        <View style={styles.mainView}>
            <Text style={styles.questionText}>
                Hi from questions
            </Text>
            <View>
                
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    mainView: {
        marginTop: 30,
        backgroundColor: 'white',
        width: Dimensions.get('window').width*.9,
        shadowColor: '#0003ff',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: .7,
        shadowRadius: 4,
        padding: 5
    },
    questionText: {
        color: 'teal'
    }
})
export default Questions