import { ContainerElemt, PP } from "./StyledComponet/Styled-Component";
import ExampleBlog1 from '../data/ExampleBlog1';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Blog = () => {

    

    return <ContainerElemt>
        <h2> Blog</h2>
        <PP>Blogs Existentes <b>{ExampleBlog1.length}</b></PP>

        <Ul_li>
            {ExampleBlog1.map((index) => {
                return (
                    <li key={index.id}>
                        <Link to={`/Blogs-Post/${index.id}`}>
                            <ImagenMiniatura src={index.imgPost}></ImagenMiniatura>
                            <h4>{index.titulo}</h4>
                        </Link>
                    </li>
                )
            })}
        </Ul_li>
    </ContainerElemt>


}

const Ul_li = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: stretch;

li{
    box-shadow:2px 2px 10px;
    margin: 0 0 10px 10px;
    width: 100px;
    background: #192a56;
    border-radius: 20px 0px  20px 0px;

}
li Link{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h4{
    color:white;
    text-align:center;
}


`;



const ImagenMiniatura = styled.img`
    border-radius: 20px 0px 20px 0px;
    height: 100px;
`;

export default Blog;