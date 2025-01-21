import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import DefaultTextInput from '../../../components/DefaultTextInput';
import DefaultRoundedButton from '../../../components/DefaultRoundedButton';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigator/MainStackNavigator';
import styles from './Styles';
import * as React from 'react';
interface Props extends StackScreenProps<RootStackParamList, 'LoginScreen'>{};

export default function LoginScreen({ navigation, route }: Props) {
    const [email,setemail]=React.useState('')
    const [password,setpassword]=React.useState('')

    
    function verifiEntry(email:string, password:string) {
        if(email=='user1@gmail.com' && password=='12345678'){
            navigation.navigate('DashboardScreen')
        }
        else if(email=='' || password=='')
            alert('El email y la contraseña son requeridos!')
        else alert('La contraseña y el email no estan registrados!')    
    } 

    return (
        <View style={styles.container}>

            <Image
                style={styles.imageBackground}
                source={require('../../../../assets/saltacity1.jpg')}
            />

            <View style={styles.form}>
            <Text style={styles.textLogin}>Bienvenido a Cooper</Text>
                <Image
                    source={require('../../../../assets/user.png')}
                    style={styles.imageUser}
                />
                <Text style={styles.textLogin}>LOGIN</Text>

                <DefaultTextInput
                    icon={require('../../../../assets/email.png')}
                    placeholder='Correo electronico'
                    onChangeText={setemail}
                    value={email}
                    keyboardType='email-address'
                />

                <DefaultTextInput
                    icon={require('../../../../assets/password.png')}
                    placeholder='Contraseña'
                    onChangeText={setpassword}
                    value={password}
                    secureTextEntry={true}
                />

                <DefaultRoundedButton
                    text='INICIAR SESION'
                    onPress={() => verifiEntry(email,password)}                    
                />

                <View style={styles.containerTextDontHaveAccount}>
                    <View style={styles.divider}></View>
                    <Text style={styles.textDontHaveAccount}>No tienes cuenta?</Text>
                    <View style={styles.divider}></View>
                </View>
            

                <DefaultRoundedButton
                    text='REGISTRATE'
                    onPress={() => navigation.navigate('RegisterScreen')}
                    backgroundColor='black'
                />

            </View>


        </View>
    )
}
