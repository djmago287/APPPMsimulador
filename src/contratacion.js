import { Image, StyleSheet, Text, View } from "react-native";
import { Head } from "./component/head";

//paquetes que se estan ofertando para la contratacion
export function Contratacion()
{
    return(
        <View style={style.frmcontratacion}>
          <Text>holamundo</Text>

        </View>
    )

}
const style = StyleSheet.create({
    frmcontratacion:{
        flex:1,
        width:"100%",
        backgroundColor:"red",
    },
})

const Paquete = (imagen,titulo, descripcion,valor)=>{
        return(
            <View>
                <View>
                    <Text>{titulo}</Text>
                </View>
                <View>
                   <Text>TEXTO PARA LA DESCRIPCION</Text>
                   <Text>Valor:</Text>

                </View>
            </View>
        )
}