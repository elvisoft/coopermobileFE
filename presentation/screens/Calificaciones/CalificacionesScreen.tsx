import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import DefaultTextInput from '../../components/DefaultTextInput';
import DefaultRoundedButton from '../../components/DefaultRoundedButton';
import { StackScreenProps } from '@react-navigation/stack';
import styles from './Styles';
import * as React from 'react';

export default function CalificacionesScreen() {
    const [email,setemail]=React.useState('')
    const [password,setpassword]=React.useState('')
   
    return (
        <View style={styles.container}>         
            <View style={styles.form}>
            <Text style={styles.textLogin}>Tareas y requisitos</Text>
                <Image
                    source={require('../../../assets/perfilconductor1.png')}
                    style={styles.imageUser}
                />     
                <View style={styles.perfilbg}>
                    <Text>Foto Perfil</Text>
                    <Text style={styles.txtred}>Documento faltante!</Text>
                    <TouchableOpacity style={styles.buton}>
                        <Text style={styles.txtwhite }>Cargar</Text>
                    </TouchableOpacity>
                </View>         
                <View style={styles.perfilbg}>
                    <Text>Licencia para conducir</Text>
                    <Text style={styles.txtred}>Documento faltante!</Text>
                    <TouchableOpacity style={styles.buton}>
                        <Text style={styles.txtwhite }>Cargar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.perfilbg}>
                    <Text>DNI</Text>
                    <Text style={styles.txtred}>Documento faltante!</Text>
                    <TouchableOpacity style={styles.buton}>
                        <Text style={styles.txtwhite }>Cargar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.perfilbg}>
                    <Text>Cedula del vehiculo</Text>
                    <Text style={styles.txtred}>Documento faltante!</Text>
                    <TouchableOpacity style={styles.buton}>
                        <Text style={styles.txtwhite }>Cargar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.perfilbg}>
                    <Text>Antecedentes penales</Text>
                    <Text style={styles.txtred}>Documento faltante!</Text>
                    <TouchableOpacity style={styles.buton}>
                        <Text style={styles.txtwhite }>Cargar</Text>
                    </TouchableOpacity>
                </View>              

            </View>


        </View>
    )
}