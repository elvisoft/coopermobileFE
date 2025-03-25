import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./Styles";
import DefaultTextInput from "../../../components/DefaultTextInput";
import DefaultRoundedButton from "../../../components/DefaultRoundedButton";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigator/MainStackNavigator";
import { useState } from "react";
import { container } from "../../../../di/container";
import { RegisterViewModel } from "./RegisterViewModel";
interface Props extends StackScreenProps<RootStackParamList,'RegisterScreen'>{};
export default function RegisterScreen({navigation,route}:Props) {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const registerViewModel:RegisterViewModel=container.resolve('registerViewModel')

    const handleRegister=async()=>{
        if(email=='' || password==''){
            alert('El email y la contraseña son requeridos!');
            return;
        }
        if(name=='' || lastname==''){
            alert('El nombre y el apellido son requeridos!');
            return;
        }
        if(confirmPassword!==password){
            alert('Las contraseñas no coinciden!');
            return;
        }
       const response=await registerViewModel.register({
            name:name,
            lastname:lastname,
            email:email,
            password:password,
            phone:phone
       });
       console.log('Response ',response)
       //await login(email, password)
    }
    
    return (
        <View style={styles.container}>
            <Image
                style={styles.imageBackground}
                source={require('../../../../assets/saltacity1.jpg')}
            />           
            <View style={styles.form}>
                <TouchableOpacity onPress={()=>navigation.pop()}>
                    <Image
                        style={styles.back}
                        source={require('../../../../assets/left-arrow.png')}
                    />
                </TouchableOpacity>
                <Image style={styles.imageUser} source={require('../../../../assets/user.png')} />
                <Text style={styles.textRegister}>Registro</Text>               
                <DefaultTextInput
                    placeholder="Nombre"
                    value={name}
                    onChangeText={setName}
                    icon={require('../../../../assets/user.png')}
                />
                <DefaultTextInput
                    placeholder="Apellido"
                    value={lastname}
                    onChangeText={setLastname}
                    icon={require('../../../../assets/user_image.png')}
                />
                <DefaultTextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    icon={require('../../../../assets/email.png')}
                />
                <DefaultTextInput
                    placeholder="Telefono"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="numeric"
                    icon={require('../../../../assets/phone.png')}
                />
                <DefaultTextInput
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                    icon={require('../../../../assets/password.png')}
                />
                <DefaultTextInput
                    placeholder="Confirmar Contraseña"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    icon={require('../../../../assets/password.png')}
                />
                <DefaultRoundedButton 
                    text="Registrarse"
                    backgroundColor="black"
                    onPress={() => handleRegister()}
                />
            </View>
        </View>
    );
}