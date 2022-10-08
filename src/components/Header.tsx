import { View, StyleSheet, Text } from 'react-native'

// import 

export function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.welcome}>
                <Text>
                    Hey, <Text>Usuário
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcome: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    }
})