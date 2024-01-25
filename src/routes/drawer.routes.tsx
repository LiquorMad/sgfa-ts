//Contexto de rota
import { createDrawerNavigator,DrawerContentScrollView,
    DrawerItemList 
} from '@react-navigation/drawer';
import { FilaIn } from '../screens/FilaIn';
import { FilaOut } from '../screens/FilaOut';
import { Punicao } from '../screens/Punicao';


import { Text,View,Image,TouchableOpacity} from 'react-native';
import { Login } from '../screens/Login';

const { Screen, Navigator } = createDrawerNavigator();

  function CustomDrawerContent(props:any) {
    return (
      <View style={{flex:1, backgroundColor:'#062F40'}}>
        <DrawerContentScrollView {...props}>
            <View style={{
                flexDirection: 'row', 
                justifyContent:'space-between',
                alignItems: 'center',
                padding: 20,
                backgroundColor: '#062F40',
                marginBottom: 20,
                }}>
                <View >
                    <Text 
                        style={{
                            color:'#fff'}}> 
                            Leonildo Moniz 
                    </Text>
                    <Text 
                        style={{
                            color:'#fff'}}> 
                            leonildomonizlm2@gmail.com 
                    </Text>
                </View>
                <Image 
                    source={{
                        uri: './../assets/images/FTPleonildo.jpg',
                    }}
                    style={{width:60,height:60, borderRadius:60}}
                />
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <TouchableOpacity 
        style={{
            position:'absolute', right: 0, left:0, 
            bottom:50, backgroundColor:'#f6f6f6'}}>
        <Text 
            style=
                {{position:'absolute', 
                  bottom:0, 
                  color:'#fff'
                }}>Logout
        </Text>
      </TouchableOpacity>
      </View>

    );
  }
const  DrawerNavigator = () =>{
    return(
        <Navigator 
            screenOptions={{
                headerShown:false
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Screen 
                name='Lgin'
                component={Login}
                options={{
                    drawerLabel: 'Página de Login'
                }}
            />
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
                options={{drawerLabel: 'Fila de Saída'}}
            />
            <Screen 
                name='Punicao'
                component={Punicao}
                options={{drawerLabel: ' Punição'}}
            />
            
        </Navigator>
    )
    
}
export function DrawerRoutes(){
    return  (
        <DrawerNavigator/>
    )
}