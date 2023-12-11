//Contexto de rota
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FilaIn } from '../screens/FilaIn';
import { FilaOut } from '../screens/FilaOut';
import Entypo from 'react-native-vector-icons/Entypo';
import { MaterialIcons} from '@expo/vector-icons';

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes(){
    return  (
        <Navigator
            screenOptions={{
                headerShown:false,
                tabBarActiveTintColor:'#6490AC',
                tabBarInactiveTintColor: '#062F40'
            }}
        >
            <Screen 
                name='FilaIn'
                component={FilaIn}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name='home' size={25} color={color}/>
                    ),
                  }}
            />
            <Screen 
                name='FilaOut'
                component={FilaOut}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name='person' size={30} color={color}/>
                    ),
                  }}
            />
        </Navigator>
    )
}