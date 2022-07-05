import { useEffect, useState} from "react";
import { Alert, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { Contratacion } from "./contratacion";

export function Home({navigation}) {
    const logo = require('./img/logo.png');
    const iconmenu =  require('./img/menu.png');
    const iconuser = require('./img/usuario.png');
    const img1 = require('./img/policia.jpg');
    const img2 = require('./img/militar.jpg');

    const comenzarTest = ()=>{
        navigation.navigate('simulador',{test:'Simulador de la policia',Npregunta:0});
    }
    const comenzarVideo = ()=>{
        navigation.navigate('video');
    }
    const contratacion = ()=>{
        console.log("moviendo contratacion");
        navigation.navigate('contratacion');
    }
   
     return(
        <View style={style.frmhome} >
            <View style={style.colhead}>
                <Image
                    source={iconmenu}
                />
                <Text style={style.colhead_text}>Juan Pedro</Text>
                <Image 
                    style={style.colhead_iconuser}
                    source={iconuser}
                />
            </View>
            <View style={style.colbody}>
                <View style={style.colbody_inicio}>
                    <Image
                        style={style.colbody_logo}
                        source={logo}
                     />
                     <View style={style.colbody_irow2}>
                        <View style={style.colbody_frase}>
                            <Text style={style.colbody_frase1}>
                                Aseguramos tú ingreso a las escuelas Policias  y militares
                            </Text>
                            <Text style={style.colbody_frase2}>POLICIAS - MILITARES</Text>
                        </View>
                        
                        <Pressable
                            onPress={comenzarVideo} 
                            style={style.colbody_btncursos}
                        >
                            <Text style={style.colbody_btncursostext}>
                                Tus cursos
                            </Text>
                        </Pressable>
                     </View>
                </View>
                <View
                  style={style.colbody_titulovideo}
                >
                    <Text style={style.colbody_titulovideotext}>Videos</Text>
                </View>
                <ScrollView 
                horizontal={true}//hacer el scroll horizontal
                style={style.colbody_cursovideo}
                imageStyle={{borderRadius:6}}
                >
                        <ImageBackground
                            source={img1}
                            style={style.colbody_video}
                        > 
                            <View style={style.titlevideo}>
                             <Text style={style.titlevideo_text}>vide01</Text>
                            </View>
                            
                        </ImageBackground>
                        <ImageBackground 
                            source={img2}
                            style={style.colbody_video}
                        > 
                            <View style={style.titlevideo}>
                             <Text style={style.titlevideo_text}>vide01</Text>
                            </View>
                        </ImageBackground>
                        <ImageBackground style={style.colbody_video}> 
                            <View style={style.titlevideo}>
                             <Text style={style.titlevideo_text}>vide01</Text>
                            </View>
                        </ImageBackground>
                        <ImageBackground style={style.colbody_video}> 
                            <View style={style.titlevideo}>
                             <Text style={style.titlevideo_text}>vide01</Text>
                            </View>
                        </ImageBackground>
                </ScrollView>
                <View style={style.colbody_titulo2video}>
                    <Text style={style.colbody_titulo2videotext}>
                        Ver Todo
                    </Text>
                </View>
                <View style={style.colbody_listasimulador}>
                    <View style={style.colbody_titulolista}>
                        <Text style={style.colbody_titulolistatext}>Cursos</Text>
                    </View>
                    <Pressable 
                        style={style.colbody_listaopcion}
                        onPress={comenzarTest}
                    >
                        <Text style={style.colbody_listaopcion_text}>
                            POLICÍA NACIONAL
                        </Text>
                    </Pressable>
                    <Pressable 
                        style={style.colbody_listaopcion}
                        onPress={()=> Alert.alert("Escoja una opcion")}
                    >
                        <Text style={style.colbody_listaopcion_text}>
                            EJERCITO
                        </Text>
                    </Pressable>
                    <Pressable style={style.colbody_listaopcion}>
                        <Text style={style.colbody_listaopcion_text}>
                            FUERZA AEREA
                        </Text>
                    </Pressable>
                </View>
                    <Pressable 
                        style={style.btncontratar}
                        onPress={Contratacion}
                    >
                        <Text>CONTRATAR CURSOS</Text>
                    </Pressable>

            </View>
           
        </View>
        
     );
}
const style = StyleSheet.create({
    frmhome:{
        flex:1,
        width:"100%",
        backgroundColor:"white",
    },
    colhead:{
        width:"100%",
        height:"10%",
        justifyContent:"space-between",
        alignItems:"flex-end",
        backgroundColor:"#18743b",
        flexDirection:"row",
        borderBottomWidth:2,
        borderColor:"white",
    },
    colhead_text:{
        color:"white",
    },
    colhead_iconuser:{
        width:40,
        height:40,
    },
    colbody:{
        width:"100%",
        height:"90%",
        backgroundColor:"white",
    },
    colbody_inicio:{
        width:"100%",
        height:"40%",
        backgroundColor:"#18743b",
        flexDirection:'row',
    },
    colbody_logo:{
        marginTop:10,
        borderRadius:100,
        backgroundColor:"white",
        width:180,
        height:180,
        resizeMode:'contain',//la imagen se ajusta al contenedor
    },
    colbody_irow2:{
        width:"100%",
        height:"80%",
        flexDirection:"column",
        justifyContent:"space-around",
    },
    colbody_frase:{
        width:"55%",
        padding:15,
        fontSize:20,
    
    },
    colbody_frase1:{
        fontSize:15,
        textAlign:"center",
        color:"white",
    },
    colbody_frase2:{
        textAlign:"center",
        color:"#f8c822",
        fontSize:18,
    },
    colbody_btncursos:{
        width:"50%",
        height:40,
        backgroundColor:"#ef8930",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        transform:[
            {
                translateX:40,
            }
        ]
    },
    colbody_btncursostext:{
        fontSize:20,
        color:"white",
    },
    colbody_titulovideo:{
        marginTop:-80,
        backgroundColor:"#ef8930",
        width:"20%",
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
    },
    colbody_titulovideotext:{
        color:"white",
    },
    colbody_cursovideo:{
        width:"100%",
        height:"15%",

    },
    colbody_video:{
        margin:10,
        width:200,
        height:150,
        backgroundColor:'rgba(248, 153, 7 ,1)',
        borderRadius:20,
        justifyContent:"flex-end",
        alignItems:'center',
        overflow:"hidden",
        borderColor:"rgba(210,206,206,0.96)",
        borderWidth:3,
    },
    colbody_titulo2video:{
        width:"100%",
        height:20,
        margin:10,
        alignItems:"flex-end",
        paddingRight:20,
    },
    colbody_titulo2videotext:{
        color:"#ef8930",
        
    },
    colbody_titulolista:{
        backgroundColor:"#ef8930",
        width:"20%",
        marginTop:-10,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
    },
    colbody_titulolistatext:{
        color:"white",
    },
    colbody_listasimulador:{
        height:"33%",
        backgroundColor:'rgba(194,157,137, 0.7)',
    },
    colbody_listaopcion:{
        backgroundColor:'#18743b',
        height:"15%",
        margin:10,
        borderRadius:10,
        justifyContent:"center",
        padding:5,
    },
    colbody_listaopcion_text:{
        color:"white",
        fontSize:18,
    },
    btncontratar:{
        backgroundColor:"green",
        marginTop:-5,
        alignItems:"center",
        height:50,
    }   
})