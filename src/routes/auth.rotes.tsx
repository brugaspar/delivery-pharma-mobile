import { createNativeStackNavigator } from '@react-navigation/native-stack'
//import { CaretLeft } from '../assets/phosphor.icons'

import { SignIn } from '../screens/SignIn'
import { SignUp } from '../screens/SignUp'

const {
    Navigator,
    Screen
} = createNativeStackNavigator()

export function AuthRotes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                //title: ' ',
                animation: 'fade_from_bottom',
                // headerLeft: (props) => (
                //     <IconButton
                //         icon={
                //             <CaretLeft size={24} color={colors.gray[100]}/>
                //         }
                //         _pressed={{
                //             bg:'gray.700'
                //         }}
                //         onPress={() => navigation.goBack() }
                //     />
                // )
            }}
        >
            <Screen 
                name='SignIn' 
                component={SignIn}
                /*options={{
                    headerShown: false,
                }}*/
            />
            <Screen 
                name='SignUp' 
                component={SignUp} 
                options={{
                    //headerShown: true,
                    /*headerStyle: { 
                        backgroundColor: colors.gray[700] 
                    },
                    headerTintColor: colors.gray[100],*/
                    
                }}
            />
        </Navigator>
    )
}