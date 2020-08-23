import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, StyleSheet } from 'react-native';

// screens
import SettingsScreen from '../screens/SettingsScreen'
import ProfileScreen from '../screens/ProfileScreen'

export default function TopBarNavigation() {
    const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            tabBarOptions={{
                activeTintColor: '#e91e63',
                inactiveTintColor: 'grey',
                labelStyle: { fontSize: 12, },
                scrollEnabled: true,
                indicatorContainerStyle: { display: 'none' },
                tabStyle: { width: 110, height: 60 }
            }}
        >
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: ({ color, focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles[focused ? 'activeTopTab' : 'notActiveTabTob']}>
                                <Text style={styles[focused ? 'activeText' : 'nonActiveText']}>Fashion</Text>
                            </View>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={SettingsScreen}
                options={{
                    tabBarLabel: ({ color, focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles[focused ? 'activeTopTab' : 'notActiveTabTob']}>
                                <Text style={styles[focused ? 'activeText' : 'nonActiveText']}>Livestyle</Text>
                            </View>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile1"
                component={ProfileScreen}
                options={{
                    tabBarLabel: ({ color, focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles[focused ? 'activeTopTab' : 'notActiveTabTob']}>
                                <Text style={styles[focused ? 'activeText' : 'nonActiveText']}>Hijub</Text>
                            </View>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile2"
                component={ProfileScreen}
                options={{
                    tabBarLabel: ({ color, focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles[focused ? 'activeTopTab' : 'notActiveTabTob']}>
                                <Text style={styles[focused ? 'activeText' : 'nonActiveText']}>Cosmetics</Text>
                            </View>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile3"
                component={ProfileScreen}
                options={{
                    tabBarLabel: ({ color, focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles[focused ? 'activeTopTab' : 'notActiveTabTob']}>
                                <Text style={styles[focused ? 'activeText' : 'nonActiveText']}>Fashion</Text>
                            </View>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile4"
                component={ProfileScreen}
                options={{
                    tabBarLabel: ({ color, focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles[focused ? 'activeTopTab' : 'notActiveTabTob']}>
                                <Text style={styles[focused ? 'activeText' : 'nonActiveText']}>Healty</Text>
                            </View>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    activeTopTab: {
        backgroundColor: '#f1f1f1',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 6,
        paddingHorizontal: 16,
        borderRadius: 40,
        height: 40,
        width: 110,
        top: -6
    },
    notActiveTopTab: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        paddingHorizontal: 16,
        height: 40,
        width: 80,
    },
    activeText: {
        color: 'red'
    },
    nonActiveText: {
        color: '#b4b4b4',
    }
})