import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../views/login/LoginScreen';
import MenuScreen from '../views/menu/MenuScreen';
import BookingScreen from '../views/booking/BookingScreen';
import ReviewScreen from '../views/booking/ReviewScreen';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, title: '' }} />
            <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false, title: '' }} />
            <Stack.Screen name="Booking" component={BookingScreen} options={{ headerShown: false, title: '' }} />
            <Stack.Screen name="Review" component={ReviewScreen} options={{ headerShown: false, title: '' }} />
        </Stack.Navigator> 
    );
}