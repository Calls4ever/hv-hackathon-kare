import React, { useState } from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import { data } from './data'
console.log("data coming.....",data[0].diagnosisQuestions[0].question)
const Questions=props=>{
    
    const [state, setState]=useState({
        cases: '',
        countD: 0,
        countA: 0,
        countJ: 0,
        countF: 0
    })
const pressHandler=(text)=>{

}
    
const depressedHandler=()=>{
return(
    <View>
            <Text style={styles.questionText}>
                {data[0].diagnosisQuestions[state.countD].question}
            </Text>
            <View style={styles.optionView}>
                {data[0].diagnosisQuestions[state.countD].options.map(o=>{
                    return(
                        <View style={styles.buttonView}>
                        <TouchableOpacity
                        onPress={()=>setState({...state, countD: state.countD+1})}
                        >
                            <Text style={styles.optionText}>
                                {o}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    )
                })}  
            </View>
        </View>
    
)
}
const renderDataQuestions=()=>{
    if(state.countD>=data[0].diagnosisQuestions.length && state.cases==='depressed'){
        setState({...state, cases: 'advice'})
    }else if(state.countA>=data[0].advices.length && state.cases==='advice'){
        setState({...state, cases: ''})
    }
switch(state.cases){
    case 'depressed':return depressedHandler()
    case '': return renderInitialQuestion()
}
}

const renderInitialQuestion=()=>{
    return(
        <View>
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
                    <TouchableOpacity
                    onPress={()=>setState({...state, cases:'depressed'})}
                    >
                        <Text style={styles.optionText}>
                            #depressed
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    )
}
    return(
        <View style={styles.mainView}>
            {renderDataQuestions()}
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
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowRadius: 5,
        shadowOpacity: .8

    },
    optionText: {
        color: 'white',
        fontSize: 19
    }
})
export default Questions