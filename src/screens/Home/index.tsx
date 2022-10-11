import { useNavigation } from "@react-navigation/native";
import * as Icon from "phosphor-react-native";

import { Wrapper } from "../../components/Wrapper";
import { Input } from "../../components/Input";
import { Highlight, styles } from "../../globals/styles.global";
import { Header, ProfileButton, Subtitle, Title, Username } from "./styles";

export function Home() {
  const navigation = useNavigation();

  function handleGoToAccountScreen() {
    navigation.navigate("Account" as never);
  }

  return (
    <Wrapper>
      <Header>
        <Username>
          <Title>
            Hey, <Highlight>Usuário</Highlight>
          </Title>
          <Subtitle>O que vai pedir hoje?</Subtitle>
        </Username>
        <ProfileButton activeOpacity={0.6} onPress={handleGoToAccountScreen}>
          <Icon.User color={styles.colors.heading} size={30} weight="duotone" />
        </ProfileButton>
      </Header>

      <Input icon="MagnifyingGlass" placeholder="Pesquisar produto" />
    </Wrapper>
  );
}
