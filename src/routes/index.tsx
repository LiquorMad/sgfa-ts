//Desponibilizar rotas para a aplicação
import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import { DrawerRoutes } from "./drawer.routes";
import { TabRoutes } from "./tab.routes";

export function Routes(){
    return (
        <NavigationContainer>
            <DrawerRoutes/>
        </NavigationContainer>
    )
}