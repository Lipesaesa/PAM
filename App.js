import LoginScreen from "./src/screens/LoginScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroScreen from "./src/screens/CadastroScreen";
import AcessoScreen from "./src/screens/AcessoScreen";

  const Stack = createNativeStackNavigator();



  export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
       <Stack.Screen name="Login" component={LoginScreen}/>
       <Stack.Screen name="Cadastro" component={CadastroScreen} />
       <Stack.Screen name="Acesso" component={AcessoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}