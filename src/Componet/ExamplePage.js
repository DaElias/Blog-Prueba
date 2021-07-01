import React from "react";
import { useParams } from "react-router";
const ExamplePage = ({ props }) => {
    const { id }=useParams();
    console.log(id);
    return (
        <>
        </>
    )
}

export default ExamplePage;