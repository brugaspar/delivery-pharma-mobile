import * as Icon from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { Card, Container, ScrollView, Title } from "./styles";
import { styles } from "../../globals/styles.global";

interface HorizontalCategoriesProps {
  showOnlyFavorites?: boolean;
}

interface CategoryData {
  id: string;
  name: string;
  icon: keyof typeof Icon;
  favorite?: boolean;
}

const categories: CategoryData[] = [
  {
    id: "1",
    name: "Antibióticos",
    icon: "Pill",
  },
  {
    id: "2",
    name: "Vitaminas",
    icon: "FirstAidKit",
  },
  {
    id: "3",
    name: "Injetáveis",
    icon: "Syringe",
  },
  {
    id: "4",
    name: "Higiene",
    icon: "HandSoap",
    favorite: true,
  },
  {
    id: "5",
    name: "Genéricos",
    icon: "Bandaids",
    favorite: true,
  },
  {
    id: "6",
    name: "Testes",
    icon: "TestTube",
  },
  {
    id: "7",
    name: "Outros",
    icon: "ToiletPaper",
    favorite: true,
  },
];

export function HorizontalCategories({
  showOnlyFavorites,
}: HorizontalCategoriesProps) {
  const navigation = useNavigation();

  function handleGoToCategory(category: CategoryData) {
    navigation.navigate("CategoryProducts" as never, { category } as never);
  }

  const favoritesCategories = categories.filter(
    (category) => category.favorite
  );

  const categoriesToList = showOnlyFavorites ? favoritesCategories : categories;

  return (
    <Container>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {categoriesToList.map((category, index) => {
          const CustomIcon = Icon[category.icon] as any;
          return (
            <Card
              key={category.id}
              style={{ marginLeft: index ? 5 : 0 }}
              activeOpacity={0.6}
              onPress={() => handleGoToCategory(category)}
            >
              <CustomIcon color={styles.colors.body} size={30} />
              <Title>{category.name}</Title>
            </Card>
          );
        })}
      </ScrollView>
    </Container>
  );
}
