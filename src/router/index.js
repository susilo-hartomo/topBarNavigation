import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import TopBarNavigation from './TopBarNavigation'

// Screen
import HomeScreen from '../screens/HomeScreen'

export default function Router() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen options={{
                headerShown: false
            }} name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}