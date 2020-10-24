import React from 'react'
import {View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Meditation=props=>{
    return(
        <View style={styles.mainMusicView}>
            <View style={styles.musicHeaderView}>
            <Text style={styles.musicText}>
                   Optional
                </Text>
                {/* <Icon
                // name='meditation'
                // size='24'
                style={{color: 'white'}}
                />
                 */}
            </View>
            <View style={styles.musicListView}>
                <TouchableOpacity>
                    <Text style={styles.songTitle}>
                        Best Day of My Life
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.songTitle}>
                        Eye of The Tiger
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.songTitle}>
                        Hall of Fame
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.songTitle}>
                        The Climb
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Meditation
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
    backgroundColor: 'silver',
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