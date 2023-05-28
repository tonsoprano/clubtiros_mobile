import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    titleContainer: {
        // marginTop: '-4%'
    },
    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: '30@vs',
        paddingHorizontal: '50@s'
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    labelForm: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonDate: {
        backgroundColor: '#fff',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '20@vs',
        paddingHorizontal: '25@s',
        paddingVertical: '8@vs',
        width: '50%'
    },
    textDate: {
        color: '#000',
        fontSize: 14,
        
    },
    sendButton: {
        backgroundColor: '#223bc9',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: '60@vs',
        paddingVertical: '8@vs',
        width: '100%'
    },
    mainContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '40%'
    },
    reviewButton: {
        backgroundColor: '#223bc9',
        borderRadius: 10,
        borderWidth: 1,
        marginVertical: '10@vs',
        paddingVertical: '8@vs',
        width: '70%'
    },
    containerButton: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '30@vs'
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
    },
    reviewText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
