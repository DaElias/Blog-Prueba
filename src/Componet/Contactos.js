import { ContainerElemt } from "./StyledComponet/Styled-Component";

const Contacto = ({props=["Juan",'Mario','Ronal','Marcos','Camilo']}) => {
    return (<>
        <ContainerElemt>
            <h2> Contactos</h2>
            <p>
                <ul>
                    {props.map((index)=>{
                        return<li >{index}</li>
                    })}
                </ul>
            </p>
        </ContainerElemt>

    </>)
}




export default Contacto;