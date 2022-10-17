import styled from "styled-components/native";
import { styles } from "../../globals/styles.global";

const Row = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const FavoriteButton = styled.TouchableOpacity`
  padding: 8px;
  background: ${styles.colors.contrast};
  border: 1px solid ${styles.colors.border};
  border-radius: 20px;
`;

const ImageContainer = styled.View`
    width: 250px;
    height: 150px;
    padding-top: 21px;
    padding-bottom: 21px;
    padding-left: 71px;
    padding-right: 71px;
    background-color: ${styles.colors.contrast};
    border: 1px solid ${styles.colors.border};
    justify-content: center;
    align-items: center;
    align-self: center;
    border-radius: 10px;
    overflow: hidden;
`

const Title = styled.Text`
    margin-top: 20px;
    font-family: ${styles.fonts.regular};
    font-size: ${styles.sizes.body};
    color: ${styles.colors.heading};
    overflow: hidden;
    line-height: 19px;
    max-height: 40px;
`
const Description = styled.Text`
    margin-top: 10px;
    font-family: ${styles.fonts.regular};
    font-size: ${styles.sizes.body};
    color: ${styles.colors.body};
    line-height: 20px;
`

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Box = styled.View`
    padding-top: 9px;
    padding-bottom: 9px;
    padding-left: 18px;
    padding-right: 18px;
    flex-direction: row;
    align-items: center;
    background-color: ${styles.colors.contrast};
    border: 1px solid ${styles.colors.border};
    border-radius: 10px;
`

const ProductPrice = styled.Text`
    color: ${styles.colors.blue};
    font-size: ${styles.sizes.highlight};
    text-align: center;
    line-height: 22px;
`

const ProductAmount = styled.Text`
    color: ${styles.colors.heading};
    font-size: ${styles.sizes.highlight};
    text-align: center;
    line-height: 22px;
`

const Minus = styled.TouchableOpacity`
    color: ${styles.colors.red};
`

const Plus = styled.TouchableOpacity`
    color: ${styles.colors.blue};
`

export { 
    Row, 
    Description, 
    Image, 
    ImageContainer, 
    Title, 
    Box, 
    ProductPrice,
    Minus,
    Plus,
    FavoriteButton,
    ProductAmount
}