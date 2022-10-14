import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icon from "phosphor-react-native";

import { Wrapper } from "../../components/Wrapper";
import { Input } from "../../components/Input";
import { Divider, styles } from "../../globals/styles.global";
import { BackButton, Row, Title } from "./styles";
import { ProductsList } from "../../components/ProductsList";

interface RouteParamsData {
  category: {
    id: string;
    name: string;
  };
}

export function CategoryProducts() {
  const navigation = useNavigation();
  const route = useRoute();

  const { category } = route.params as RouteParamsData;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Wrapper>
      <Row>
        <BackButton onPress={handleGoBack} activeOpacity={0.7}>
          <Icon.CaretLeft color={styles.colors.heading} size={25} />
        </BackButton>
        <Title>{category.name}</Title>
      </Row>

      <Input icon="MagnifyingGlass" placeholder="Pesquisar produto" />

      <Divider
        style={{
          marginTop: 10,
          marginBottom: 0,
          marginLeft: -16,
          marginRight: -16,
        }}
      />

      <ProductsList categoryId={category.id} />
    </Wrapper>
  );
}
