import "react-native-gesture-handler";
import { StatusBar } from "react-native";

import { Routes } from "./src/routes";

import { AppProvider } from "./src/hooks";
//import { Loading } from './src/components/Loading';

export default function App() {
	return (
		<AppProvider>
			<StatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent
			/>
			<Routes />
		</AppProvider>
	);
}
