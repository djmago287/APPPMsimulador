import{Overlay} from "@rneui/themed";
import { Image, StyleSheet, Text } from "react-native";
//funcion para la percarga para traer archivos json
export function Loading()
{
    const isVisible= true;
    const gifcargar= require('../img/loading.gif');
    return(
        <Overlay
            style={style.Overlay}
            isVisible={isVisible}
        >
            <Image 
            style={style.Image}
            source={gifcargar}/>
           <Text>cargando..</Text>
        </Overlay>
    );


}

const style = StyleSheet.create({
    Overlay:{
        
    },
    Image:{
     width:100,
     height:100,
    }
})