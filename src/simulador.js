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


   function SiguientePregunta()
   {
    var result = {
        'turespuesta':respuesta.turespuesta,
        'idrespuesta':respuesta.idpregunta
    }
   setrespuestas([... respuestas,result]);
   
   
    setnumero(numero+1);
    if(numero >10)
    {   
    //    console.log("hola"+respuestas+"prueba");
       rediregirResultado();
    }
   }
   function rediregirResultado()
   {
    navigation.navigate('resultado',{preguntas:pregunta,resultados:respuestas});
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
                Nametest={test}
                 />
                <View style={style.containerTest}>
                    <Text>{numero}</Text>
                    {
                        pregunta.map((pregunta)=>{
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
                        onPress={SiguientePregunta}
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
        backgroundColor:"#307848",
        textAlign:"center",
        border:20,
    },
    btnsiguienteText:{
        color:"white",
    },
})