import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Head } from "./component/head";
import { Pregunta } from "./component/pregunta";

export function Simulador({route,navigation})
{
    const [respuestas,setrespuestas] = useState([]);
    const [respuesta,setrespuesta] = useState([]);
    const [pregunta,setpregunta] = useState([]);
    const [numero,setnumero] = useState(0);//variable de le numero de pregunta
 
    const API = "http://cenepsi.com/APIseal/index.php?nametest=TEST MMPI 2";
    var i=0;


   function aumentarnumero()
   {

   setrespuestas({...respuestas, 'turespuesta':respuesta.turespuesta,'idrespuesta':respuesta.idpregunta});
   console.log(respuestas);
    setnumero(numero+1);
   }
    useEffect(()=>{
        //utilizado para la api
        fetch(API)
        .then(response => response.json())
        .then(data => {console.log(data[0]);
                        setpregunta(data);
                        console.log(pregunta);});

    },[]);

    const {test} =route.params;//obtener los parametros

    return(
        <View  style={style.frmsimulador}>
                <Head
                style={style.head} 
                Nametest={test}
                 />
                <View style={style.containerTest}>
                    <Text>{numero}</Text>
                    {
                        pregunta.map((pregunta)=>{
                            //obtener el primer numero
                            if(numero>50)
                            {
                                console.log("mayor que cincuenta");
                            }
                             if( i==numero)
                            {
                                i++;
                                return <Pregunta 
                                        pregunta={pregunta}
                                        respuesta={respuesta}
                                        setrespuesta={setrespuesta}
                                        key={pregunta.idpregunta}
                                    />;          
                            }else{
                                i++;
                            }
                                
                        })
                    }
                    
                    <Pressable
                        style={style.btnsiguiente}
                        onPress={aumentarnumero}
                    >
                        <Text
                        style={style.btnsiguienteText}
                        >Siguiente</Text>
                    </Pressable>
                </View>
        </View>
    )
}

const style = StyleSheet.create({
    frmsimulador:{
        flex:1,
        width:"100%",
        backgroundColor:"white",
    },
    containerTest:{
        height:"90%",
        padding:10,
    },
    btnsiguiente:{
        padding:20,
        backgroundColor:"blue",
        border:20,
    },
    btnsiguienteText:{
        color:"white",
    },
})