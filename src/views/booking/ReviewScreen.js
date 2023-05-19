import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';

import styles from './styles';
import globalStyles from '../global';

export default function ReviewScreen({ navigation }){

    const renderButtons = () => {
        return (
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.reviewButton} onPress={() => navigation.navigate('Menu')}>
                    <Text style={styles.textButton}>Realizar otro reserva</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.reviewButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textButton}>Salir</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <ImageBackground source={require('../../assets/img/bg-main.jpg')} style={globalStyles.bgMain} imageStyle={{opacity: .2}}>
            <View style={styles.mainContainer}>
                <Text style={styles.reviewText}>SU RESERVA SE HA REALIZADO</Text>
                <Text style={styles.reviewText}>CORRECTAMENTE, LOS DATOS SERÁN</Text>
                <Text style={styles.reviewText}>ENVIADOS A SU CORREO ELECTRÓNICO</Text>
                <Text style={styles.reviewText}>REGISTRADO</Text>
            </View>
            {renderButtons()}
        </ImageBackground>
    )
}