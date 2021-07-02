import React from "react";
import { NavLink, Route, Switch } from 'react-router-dom';

//* Component
import ExamplePage from "./Componet/ExamplePage";
import Contacto from "./Componet/Contactos";
import Blog from "./Componet/Blog";
import Acerca_de from "./Componet/Acerca_de";
import Error404 from './Componet/Error404';
//* styled component
import { Container, ContainerElemt, Nav, PP, FooterComponent } from "./Componet/StyledComponet/Styled-Component";
import ExampleBlog1 from "./data/ExampleBlog1";




function App() {
  return (
    <Container>
      <Nav>
        <h1>Blog de Prueba</h1>
        <div>
          <NavLink to="/" exact={true}>Inicio</NavLink>
          <NavLink to="/Blog">Blog</NavLink>
          <NavLink to="/Contactos">Contacto</NavLink>
          <NavLink to="/Acerca-de">Acerca de</NavLink>
        </div>
      </Nav>
      <Switch>

        <Route path="/" exact={true}>
          <ContainerElemt>
            <h2> Bienvenido</h2>
            <PP>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </PP>
          </ContainerElemt>
        </Route>

        <Route path="/Blog" component={Blog} />

        <Route path="/Contactos" component={Contacto} />



        <Route path="/Acerca-de" component={Acerca_de} />

        <Route path={"/Blogs-Post/:id"} component={ExamplePage} />

        <Route component={Error404} />

      </Switch>
      <FooterComponent />

    </Container>
  );
}



export default App;
