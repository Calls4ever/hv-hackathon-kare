import React from 'react'
import { View, Text, StyleSheet, Dimensions} from 'react-native'

const Footer=()=>{
    return(
        <View style={styles.footerView}>
            <Text>Developed and Designed by</Text>
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