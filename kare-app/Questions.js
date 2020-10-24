import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'

const Questions=props=>{

    return(
        <View style={styles.mainView}>
            <Text style={styles.questionText}>
                Hi, Tsering! How are you feeling today?
            </Text>
            <View style={styles.optionView}>
                <View style={styles.buttonView}>
                    <TouchableOpacity>
                        <Text style={styles.optionText}>
                            #inspired
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity>
                        <Text style={styles.optionText}>
                            #excited
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity>
                        <Text style={styles.optionText}>
                            #exhausted
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity>
                        <Text style={styles.optionText}>
                            #insecure
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity>
                        <Text style={styles.optionText}>
                            #depressed
                        </Text>
                    </TouchableOpacity>
                </View>
                
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
            width: 4,
            height: 4
        },
        shadowOpacity: .9,
        shadowRadius: 4,
        
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 20
    },
    questionText: {
        color: '#0003ff',
        fontSize: 29,
        textAlign: 'center',
        padding: 10,
        borderBottomColor: '#0003ff',
        borderBottomWidth: 1
        
    },
    optionView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: 5
    },
    buttonView: {
        backgroundColor: '#0003ff',
        padding: 10,
        borderRadius: 35,
        margin: 4,

    },
    optionText: {
        color: 'white',
        fontSize: 19
    }
})
export default Questions