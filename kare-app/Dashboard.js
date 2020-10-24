import React from 'react'
import {View, Text, StyleSheet, Image, Button} from 'react-native'
const Dashboard=()=>{
    return(
        <View style={styles.dashboardView}>
            <Text style={styles.dashboardHeader}>Hi Tsering!</Text>
            <View>
                <Image
                source={require('./assets/screenTime.png')}
                style={styles.chart}
                />
                <Image
                source={require('./assets/emotionalState.png')}
                style={styles.chart}
                />
            </View>
        </View>
    )
}
export default Dashboard

const styles=StyleSheet.create({
    dashboardView: {
    
    },
    dashboardHeader: {
        color: '#0003ff',
        fontSize: 34,
    },
    chart: {
        marginTop: 10,
        width: 250,
        height: 200
    }
})