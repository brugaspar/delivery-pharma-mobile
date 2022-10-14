import { useNavigation } from "@react-navigation/native";
import { Input } from "../Input";
import { Container } from "./styles";

export function SearchInput() {
  const navigation = useNavigation();

  function handleGoToSearchScreen() {
    navigation.navigate("Search" as never);
  }

  return (
    <Container activeOpacity={0.7} onPress={handleGoToSearchScreen}>
      <Input
        editable={false}
        icon="MagnifyingGlass"
        placeholder="Pesquisar produto"
      />
    </Container>
  );
}
