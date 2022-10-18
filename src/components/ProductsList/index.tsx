import * as Icon from "phosphor-react-native";

import { List } from "../List";
import { Divider, styles } from "../../globals/styles.global";
import { Image, ImageContainer, Item, Price, Row, Title } from "./styles";
import { formatCurrency } from "../../utils/format.util";
import { useNavigation } from "@react-navigation/native";

interface ProductsListProps {
  categoryId?: string;
}

export interface ProductData {
  id: string;
  name: string;
  price: number;
  imageUri: string;
}

interface RenderItemProps {
  item: ProductData;
  index: number;
}

const products: ProductData[] = [
  {
    id: "1",
    name: "Tylenon | Paracetamol",
    price: 42.99,
    imageUri: "https://www.tylenol.com.br/sites/tylenol_br/files/tylenol-500-21.png",
  },
  {
    id: "2",
    name: "Xarope Expec Legrand Pharma",
    price: 29.99,
    imageUri:
      "https://drogariasp.vteximg.com.br/arquivos/ids/578466-1000-1000/104973---expec-legrand-pharma-xarope-120ml-1.jpg?v=637835694033170000",
  },
  {
    id: "3",
    name: "Pomada Quadriderm",
    price: 115.98,
    imageUri: "",
  },
  {
    id: "4",
    name: "Nimesulida",
    price: 42.99,
    imageUri: "https://www.farmasesi.com.br/estatico/sesi/images/produto/13653.jpeg",
  },
  {
    id: "5",
    name: "Azulzinho da Maldade",
    price: 142.5,
    imageUri:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2014_39/685641/140925-viagra-pills-1622.jpg",
  },
  {
    id: "6",
    name: "Teste de Gravidez GravtestEasy",
    price: 42.99,
    imageUri: "https://farmaciaindiana.vteximg.com.br/arquivos/ids/240949/7898075310383.jpg?v=637601393668800000",
  },
  {
    id: "7",
    name: "Cimegripe",
    price: 42.99,
    imageUri: "https://www.drogariaminasbrasil.com.br/media/product/aba/cimegripe-com-20-capsulas-01b.jpg",
  },
  {
    id: "8",
    name: "Benegripe",
    price: 32.29,
    imageUri: "",
  },
  {
    id: "9",
    name: "Fralda GG Pampers",
    price: 38.56,
    imageUri: "",
  },
  {
    id: "10",
    name: "Papel Higiênico",
    price: 18,
    imageUri: "",
  },
];

export function ProductsList({ categoryId }: ProductsListProps) {
  const navigation = useNavigation();

  function handleProductDetails(product: ProductData) {
    navigation.navigate("ProductDetails" as never, { product } as never);
  }

  return (
    <List
      data={products}
      numColumns={2}
      style={{ paddingTop: 10, marginBottom: -16 }}
      contentContainerStyle={{ paddingBottom: 32 }}
      renderItem={({ item, index }: RenderItemProps) => (
        <Item
          style={{
            marginLeft: index % 2 ? 8 : 0,
            marginTop: index > 1 ? 8 : 0,
          }}
          onPress={() => handleProductDetails(item)}
          activeOpacity={0.6}
        >
          <Row>
            <ImageContainer
              style={{
                borderWidth: item.imageUri ? 0 : 1,
                backgroundColor: item.imageUri ? styles.colors.contrast : styles.colors.background,
              }}
            >
              {item.imageUri ? (
                <Image source={{ uri: item.imageUri }} resizeMode="contain" />
              ) : (
                <Icon.CameraSlash color={styles.colors.border} size={30} />
              )}
            </ImageContainer>
            <Icon.ArrowSquareOut style={{ alignSelf: "flex-start" }} color={styles.colors.blue} size={15} weight="fill" />
          </Row>
          <Title numberOfLines={2}>{item.name}</Title>
          <Divider />
          <Price>{formatCurrency(item.price)}</Price>
        </Item>
      )}
    />
  );
}
