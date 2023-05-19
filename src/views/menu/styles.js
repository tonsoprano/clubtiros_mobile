import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    titleContainer: {
        marginTop: '20%'
    },
    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        alignContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '50@vs',
        width: '100%'
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        alignContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor: '#223bc9',
        borderRadius: 10,
        height: '150@vs',
        textAlign: 'center',
        width: '50%'
    },
    textButton: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 30
    },
    
})
