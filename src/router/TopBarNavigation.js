import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// screens
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { View } from 'react-native';

export default function TopBarNavigation() {
    const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            tabBarOptions={{
                activeTintColor: '#e91e63',
                labelStyle: { fontSize: 12 },
                style: { backgroundColor: 'powderblue' },
            }}
        >
            {/* <Tab.Screen
                name="Feed"
                component={HomeScreen}
                options={{ tabBarLabel: 'Home' }}
            /> */}
            <Tab.Screen
                name="Notifications"
                component={SettingsScreen}
                options={{ tabBarLabel: 'Updates' }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ tabBarLabel: 'Profile' }}
            />
        </Tab.Navigator>
    );
}