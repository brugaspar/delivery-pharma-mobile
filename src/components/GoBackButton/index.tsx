import { useNavigation } from "@react-navigation/native";
import * as Icon from 'phosphor-react-native'
import { BackButton } from "./styles"
import { styles } from "../../globals/styles.global";

interface GoBackButtonProps {
    icon?: keyof typeof Icon;
}

export function GoBackButton({ icon }: GoBackButtonProps){
    const navigation = useNavigation()

    const CustomIcon = icon ? (Icon[icon] as any) : null;

    function handleGoBack() {
        navigation.goBack()
    }

    return (
        <BackButton onPress={handleGoBack} activeOpacity={0.7}>
            { icon ? (
                    <CustomIcon 
                        color={styles.colors.heading} 
                        size={25} 
                    /> 
                ):(
                    <Icon.CaretLeft 
                        color={styles.colors.heading} 
                        size={25} 
                    />
                )
            }
        </BackButton>
    )
}