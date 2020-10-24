import React from 'react'
import {View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import * as Linking from 'expo-linking'

const Game=props=>{
    const handlePress=()=>{
        Linking.openURL('https://apps.apple.com/us/app/among-us/id1351168404')
    }
    return(
        <View style={styles.mainMusicView}>
            <View style={styles.musicHeaderView}>
            <Text style={styles.musicText}>
                   Recommended
                </Text>
                <Icon
                name='gamepad'
                size='24'
                style={{color: 'white'}}
                />
                
            </View>
            <View style={styles.musicListView}>
                <TouchableOpacity
                onPress={handlePress}>
                    <Text style={styles.songTitle}>
                        Among Us
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={handlePress}
                >
                    <Text style={styles.songTitle}>
                        Fall Guys
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.songTitle}>
                        Minecraft
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.songTitle}>
                        Candy Crush
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Game
const styles=StyleSheet.create({
mainMusicView: {
    width: Dimensions.get('window').width*.9,
    alignSelf: 'center',
    backgroundColor: 'white',
        shadowColor: '#0003ff',
        shadowOffset: {
            width: 4,
            height: 4
        },
        shadowOpacity: .9,
        shadowRadius: 4,
        
        borderRadius: 10,
        marginTop: 10,
        

},
musicHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'orange',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
},
musicText: {
    color: 'white',
    fontSize: 24
},
musicListView: {
    padding: 10,

},
songTitle: {
    color: '#0003ff',
    fontSize: 18,
    padding: 2,
}
})