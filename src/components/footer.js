import { Box, Container, Row, Column, FooterLink, Heading } from "./FooterStyles";



const Footer = () => {
    return (


        <>
            <h1 style={{
                textAlign: "center", marginTop: '-50px', 
                marginTop: '-50px', color: "green",
            }}>Buisness Education Charity</h1>
            <Container>
                <Row>
                    <Column style={{background:"red"}}>
                        <Heading> About us </Heading>
                        <FooterLink href="#">Vision</FooterLink>
                        <FooterLink href="#">Goal</FooterLink>
                    </Column>
                    <Column>
                        <Heading> Buisness </Heading>
                        <FooterLink href="#">Cars</FooterLink>
                        <FooterLink href="#">import Export</FooterLink>
                    </Column>
                    <Column>
                        <Heading> Education</Heading>
                        <FooterLink href="#"> University </FooterLink>
                        <FooterLink href="#">Field </FooterLink>
                    </Column>
                    <Column>
                        <Heading> Charity</Heading>
                        <FooterLink href="#"> Donation</FooterLink>
                        <FooterLink href="#">Contries </FooterLink>
                    </Column>
                </Row>

            </Container>


        </>





    );
}


export default Footer;


