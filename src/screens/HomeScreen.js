import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TopBarNavigation from '../router/TopBarNavigation'

const { width } = Dimensions.get('window')

const HomeScreen = () => {
    return (
        <View style={styles.conatiner}>
            <View style={styles.cardHeader}>
                <Text style={{ fontSize: 24, fontWeight: '700' }}>Home</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 12 }}>
                        <MaterialCommunityIcons name="magnify" color='grey' size={26} />
                    </View>
                    <MaterialCommunityIcons name="bell-outline" color='grey' size={26} />
                </View>
            </View>
            <TopBarNavigation />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        paddingTop: 40,
    },
    cardHeader: {
        width,
        height: 60,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})
