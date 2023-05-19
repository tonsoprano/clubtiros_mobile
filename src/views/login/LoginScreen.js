import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function LoginScreen({ navigation }){

    const [email, setEmail] = useState('');
    const [ password, setPassword ] = useState('');

    const login = () => {
        navigation.navigate('Menu');
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
                    />
                    <TextInput 
                        placeholder='Ingresa tu contraseña'
                        value={password}
                        secureTextEntry={true}
                        style={styles.formInput}
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