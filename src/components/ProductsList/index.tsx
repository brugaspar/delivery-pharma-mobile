import * as Icon from "phosphor-react-native";

import { List } from "../List";
import { Divider, styles } from "../../globals/styles.global";
import { Image, ImageContainer, Item, Price, Row, Title } from "./styles";
import { formatCurrency } from "../../utils/format.util";

interface ProductData {
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
    imageUri:
      "https://www.tylenol.com.br/sites/tylenol_br/files/tylenol-500-21.png",
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
    imageUri:
      "https://www.farmasesi.com.br/estatico/sesi/images/produto/13653.jpeg",
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
    imageUri:
      "https://farmaciaindiana.vteximg.com.br/arquivos/ids/240949/7898075310383.jpg?v=637601393668800000",
  },
  {
    id: "7",
    name: "Cimegripe",
    price: 42.99,
    imageUri:
      "data:image/jpeg;base64,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",
  },
  {
    id: "8",
    name: "Benegripe",
    price: 32.29,
    imageUri: "",
  },
];

export function ProductsList() {
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
          activeOpacity={0.6}
        >
          <Row>
            <ImageContainer
              style={{
                borderWidth: item.imageUri ? 0 : 1,
                backgroundColor: item.imageUri
                  ? styles.colors.contrast
                  : styles.colors.background,
              }}
            >
              {item.imageUri ? (
                <Image source={{ uri: item.imageUri }} resizeMode="contain" />
              ) : (
                <Icon.CameraSlash color={styles.colors.border} size={30} />
              )}
            </ImageContainer>
            <Icon.ArrowSquareOut
              style={{ alignSelf: "flex-start" }}
              color={styles.colors.blue}
              size={15}
              weight="fill"
            />
          </Row>
          <Title numberOfLines={2}>{item.name}</Title>
          <Divider />
          <Price>{formatCurrency(item.price)}</Price>
        </Item>
      )}
    />
  );
}
