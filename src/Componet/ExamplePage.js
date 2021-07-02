import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import ExampleBlog1 from "../data/ExampleBlog1";
import Error404 from './Error404';

//* Styled Component
import { ContainerElemt,PP } from "./StyledComponet/Styled-Component";
const ExamplePage = ({ props }) => {
    const { id } = useParams();
    console.log(id);
    return (
        <>
            {ExampleBlog1[id-1]  ?
                <ContainerElemt>
                    <WallpaperBlog src={ExampleBlog1[id-1].imgPost}></WallpaperBlog>
                   <h2> {ExampleBlog1[id-1].titulo}</h2>
                    <PP>{ExampleBlog1[id-1].texto}</PP>
                </ContainerElemt>
                :
                <Error404/>
            }
        </>
    )
}
const WallpaperBlog=styled.img`
width: 100%;
height: 300px;
margin: 0px;
`;

export default ExamplePage;