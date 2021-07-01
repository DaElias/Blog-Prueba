import { ContainerElemt,PP } from "./StyledComponet/Styled-Component";
import ExampleBlog1 from '../data/ExampleBlog1';
import { Link } from "react-router-dom";

const Blog = () => {

    return <ContainerElemt>
        <h2> Blog</h2>
        <PP>Blogs Existentes <b>{ExampleBlog1.length}</b></PP>
            <ul>
               {ExampleBlog1.map((index)=>{
                    return <li key={index.id}><Link to={`/Blogs/${index.id}`}>-{index.titulo}</Link></li>
               })}
            </ul>
    </ContainerElemt>


}

export default Blog;