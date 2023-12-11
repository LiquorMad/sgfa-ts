//Contexto de rota
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FilaIn } from '../screens/FilaIn';
import { FilaOut } from '../screens/FilaOut';

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes(){
    return  (
        <Navigator>
            <Screen 
                name='FilaIn'
                component={FilaIn}
                options={{
                    drawerLabel: 'Fila de Entrada'
                }}
            />
            <Screen 
                name='FilaOut'
                component={FilaOut}
                options={{
                    drawerLabel: 'Fila de Saída'
                }}
            />
        </Navigator>
    )
}