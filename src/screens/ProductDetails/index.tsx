import { useRef, useState } from "react";
import { ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import * as Icon from "phosphor-react-native";

import { Wrapper } from "../../components/Wrapper";
import { GoBackButton } from "../../components/GoBackButton";
import { Row, Description, Image, ImageContainer, Title, Box, ProductPrice, Minus, Plus, FavoriteButton, ProductAmount } from "./styles";
import { Highlight, styles } from "../../globals/styles.global";
import { formatCurrency } from "../../utils/format.util";

interface ProductData {
  id: string;
  name: string;
  description: string;
  prescription: string;
  price: number;
  imageUri: string;
}

interface RouteParamsData {
  product: {
    id: string;
  };
}

const product: ProductData = {
  id: "1",
  name: "Nimesulida",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente commodi vitae reprehenderit porro laborum nihil similique et aliquam sint quasi. Delectus assumenda quas tenetur voluptate adipisci asperiores nam repellat velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente commodi vitae reprehenderit porro laborum nihil similique et aliquam sint quasi. Delectus assumenda quas tenetur voluptate adipisci asperiores nam repellat velit.",
  prescription:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente commodi vitae reprehenderit porro laborum nihil similique et aliquam sint quasi. Delectus assumenda quas tenetur voluptate adipisci asperiores nam repellat velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente commodi vitae reprehenderit porro laborum nihil similique et aliquam sint quasi. Delectus assumenda quas tenetur voluptate adipisci asperiores nam repellat velit.",
  price: 42.99,
  imageUri: "https://www.farmasesi.com.br/estatico/sesi/images/produto/13653.jpeg",
};

export function ProductDetails() {
  const route = useRoute();
  const changeTimer: React.MutableRefObject<any> = useRef(null);
  // const { product } = route.params as RouteParamsData;

  const [amountToBuy, setAmountToBuy] = useState(0);

  function handleIncreaseAmount() {
    setAmountToBuy((prev) => prev + 1);
  }

  function handleDecreaseAmount() {
    setAmountToBuy((prev) => (prev > 1 ? prev - 1 : 0));
  }

  // const handleIncreaseAmount = () => setAmountToBuy((prev) => prev + 1);
  // const handleDecreaseAmount = () => setAmountToBuy((prev) => prev - 1);

  return (
    <Wrapper>
      <Row style={{ paddingBottom: 16 }}>
        <GoBackButton />
        <FavoriteButton>
          <Icon.Heart color={styles.colors.heading} size={25} />
        </FavoriteButton>
      </Row>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <ImageContainer>
          {product.imageUri ? (
            <Image source={{ uri: product.imageUri }} resizeMode="contain" />
          ) : (
            <Icon.CameraSlash color={styles.colors.border} size={108} />
          )}
        </ImageContainer>
        <Title numberOfLines={2} ellipsizeMode="tail">
          {product.name}
        </Title>
        <Highlight style={{ fontSize: 18, marginTop: 20 }}>Descrição</Highlight>
        <Description>{product.description}</Description>
        <Highlight style={{ fontSize: 18, marginTop: 20 }}>Bula</Highlight>
        <Description>{product.prescription}</Description>
      </ScrollView>

      <Row style={{ marginBottom: 16, paddingTop: 16 }}>
        <Box style={{ justifyContent: "space-between" }}>
          <Minus activeOpacity={0.6} onPress={handleDecreaseAmount}>
            {!!amountToBuy &&
              (amountToBuy === 1 ? (
                <Icon.TrashSimple size={25} color={styles.colors.red} />
              ) : (
                <Icon.Minus size={25} color={styles.colors.red} />
              ))}
          </Minus>
          <ProductAmount onChangeText={(text) => setAmountToBuy(Number(text))} style={{ marginHorizontal: 24 }}>
            {amountToBuy}
          </ProductAmount>
          <Plus activeOpacity={0.6} onPress={handleIncreaseAmount}>
            <Icon.Plus size={25} color={styles.colors.blue} />
          </Plus>
        </Box>
        <Box style={{ justifyContent: "center" }}>
          <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
        </Box>
      </Row>
    </Wrapper>
  );
}
