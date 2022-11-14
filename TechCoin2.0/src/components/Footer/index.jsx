import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

import { Container, Left, Center, Right, Logo, Desc, SocialContainer, SocialIcon, ContactItem, Title, List, ListItem  } from "./style";


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Tech Coin.</Logo>
                <Desc>
                Tech Coin é uma agência de criptomoedas que permite que você compre, venda e negocie Criptomoedas, DeFi's, Utility Tokens e NFTs.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <TwitterIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Precisa de Ajuda ?</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Carrinho</ListItem>
                    <ListItem>Categorias</ListItem>
                    <ListItem>Cadastro</ListItem>
                    <ListItem>UltraCoins</ListItem>
                    <ListItem>Ajuda</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contatos</Title>
                <ContactItem><RoomIcon style={{marginRight:"10px"}} />
                    Brasília - DF, Brasil
                </ContactItem>
                <ContactItem><PhoneIcon style={{marginRight:"10px"}} />
                    +55 61 99285-2075
                </ContactItem>
                <ContactItem><MailOutlinedIcon style={{marginRight:"10px"}} />
                    contato@storecoin.com
                </ContactItem>
            </Right>
        </Container>
    );
};

export { Footer };