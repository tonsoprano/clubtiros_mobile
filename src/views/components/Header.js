import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

export default function Header({navigation}) {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.icon} source={require('../../assets/img/left-arrow.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        height: '55@vs',
        justifyContent: 'flex-start',
        paddingTop: '35@vs',
        paddingLeft: '10@s',
    },
    icon: {
        height: '30@vs',
        width: '30@s',
    },
});