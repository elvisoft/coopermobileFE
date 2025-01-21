import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import * as React from 'react';
import * as Location from 'expo-location';
import MapView, { LatLng, Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_KEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import DefaultRoundedButton from '../../components/DefaultRoundedButton';
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigator/MainStackNavigator";
const carImage = require('../../../assets/car1.png');
interface Props extends StackScreenProps<RootStackParamList,'DashboardScreen'>{}; 

export default function DashboardScreen({navigation,route}:Props) {
    const [origin, setOrigin] = React.useState({
        latitude: -24.789029,
        longitude:  -65.411597,
      });
    const [destination, setDestination] = React.useState({
    latitude: -24.789229,
    longitude: -65.411797,
    });
    const [selectedPlace,setSelectedPlace]=React.useState<LatLng | undefined>(undefined);
    React.useEffect(() => {
        getLocationPermission();
    }, [])

    async function getLocationPermission() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if(status !== 'granted') {
          alert('Permiso denegado!');
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        const current = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        }
        setOrigin(current);
    }
    return (
        <View style={styles.container}>
            <Text>Panel de control</Text>           
            <MapView style={styles.map}
                initialRegion={{
                    latitude: origin.latitude,
                    longitude: origin.longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04
                }} >
                <Marker 
                draggable
                coordinate={origin}
                image={carImage}
                onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
                />
                <Marker 
                draggable
                coordinate={destination}
                onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
                />
                <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_KEY}
                strokeColor="black"
                strokeWidth={5}
                />    
            </MapView>
            <GooglePlacesAutocomplete placeholder='Recoger en' query={{key:GOOGLE_MAPS_KEY, language:'es'}}
                onPress={(data,details=null)=>{
                    console.log('Details ',details)
                    setSelectedPlace(details?.location)
                }}
                debounce={200} styles={{container: styles.placeautocomplete}}    >
                
            </GooglePlacesAutocomplete>
            <View style={styles.viewbtn}>
                <DefaultRoundedButton               
                    text='Solicitar Viaje'
                    onPress={() => navigation.navigate('GetViajeScreen')}
                    backgroundColor='black'
                />
            </View>
            
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    map:{
        width:'100%',
        height:'100%'
    },
    placeautocomplete:{
        position:'absolute',
        top:50,
        left:10,
        right:10,
        zIndex:1
    },
    viewbtn:{
        position:'absolute',
        bottom:15,
        left:10,
        right:10,
        zIndex:1
    }
})