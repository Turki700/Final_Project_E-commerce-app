import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 30px;
    background-color: #F5FAFD;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Title = styled.h3`
    color: #008080;
`

const Image = styled.img`
    height: 100%;
    margin-left: 10px;
`

const GardenTeam = () => {
    return ( 
        <Container>
            <Title>Garden Team</Title>
            <Image src="https://cdn-icons-png.flaticon.com/128/490/490091.png" />
        </Container>
     );
}
 
export default GardenTeam;