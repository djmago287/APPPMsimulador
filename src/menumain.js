
import { Icon } from "@rneui/base";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Head } from "./component/head";
import { LinearGradient } from 'expo-linear-gradient';

export function Menu_main()
{
    return  (
        <View style={style.frmMenu_main} >
            <Head Nametest={'TUS CURSOS'}/>
            
            <View style={style.boxmenu}>
                <View style={style.boxmenu_opcion}>
                    <Text>VIDEOS</Text>
                    <Image></Image>
                    <Pressable>
                        <Text>Comenzar</Text>
                        <Icon></Icon>
                    </Pressable>
                </View>
                <View style={style.boxmenu_opcion} >
                    <Text>VIDEOS</Text>
                    <Image></Image>
                    <Pressable>
                        <Text>Comenzar</Text>
                        <Icon></Icon>
                    </Pressable>
                </View>
            </View>
        </View>
    )
   
}
const style = StyleSheet.create({
    frmMenu_main:{
        height:"100%",
    },
    boxmenu:{
        justifyContent:"space-around",
        alignItems:"center",
        height:"90%",
    },
    boxmenu_opcion:{
        backgroundColor:"green",
        height:"30%",
        width:"80%",
    },
})