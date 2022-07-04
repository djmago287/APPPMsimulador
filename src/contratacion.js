import { StyleSheet, Text, View } from "react-native";
import { Head } from "./component/head";

//paquetes que se estan ofertando para la contratacion
export function Contratacion()
{
    return(
        <View style={style.frmcontratacion}>
          <Text>PAQUETE1</Text>
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