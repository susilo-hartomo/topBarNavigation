import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// screens
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { View, Text } from 'react-native';

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
                tabStyle: { width: 100 }
            }}
        >
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ focused, color }) => {
                        focused && <View style={{ backgroundColor: '#b1b1b1' }}>
                            <Text style={{ color }}>OK</Text>
                        </View>
                    }
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={SettingsScreen}
                options={{ tabBarLabel: 'Updates', }}
            />
            <Tab.Screen
                name="Profile1"
                component={ProfileScreen}
                options={{ tabBarLabel: 'Profile' }}
            />
            <Tab.Screen
                name="Profile2"
                component={ProfileScreen}
                options={{ tabBarLabel: 'Profile' }}
            />
            <Tab.Screen
                name="Profile3"
                component={ProfileScreen}
                options={{ tabBarLabel: 'Profile' }}
            />
            <Tab.Screen
                name="Profile4"
                component={ProfileScreen}
                options={{ tabBarLabel: 'Profile' }}
            />
        </Tab.Navigator>
    );
}