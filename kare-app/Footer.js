import React from 'react'
import { View, Text, StyleSheet, Dimensions} from 'react-native'

const Footer=()=>{
    return(
        <View style={styles.footerView}>
            <Text style={{textAlign: 'center'}}>Developed and Designed by Ayoub and Hibatallah from Moroco, and Tsering From United States For Hudson Valley Tech Festival Hackathon </Text>
        </View>
    )
}
export default Footer
const styles=StyleSheet.create({
    footerView:{
        width: Dimensions.get('window').width,
        marginVertical: 30,
        padding: 15,
        alignItems: "center",
        backgroundColor: 'gold',

    }
})