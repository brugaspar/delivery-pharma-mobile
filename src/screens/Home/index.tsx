import { View, StyleSheet } from 'react-native'
import { Header } from '../../components/Header'

export function Home() {
    return (
        <View style={styles.container}>
            <Header />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 44,
        paddingHorizontal: 16
    }
})