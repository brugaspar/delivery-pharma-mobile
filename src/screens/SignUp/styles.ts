import { StyleSheet } from 'react-native'
import { THEME } from '../../styles/themes'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: THEME.colors.gray[700],
    },
    content: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingVertical: 24,
        //borderColor: '#FFF',
        //borderWidth: 1
        //space: 4
    },
    logoJucasfa: {
        width: 128,
        height: 128,
        marginTop: 40,
        borderRadius: 64,
    }

})