import { Container } from 'reactstrap';
import { Outlet } from 'react-router-dom';
import MiHeader from './Header/header';
import MiFooter from './Footer/footer';
import Home from './Home/Home';

export default function Layout() {
    return(
        <Container>
            <MiHeader/>
            <Outlet/>
            <MiFooter/>
        </Container>
    )
}