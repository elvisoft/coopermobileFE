import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "../screens/auth/login/LoginScreen";
import RegisterScreen from "../screens/auth/register/RegisterScreen";
import DashboardScreen from "../screens/dashboard/dashboardScreen"
import GetViajeScreen from "../screens/PedirViaje/getviajeScreen";
import ClientSearchMapScreen from "../screens/client/searchmap/clientSearchMapScreen";
import PerfilChoferScreen from "../screens/chofer/perfilchoferScreen";

export type RootStackParamList = {
    LoginScreen: undefined,
    RegisterScreen: undefined,
    DashboardScreen: undefined,
    GetViajeScreen:undefined,
    ClientSearchMapScreen:undefined,
    PerfilChoferScreen:undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="LoginScreen"
                component={LoginScreen}
            />

            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="RegisterScreen"
                component={RegisterScreen}
            />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="DashboardScreen"
                component={DashboardScreen}
            />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="ClientSearchMapScreen"
                component={ClientSearchMapScreen}
            />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="GetViajeScreen"
                component={GetViajeScreen}
            />
             <Stack.Screen
                options={{
                    headerShown: true,
                    title:'Cooper Conductor'
                }}
                name="PerfilChoferScreen"
                component={PerfilChoferScreen}
            />

        </Stack.Navigator>
    )

}