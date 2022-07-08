import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { Head } from "./component/head";

//paquetes que se estan ofertando para la contratacion
export function Contratacion()
{
    const fondepaquete = require('./img/fondopaquetes.jpg');
    const iconopaquete = require('./img/iconopaquetes.png')
    return(
        <View style={style.frmcontratacion}>
            <Head 
                Nametest={'SERVICIOS'}
            />
    
          <View
            style={style.box_paquetes}
          >
                <ImageBackground
                    style={style.paquete}
                >
                    <View 
                        style={style.paquete_head}
                    >
                        <Text style={style.paquete_headText}>PAQUETE SENCILLO</Text>
                        <Text style={style.paquete_headText}>$ 5.00</Text>
                    </View>
                    <View 
                        style={style.paquete_body}
                    >
                        <Image
                            style={style.paquete_bodyIcon} 
                            source={iconopaquete} />
                        <View style={style.paquete_boxdescripcion}>
                            <Text style={style.paquete_bodyText}>Test</Text>
                            <Text style={style.paquete_bodyText}>Realizar la prueba con todas las categorias</Text>
                            <Pressable style={style.paquete_bodyButton}>
                                <Text>COMPRAR</Text>
                            </Pressable>
                        </View>
                    </View>
                </ImageBackground>
                <ImageBackground
                    style={style.paquete}
                >
                    <View 
                        style={style.paquete_head}
                    >
                        <Text style={style.paquete_headText}>PAQUETE SENCILLO</Text>
                        <Text style={style.paquete_headText}>$ 5.00</Text>
                    </View>
                    <View 
                        style={style.paquete_body}
                    >
                        <Image
                            style={style.paquete_bodyIcon} 
                            source={iconopaquete} />
                        <View style={style.paquete_boxdescripcion}>
                            <Text style={style.paquete_bodyText}>Test</Text>
                            <Text style={style.paquete_bodyText}>Realizar la prueba con todas las categorias</Text>
                            <Pressable style={style.paquete_bodyButton}>
                                <Text>COMPRAR</Text>
                            </Pressable>
                        </View>
                    </View>
                </ImageBackground>
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
        height:"90%",
    },
    paquete:{
        width:"95%",
        height:"30%",
        backgroundColor:"green",
        margin:10,
        borderRadius:10,
    },
    paquete_head:{
        flexDirection:"row",
        margin:10,
        justifyContent:"space-around"
    }, 
    paquete_headText:{
        color:"white",
        fontSize:20,
    },
    paquete_body:{
        flexDirection:"row",
        height:"75%",
    },
    paquete_boxdescripcion:{
        width:"50%",

    },
    paquete_bodyIcon:{

        width:"50%",
        height:"100%",
    },
    paquete_bodyText:{
        color:"white",
    },
    paquete_bodyButton:{
        width:"80%",
        borderRadius:10,
        backgroundColor:"white",
    }

})
