import { ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import * as Icon from 'phosphor-react-native'
import { Wrapper } from "../../components/Wrapper";
import { GoBackButton } from "../../components/GoBackButton";
import { Highlight, styles } from "../../globals/styles.global";

import { Row, Description, Image, ImageContainer, Title, Box, ProductPrice, Minus, Plus, FavoriteButton, ProductAmount } from './styles'
import { ProductData } from "../../components/ProductsList";
import { useState } from 'react';

interface RouteParams {
    data: ProductData;
}


export function ProductDetails() {
    const { params } = useRoute()
    const { data } = params as RouteParams

    const [amountToBuy, setAmountToBuy] = useState(0)
    //const [isFavorite, setIsFavorite] = useState(false)
    
    //const handleFavoriteMedicine = () => setIsFavorite(!isFavorite)

    const handleIncreaseAmount = () => setAmountToBuy((state) => state + 1)
    const handleDecreaseAmount = () => setAmountToBuy((state) => state - 1)

    return (
        <Wrapper>
            <Row>
                <GoBackButton />
                <FavoriteButton>
                    <Icon.Heart 
                        color={styles.colors.heading} 
                        size={25} 
                    />
                </FavoriteButton>
            </Row>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}
            >
                <ImageContainer
                    style={{
                        
                        borderWidth: data.imageUri ? 1 : 0,
                        backgroundColor: data.imageUri
                        ? styles.colors.contrast
                        : styles.colors.background,
                    }}
                >
                { data.imageUri ? (
                    <Image source={{ uri: data.imageUri }} resizeMode="contain" />
                ) : (
                    <Icon.CameraSlash color={styles.colors.border} size={108} />
                )}
                </ImageContainer>
                <Title numberOfLines={2} ellipsizeMode='tail'>
                    { data.name }
                </Title>
                <Highlight style={{ fontSize: 18, marginTop: 20 }}>
                    Descrição
                </Highlight>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec condimentum varius enim mattis sagittis. Quisque 
                    pellentesque sem elit, consectetur pellentesque mi posuere sed. 
                    In hac habitasse platea dictumst. Aenean efficitur nunc est, 
                    et ultrices neque porta in
                </Description>
                <Highlight style={{ fontSize: 18, marginTop: 20 }}>
                    Bula
                </Highlight>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec condimentum varius enim mattis sagittis. Quisque 
                    pellentesque sem elit, consectetur pellentesque mi posuere sed. 
                    In hac habitasse platea dictumst. Aenean efficitur nunc est, 
                    et ultrices neque porta in
                </Description>
            </ScrollView>
            <Row>
                <Box style={{ justifyContent: 'space-between'}}>
                    <Minus onPress={handleDecreaseAmount}>
                        <Icon.Minus size={20} color={styles.colors.red}/>
                    </Minus>
                    <ProductAmount style={{ marginHorizontal: 24 }}>
                        { amountToBuy }
                    </ProductAmount>
                    <Plus onPress={handleIncreaseAmount}>
                        <Icon.Plus size={20} color={styles.colors.blue}/>
                    </Plus>
                </Box>
                <Box style={{ justifyContent: 'center'}}>
                    <ProductPrice>
                        { `R$ ${data.price}` }
                    </ProductPrice>
                </Box>
            </Row>
        </Wrapper>
    )
}


