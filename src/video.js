import { Video } from "expo-av";
import { useState } from "react";
import { Pressable, StyleSheet, Text , View } from "react-native";
import { Head } from "./component/head";

export function Videos()
{
    const [status, setstatus] = useState();
    const CambiarEstado = ()=>{
        console.log("cambiar de estado")
    }
    return(
        <View style={style.frmvideo}>
            <Head Nametest={'Video demostrativo'}/>
            <View
              style={style.boxvideo}
            >
                <Video
                    source={{uri:'https://cenepsi.com/website/Img/video2.mp4'}} 
                    style={style.video}
                    rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="contain"
                        shouldPlay
                        useNativeControls
                        //isLooping
                >
                </Video>
                <Text>Demostracion de clases de la institucion</Text>
                <Pressable
                    onPress={CambiarEstado}
                >
                    <Text>PAUSE</Text>
                </Pressable>
            </View>
          
        </View>
    )
}
const style = StyleSheet .create({
    frmvideo:{
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    boxvideo:{
        height:"90%",
        width:"100%",
        alignItems:"center",
    },
    video:{
        width: "90%",
        height: "30%",
    },
})