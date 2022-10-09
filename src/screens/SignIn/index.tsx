// import { useState } from "react";
// import {
//     View,
//     TouchableWithoutFeedback,
//     Keyboard
// } from "react-native";

// import { useNavigation } from "@react-navigation/native";

// import { SignInCredentials, useAuth } from "../../hooks/auth";

// import { Loading } from "../../components/Loading";
// import { Footer } from "../../components/Footer";

// import { styles } from "./styles";

// export function SignIn() {
//     const navigation = useNavigation()

//     const { signIn, isLoading } = useAuth()

//     if (isLoading) return <Loading />

//     return (
//         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//             <View
//                 style={styles.container}
//             >
//             </View>
//         </TouchableWithoutFeedback>
//     )
// }