import { CheckBox } from "@rneui/themed";//componentes
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export function Pregunta({pregunta,respuesta,setrespuesta})
{
    const [check1,setcheck1] = useState(false);
    const [check2,setcheck2] = useState(false);
    return (
        <View
            style={style.boxpregunta}
        >
            {
                //<Text>{pregunta.idpregunta}</Text>
            }
            <Text>{pregunta.Detalle_pregunta}</Text>
            <CheckBox
             onPress={()=>{
                if(check1==false){ 
                    setcheck1(!check1);
                    setcheck2(false);
                    setrespuesta({'turespuesta':pregunta.opcion1_pregunta,'idpregunta':pregunta.idpregunta,'Pregunta':pregunta});
                }
                }}
             title={pregunta.opcion1_pregunta}
             checked={check1}
            />
            <CheckBox 
             onPress={()=>{
                if(check2==false){
                    setcheck2(!check2);
                    setcheck1(false);
                    setrespuesta({'turespuesta':pregunta.opcion2_pregunta,'idpregunta':pregunta.idpregunta,'Pregunta':pregunta});
                }
             }}
             title={pregunta.opcion2_pregunta}
             checked={check2}
            />

        </View>

    )
        
}
const style = StyleSheet.create({
    boxpregunta:{
        height:"60%",
        borderColor:"green",
        borderBottomWidth:5,
        
    }
})