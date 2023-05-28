import React, { useState } from 'react';
import { Alert, View, Text, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import { API_KEY, API_URL } from '../../config/constants';

export default function LoginScreen({ navigation }){

    const [email, setEmail] = useState('');
    const [ password, setPassword ] = useState('');

    const login = async () => {
        if(email === '' || password === ''){
            Alert.alert(
                'Error en formulario',
                'Debe ingresar correo y contraseña', [
                    {
                        text: 'Cerrar',
                        style: 'cancel'
                    },
                ],
            );
            return;
        }
        try {
            const req = await fetch(`${API_URL}/app/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': API_KEY
                },
                body: JSON.stringify({
                    email, password
                })
            });
            const data = await req.json();
            console.log(data);
            if(!data.ok || (data.ok && !data.data)){
                Alert.alert(
                    'Error en formulario',
                    'El correo o la contraseña son incorrectos', [
                        {
                            text: 'Cerrar',
                            style: 'cancel'
                        },
                    ],
                );
                return;
            }

            await AsyncStorage.setItem('@user_data', JSON.stringify(data.data));
            navigation.navigate('Menu');
            
        } catch (error) {
            console.log('ERROR EN LOGIN: ', error);
        }
    }

    const setInputValue = (input, value) => {
        switch(input){
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
            default: 
                break;
        }
    }

    const renderTitle = () => {
        return (
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>POLÍGONO DE TIRO</Text>
                    <Text style={styles.title}>J.WISKEY</Text>
                </View>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Bienvenido al sistema de</Text>
                    <Text style={styles.subtitle}>reservas</Text>
                </View>
            </View>
        )
    }

    const renderForm = () => {
        return (
            <View>
                <View style={styles.formContainer}>
                    <TextInput 
                        placeholder='Ingresa tu correo electrónico'
                        value={email}
                        style={styles.formInput}
                        onChangeText={(text) => setInputValue('email', text)}
                    />
                    <TextInput 
                        placeholder='Ingresa tu contraseña'
                        value={password}
                        secureTextEntry={true}
                        style={styles.formInput}
                        onChangeText={(text) => setInputValue('password', text)}
                    />
                </View>
                <View style={styles.formButtonContainer}>
                    <TouchableOpacity style={styles.loginButton} onPress={login}>
                        <Text style={styles.textButton}>Ingresar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <ImageBackground source={require('../../assets/img/bg-login.jpg')} style={styles.bgLogin}>
            {renderTitle()}
            {renderForm()}
        </ImageBackground>
    )
}