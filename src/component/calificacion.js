import { Image, StyleSheet, Text, View } from "react-native";
import { CheckBox } from "@rneui/themed";//componentes
import { useEffect, useState } from "react";

export function Calificacion({resultado,NumeroPregunta})
{
    const [check1,setcheck1] = useState(false);
    const [check2,setcheck2] = useState(false);
    const [respuesta,setrespuesta] = useState(null);
    const [respuesta2,setrespuesta2] = useState(null);
    useEffect(()=>{
        if(resultado.turespuesta==resultado.pregunta.opcion1_pregunta){
            verificar(resultado.turespuesta,resultado.pregunta.opcioncorrecta_pregunta,setrespuesta)
            setcheck1(!check1);
        }else{
            verificar(resultado.turespuesta,resultado.pregunta.opcioncorrecta_pregunta,setrespuesta2)
            setcheck2(!check2);
        }

      

    },[])
    //funcion para verificar si es correcto tu respuesta o no
    const verificar= (turespuesta,respuestacorrecta,setrespuesta)=>{
        if(turespuesta==respuestacorrecta){
                setrespuesta(require('../img/correct.png'))
        }else{
                setrespuesta(require('../img/incorrect.png'))
        }
    }
    return(
        <View>
            <Text>{NumeroPregunta}.-</Text>
            <Text>{resultado.pregunta.Detalle_pregunta}</Text>
            <View style={style.opcion}>
                <CheckBox
                    title={resultado.pregunta.opcion1_pregunta}
                    checked={check1}
                />
                <Image 
                style={style.opcion_icon}
                source={respuesta}
                />
               
            </View>
            <View style={style.opcion}>
                <CheckBox
                    title={resultado.pregunta.opcion2_pregunta}
                    checked={check2}
                />
               <Image 
                style={style.opcion_icon}
                source={respuesta2}
                />
            </View>
            
        </View>
    );
}

const style=StyleSheet.create({
    opcion:{
        flexDirection:"row",
        alignItems:"center"
    },
    opcion_icon:{
        width:20,
        height:20,
    }
})