import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "../screens/auth/login/LoginScreen";
import RegisterScreen from "../screens/auth/register/RegisterScreen";
import DashboardScreen from "../screens/dashboard/dashboardScreen"
import GetViajeScreen from "../screens/PedirViaje/getviajeScreen";

export type RootStackParamList = {
    LoginScreen: undefined,
    RegisterScreen: undefined,
    DashboardScreen: undefined,
    GetViajeScreen:undefined
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
                name="GetViajeScreen"
                component={GetViajeScreen}
            />

        </Stack.Navigator>
    )

}