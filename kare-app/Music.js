import React from 'react'
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto'
import * as Linking from 'expo-linking'

const Music=props=>{
    const handlePress=()=>{
        
        Linking.openURL('https://open.spotify.com/track/5Hroj5K7vLpIG4FNCRIjbP?si=qfsVdZHQTpa-gIjPElL_Vg')
    }
    
    return(
        <View style={styles.mainMusicView}>
            <View style={styles.musicHeaderView}>
            <Text style={styles.musicText}>
                   Highly Recommended
                </Text>
                <Icon
                name='music-note'
                size='24'
                style={{color: 'white'}}
                />
                
            </View>
            <View style={styles.musicListView}>
                <TouchableOpacity
                onPress={handlePress}
                >
                    <Text style={styles.songTitle}>
                        Best Day of My Life
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={handlePress}
                >
                    <Text style={styles.songTitle}>
                        Eye of The Tiger
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={handlePress}
                >
                    <Text style={styles.songTitle}>
                        Hall of Fame
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={handlePress}
                >
                    <Text style={styles.songTitle}>
                        The Climb
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Music
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
    backgroundColor: 'red',
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
},
musicTextS: {
    color: 'white',
    fontSize: 20,
    textShadowColor: 'black',
    textShadowOffset:{
        width: 2,
        height: 2
    },
    textShadowRadius: 3,
}
})