import { NavigationContainer } from "@react-navigation/native";

//import { useAuth } from "../hooks/auth";
// import { AuthRotes } from "./auth.rotes";
import { AppRoutes } from "./app.routes";

//import { RNAVIGATIONTHEME } from "../styles/themes";
//import { Loading } from "../components/Loading";

export function Routes() {
    //const { user, isLoading } = useAuth()

    //if (isLoading) return <Loading />

    return (
        <NavigationContainer /*theme={RNAVIGATIONTHEME}*/>
            { 
                //user ? <AppRoutes /> : <AuthRotes /> 
                // <AuthRotes />
                <AppRoutes />
            }
        </NavigationContainer>
    )
}