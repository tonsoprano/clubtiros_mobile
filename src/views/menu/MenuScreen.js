import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';

import styles from './styles';
import globalStyles from '../global';

export default function MenuScreen({ navigation }){

    const booking = (type) => {
        navigation.navigate('Booking', { type })
    }

    const renderTitle = () => {
        return (
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Selecciona la cancha de tiro</Text>
                    <Text style={styles.title}>que deseas reservar</Text>
                </View>
            </View>
        )
    }

    const renderButtons = () => {
        return (
            <View style={styles.buttonsContainer}>
                <Text style={styles.buttonTitle}>Arma larga</Text>
                <TouchableOpacity style={styles.button} onPress={() => booking('large')}>
                    {/* <Text style={styles.textButton}>1</Text> */}
                    <Image source={require('../../assets/img/large.jpg')} resizeMode='contain' style={{flex: 1, width: '100%', borderRadius: 15 }} />
                </TouchableOpacity>
                <Text style={[styles.buttonTitle, {marginTop: 15}]}>Arma Corta</Text>
                <TouchableOpacity style={styles.button} onPress={() => booking('short')}>
                    {/* <Text style={styles.textButton}>2</Text> */}
                    <Image source={require('../../assets/img/short.jpg')} resizeMode='cover' style={{flex: 1, width: '100%', borderRadius: 15 }} />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <ImageBackground source={require('../../assets/img/bg-main.jpg')} style={globalStyles.bgMain} imageStyle={{opacity: .2}}>
            {renderTitle()}
            {renderButtons()}
        </ImageBackground>
    )
}