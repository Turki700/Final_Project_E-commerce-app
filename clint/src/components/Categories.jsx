import styled from 'styled-components'
import {categories} from '../data'
import CategoryItem from './CategoryItem';
import {mobile} from '../responsive'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    background-color: #f5fbfd;
    ${mobile({ padding: "0px", flexDirection: "column" })}
`
const Categoreies = () => {
    return ( 
        <Container>
            {categories.map(item => (
                <CategoryItem item={item} key={item.id}/>
            ))}
        </Container>
     );
}
 
export default Categoreies;