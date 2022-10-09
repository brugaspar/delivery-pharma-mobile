import { Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { House, Package, ShoppingCartSimple, User } from 'phosphor-react-native'

import { Dimensions } from 'react-native'

import { Home } from '../screens/Home'
import { Products } from '../screens/Products'
import { Requests } from '../screens/Requests'
import { UserProfile } from '../screens/UserProfile'

import { myTheme } from '../styles/themes'

const { colors: { blue, gray } } = myTheme

const { 
    Navigator: TopTabNavigator, 
    Screen: TopTabScreen 
} = createMaterialTopTabNavigator()

export function TabRoutes() {

    return (
        <TopTabNavigator 
            initialRouteName='Home'
            tabBarPosition='bottom'
            screenOptions={{
                tabBarShowLabel: true,
                tabBarLabelStyle: {
                    color: gray[700],
                },
                tabBarActiveTintColor: blue[600],
                tabBarInactiveTintColor: gray[700],

                tabBarIndicatorStyle: {
                    backgroundColor: 'transparent',  
                },
            }}
            initialLayout={{
                width: Dimensions.get('window').width
            }}
        >
            <TopTabScreen 
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => <House size={30} color={color} />,
                    tabBarLabel: ({ color }) => <Text style={{ color: color }}>Inicio</Text>,
                }}
            />
            <TopTabScreen 
                name='Products'
                component={Products}
                options={{
                    tabBarIcon: ({ color }) => <Package size={30} color={color}/>,
                    tabBarLabel: ({ color }) => <Text style={{ color: color }}>Produtos</Text>,
                }}
            />
            <TopTabScreen 
                name='Requests' 
                component={Requests} 
                options={{
                    tabBarIcon: ({ color }) => <ShoppingCartSimple size={30} color={color}/>,
                    tabBarLabel: ({ color }) => <Text style={{ color: color }}>Pedidos</Text>,
                }}
            />
            <TopTabScreen 
                name='UserProfile'
                component={UserProfile}
                options={{
                    tabBarIcon: ({ color }) => <User size={30} color={color}/>,
                    tabBarLabel: ({ color }) => <Text style={{ color: color }}>Conta</Text>,
                }}
            />
        </TopTabNavigator>
    )
}