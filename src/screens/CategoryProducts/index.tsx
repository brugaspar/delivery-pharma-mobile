import { useNavigation, useRoute } from "@react-navigation/native";

import { Wrapper } from "../../components/Wrapper";
import { Input } from "../../components/Input";
import { Divider } from "../../globals/styles.global";
import { ProductsList } from "../../components/ProductsList";
import { GoBackButton } from "../../components/GoBackButton";
import { Row, Title } from "./styles";

interface RouteParamsData {
  category: {
    id: string;
    name: string;
  };
}

export function CategoryProducts() {
  const route = useRoute();

  const { category } = route.params as RouteParamsData;

  return (
    <Wrapper>
      <Row>
        <GoBackButton />
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
