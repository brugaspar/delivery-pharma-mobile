import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { useNavigation } from '@react-navigation/native'

import { TabRoutes } from './tab.routes'

const { 
    Navigator, 
    Screen 
} = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator 
            screenOptions={{
                animation: 'fade_from_bottom',
                headerShown: false, 
                // headerStyle: { 
                //     backgroundColor: colors.gray[600] 
                // },
                // headerTintColor: colors.gray[100],
                // headerTitleAlign: 'center',
            }}
        >
            <Screen name='TabRoutes' component={TabRoutes} />
        </Navigator>
    )
}