import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import DefaultTextInput from '../../../components/DefaultTextInput';
import DefaultRoundedButton from '../../../components/DefaultRoundedButton';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigator/MainStackNavigator';
import styles from './Styles';
import * as React from 'react';
import { ApiRequestHandler } from '../../../../data/resources/remote/api/ApiRequestHandler';
import { AuthResponse } from '../../../../domain/models/AuthResponse';
import { defaultErrorResponse, ErrorResponse } from '../../../../domain/models/ErrorResponse';
import { container } from '../../../../di/container';
interface Props extends StackScreenProps<RootStackParamList, 'LoginScreen'>{};

export default function LoginScreen({ navigation, route }: Props) {
    const [email,setemail]=React.useState('')
    const [password,setpassword]=React.useState('')
    const loginViewModel=container.resolve('loginViewModel');
    
    function verifiEntry() {
        if(email=='user1@gmail.com' && password=='12345678'){
            navigation.navigate('ClientSearchMapScreen')
        }
        else if(email=='' || password=='')
            alert('El email y la contraseña son requeridos!')
        else alert('La contraseña y el email no estan registrados!')    
    } 
    const handleLogin=async()=>{
        if(email=='' || password==''){
            Alert.alert('Error!!!','El email y la contraseña son requeridos!');
            return;
        }
       const response = await loginViewModel.login(email,password);
       console.log('Response ',response)
       //await login(email, password)
    }
   
    return (
        <View style={styles.container}>

         
            <View style={styles.form}>
            <Text style={styles.textLogin}>Bienvenido a Cooper</Text>
                <Image
                    source={require('../../../../assets/logocooper2.png')}
                    style={styles.imageUser}
                />              

                <DefaultTextInput
                    icon={require('../../../../assets/email1.png')}
                    placeholder='Correo electronico'
                    onChangeText={setemail}
                    value={email}
                    keyboardType='email-address'
                />

                <DefaultTextInput
                    icon={require('../../../../assets/pass1.png')}
                    placeholder='Contraseña'
                    onChangeText={setpassword}
                    value={password}
                    secureTextEntry={true}
                />

                <DefaultRoundedButton
                    text='INICIAR SESION'
                    onPress={() => verifiEntry()}  
                    backgroundColor='#ff7b25'                  
                />

                <View style={styles.containerTextDontHaveAccount}>
                    <View style={styles.divider}></View>
                    <Text style={styles.textDontHaveAccount}>No tienes cuenta?</Text>
                    <View style={styles.divider}></View>
                </View>
            

                <DefaultRoundedButton
                    text='REGISTRATE'
                    onPress={() => navigation.navigate('PerfilChoferScreen')}
                    backgroundColor='#034f84'
                />
              

            </View>


        </View>
    )
}
