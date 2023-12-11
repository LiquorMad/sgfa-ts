//Contexto de rota
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FilaIn } from '../screens/FilaIn';
import { FilaOut } from '../screens/FilaOut';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes(){
    return  (
        <Navigator
            screenOptions={{
                headerShown:false
            }}
        >
            <Screen 
                name='FilaIn'
                component={FilaIn}
            />
            <Screen 
                name='FilaOut'
                component={FilaOut}
            />
        </Navigator>
    )
}