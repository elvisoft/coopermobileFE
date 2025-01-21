import { useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import styles from "./Styles";
import DefaultTextInput from "../../components/DefaultTextInput";
import DefaultRoundedButton from "../../components/DefaultRoundedButton";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigator/MainStackNavigator";
interface Props extends StackScreenProps<RootStackParamList,'GetViajeScreen'>{};

export default function GetViajeScreen({navigation,route}:Props) {
    const [origen, setOrigen] = useState('');
    const [destino, setDestino] = useState('');
    const [precio, setPrecio] = useState('');
    const [tiempollegada, setTiempoLlegada] = useState('');
    const [namechofer, setNameChofer] = useState('');
    const [telefonochofer, setTelefonoChofer] = useState('');

    return (
        <View style={styles.container}>
            <Image
                style={styles.imageBackground}
                source={require('../../../assets/saltacity2.jpg')}
            />           
            <View style={styles.form}>
                <TouchableOpacity onPress={()=>navigation.pop()}>
                    <Image
                        style={styles.back}
                        source={require('../../../assets/left-arrow.png')}
                    />
                </TouchableOpacity>
                <Image style={styles.imageUser} source={require('../../../assets/map.png')} />
                <Text style={styles.textRegister}>Nuevo Viaje</Text>               
                <DefaultTextInput
                    placeholder="Origen"
                    value={origen}
                    onChangeText={setOrigen}
                    icon={require('../../../assets/location_home.png')}
                />
                <DefaultTextInput
                    placeholder="Destino"
                    value={destino}
                    onChangeText={setDestino}
                    icon={require('../../../assets/location_home.png')}
                />
                <DefaultTextInput
                    placeholder="Precio Estimado"
                    value={precio}
                    onChangeText={setPrecio}                   
                    icon={require('../../../assets/dolar.png')}
                />
                <DefaultTextInput
                    placeholder="Tiempo llegada"
                    value={tiempollegada}
                    onChangeText={setTiempoLlegada}                   
                    icon={require('../../../assets/reloj.png')}
                />
                <DefaultTextInput
                    placeholder="Nombre Chofer"
                    value={namechofer}
                    onChangeText={setNameChofer}
                    icon={require('../../../assets/user.png')}
                />
                <DefaultTextInput
                    placeholder="Telefono Chofer"
                    value={telefonochofer}
                    onChangeText={setTelefonoChofer}
                    icon={require('../../../assets/phone.png')}
                />
                <View style={styles.viewbtn} >
                    <DefaultRoundedButton 
                        text="Confirmar"
                        backgroundColor="black"
                        onPress={()=>{
                            Alert.alert('Nuevo Viaje', 'Gracias por confirmar, porfavor espere a que llegue su vehiculo!', [
                                {
                                  text: 'Cancelar',
                                  onPress: () => console.log('Cancel Pressed'),
                                  style: 'cancel',
                                },
                                {text: 'Aceptar', onPress: () => console.log('OK Pressed')},
                              ]);
                        }}
                    />
                </View>
               
            </View>
        </View>
    );

}