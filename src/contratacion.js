import { Image, StyleSheet, Text, View } from "react-native";
import { Head } from "./component/head";

//paquetes que se estan ofertando para la contratacion
export function Contratacion()
{
    return(
        <View style={style.frmcontratacion}>
            <Head 
                Nametest={'SERVICIOS'}
            />
          <Text>holamundo</Text>
          <View
            style={style.box_paquetes}
          >
                <View
                    style={style.paquete}
                >
                
                </View>
                <View
                    style={style.paquete}
                >
                        <Text>TEXTO PARA LA DESCRIPCION</Text>
                        <Text>Valor:</Text>
                </View>
          </View>
        </View>
    )

}
const style = StyleSheet.create({
    frmcontratacion:{
        flex:1,
        width:"100%",
    },
    box_paquetes:{
        width:"100%",
        height:"100%",
    },
    paquete:{
        width:"90%",
        height:"30%",
        backgroundColor:"green",
        margin:10,
    }
})
