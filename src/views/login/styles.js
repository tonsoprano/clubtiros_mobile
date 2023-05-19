import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    bgLogin: {
        flex: 1, 
        backgroundColor: '#000',
        resizeMode: 'contain',
        width: '100%'
    },
    titleContainer: {
        marginTop: '20%'
    },
    title: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitleContainer: {
        marginTop: '30@vs'
    },
    subtitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    formContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '30@vs'
    },
    formInput: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: '15@vs',
        paddingVertical: '12@vs',
        textAlign: 'center',
        width: '70%'
    },
    formButtonContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    loginButton: {
        backgroundColor: '#223bc9',
        borderRadius: 10,
        borderWidth: 2,
        marginVertical: '10@vs',
        paddingVertical: '8@vs',
        width: '70%'
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
    }
})