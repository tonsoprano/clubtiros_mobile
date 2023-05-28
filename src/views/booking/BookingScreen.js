import React, { useState } from 'react';
import { Alert, View, Text, TouchableOpacity, ImageBackground, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment-timezone';

import styles from './styles';
import globalStyles from '../global';
import Header from '../components/Header';
import { API_KEY, API_URL } from '../../config/constants';

export default function BookingScreen({ navigation, route }){

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimeFromPicker, setShowTimeFromPicker] = useState(false);
    const [showTimeToPicker, setShowTimeToPicker] = useState(false);
    const [date, setDate] = useState(new Date());
    const [timeFrom, setTimeFrom] = useState(new Date());
    const [timeTo, setTimeTo] = useState(new Date());
    const [timeFromText, setTimeFromText] = useState('09:00');
    const [timeToText, setTimeToText] = useState('21:00');
    const [showLines, setShowLines] = useState(false);
    const [automated, setAutomated] = useState(false);
    const [line, setLine] = useState(null);
    const [lineText, setLineText] = useState(null);
    const [lines, setLines] = useState([
        { label: 'Línea 1', value: 1, key: 1 },
        { label: 'Línea 2', value: 2, key: 2 },
        { label: 'Línea 3', value: 3, key: 3 },
        { label: 'Línea 4', value: 4, key: 4 },
        { label: 'Línea 5', value: 5, key: 5 },
    ]);

    const sendBooking = () => {
        let automatedText = automated ? 'Si' : 'No';
        let lineText = lines.find(l => l.value === line);
        if(line === null){
            Alert.alert(
                'Error en formulario',
                'Debe seleccionar una línea', [
                    {
                        text: 'Cerrar',
                        style: 'cancel'
                    },
                ],
            );
            return;
        }
        Alert.alert(
            'Reserva',
            `- Fecha: ${moment(date).format('DD/MM/YYYY')}\n- Desde: ${moment(timeFrom).format('HH:mm')}\n- Hasta: ${moment(timeTo).format('HH:mm')}\n- Línea: ${lineText.label}\n- Automatizado: ${automatedText}`, [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Confirmar',
                    style: 'default',
                    onPress: booking
                },
            ],
        );
    }

    const booking = async () => {
        const user = JSON.parse(await AsyncStorage.getItem('@user_data'));
        let lineType = route.params.type === 'large' ? 1 : 2;
        const req = await fetch(`${API_URL}/app/requestBooking`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY
            },
            body: JSON.stringify({
                userId: user.userId,
                lineType: lineType,
                lineId: line,
                date: moment(date).format('YYYY-MM-DD'),
                timeStart: moment(timeFrom).format('HH:mm'),
                timeEnd: moment(timeTo).format('HH:mm'),
                automatizated: automated,
            })
        });
        const data = await req.json();
        console.log(data);
        if(!data.ok && data.status === 3){
            Alert.alert(
                'Error en reserva',
                'Hubo un error interno en el servidor. Intente nuevamente', [
                    {
                        text: 'Cerrar',
                        style: 'cancel'
                    },
                ],
            );
            return;
        }
        if(!data.ok && data.status === 2){
            Alert.alert(
                'Error en reserva',
                'Ya existe una reserva en ese horario. Intente con otro.', [
                    {
                        text: 'Cerrar',
                        style: 'cancel'
                    },
                ],
            );
            return;
        }

        navigation.navigate('Review');
    }

    const onChangeDate = (event, selectedDate) => {
        console.log(selectedDate)
        let dateSelected = selectedDate || date;
        setDate(dateSelected);
        setShowDatePicker(false);
    };

    const onChangeTimeFrom = (event, selectedTime) => {
        console.log(selectedTime)
        let time = selectedTime || timeFrom;
        setTimeFrom(time);
        setShowTimeFromPicker(false);
    };

    const onChangeTimeTo = (event, selectedTime) => {
        let time = selectedTime || timeTo;
        setTimeTo(time);
        setShowTimeToPicker(false);
    };

    const renderTitle = () => {
        return (
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Reserva de linea de tiro</Text>
                </View>
            </View>
        )
    }

    const renderForm = () => {
        const renderDatePicker = () => {
            return (
                <DateTimePicker
                    testID="date"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    display="spinner"
                    minimumDate={new Date()}
                    style={{alignSelf: 'center', width: 400, height: 400, backgroundColor: "white"}}
                    onChange={onChangeDate}
                />
            )
        }
        const renderTimeFromPicker = () => {
            return (
                <DateTimePicker
                    testID="timeFrom"
                    value={timeFrom}
                    mode={'time'}
                    is24Hour={true}
                    display="spinner"
                    minimumDate={new Date()}
                    style={{alignSelf: 'center', width: 400, height: 400, backgroundColor: "white"}}
                    onChange={onChangeTimeFrom}
                />
            )
        }
        const renderTimeToPicker = () => {
            return (
                <DateTimePicker
                    testID="timeTo"
                    value={timeTo}
                    mode={'time'}
                    is24Hour={true}
                    display="spinner"
                    minimumDate={new Date()}
                    style={{alignSelf: 'center', width: 400, height: 400, backgroundColor: "white"}}
                    onChange={onChangeTimeTo}
                />
            )
        }
        const renderLinesPicker = () => {
            return (
                <DropDownPicker
                    open={showLines}
                    value={line}
                    items={lines}
                    setOpen={setShowLines}
                    setValue={setLine}
                    setItems={setLines}
                />
            )
        }
        const toggleTimeSwitch = () => {
            setAutomated(previousState => !previousState);
        }
      
        return (
            <View style={styles.formContainer}>
                <View style={styles.formGroup}>
                    <Text style={styles.labelForm}>Selecciona una fecha</Text>
                    <TouchableOpacity style={styles.buttonDate} onPress={() => setShowDatePicker(true)}>
                        <Text style={styles.textDate}>{moment(date).format('DD/MM/YYYY') || moment().zone('America/Santiago').format('DD/MM/YYYY')}</Text>
                    </TouchableOpacity>
                    {showDatePicker && renderDatePicker()}  
                </View>
                <View style={[styles.formGroup, {marginTop: 15}]}>
                    <Text style={styles.labelForm}>Selecciona un horario</Text>
                    <Text style={[styles.labelForm, {marginTop: 15}]}>Desde</Text>
                    <TouchableOpacity style={styles.buttonDate} onPress={() => setShowTimeFromPicker(true)}>
                        <Text style={styles.textDate}>{moment(timeFrom).format('HH:mm') || timeFromText}</Text>
                    </TouchableOpacity>
                    {showTimeFromPicker && renderTimeFromPicker()}  
                    <Text style={[styles.labelForm, {marginTop: 15}]}>Hasta</Text>
                    <TouchableOpacity style={styles.buttonDate} onPress={() => setShowTimeToPicker(true)}>
                        <Text style={styles.textDate}>{moment(timeTo).format('HH:mm') || timeToText}</Text>
                    </TouchableOpacity>
                    {showTimeToPicker && renderTimeToPicker()}  
                </View>
                <View style={[styles.formGroup, {marginTop: 15}]}>
                    <Text style={styles.labelForm}>Selecciona una línea de tiro</Text>
                    {renderLinesPicker()}  
                </View>
                <View style={[styles.formGroup, {marginTop: 25}]}>
                    <TouchableOpacity style={styles.sendButton} onPress={sendBooking}>
                        <Text style={styles.textButton}>Aceptar</Text>
                    </TouchableOpacity>
                </View>
                {route.params.type === 'short' && (
                    <View style={[styles.formGroup, {marginTop: -115}]}>
                        <Text style={styles.labelForm}>Automatizado</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#223bc9" }}
                            thumbColor={"#f4f3f4"}
                            onValueChange={toggleTimeSwitch}
                            value={automated}
                            style={{alignSelf: 'flex-start'}}
                        />
                    </View>
                )}
            </View>
        )
    }

    return (
        <ImageBackground source={require('../../assets/img/bg-main.jpg')} style={globalStyles.bgMain} imageStyle={{opacity: .2}}>
            <View>
                <Header navigation={navigation} />
            </View>
            {renderTitle()}
            {renderForm()}
        </ImageBackground>
    )
}