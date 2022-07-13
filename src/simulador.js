import { useEffect, useState } from "react";
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { Head } from "./component/head";
import { Pregunta } from "./component/pregunta";
import { Loading } from "./component/loading";


export function Simulador({route,navigation})
{

    const [respuestas,setrespuestas] = useState([]);
    const [respuesta,setrespuesta] = useState([]);
    const [pregunta,setpregunta] = useState([]);
    const [numero,setnumero] = useState(0);//variable de le numero de pregunta

    // la API
    const API = "http://cenepsi.com/APIseal/index.php?nametest=TEST MMPI 2";
    var i=0;
    
   function SiguientePregunta()
   {
        var result = {
            'turespuesta':respuesta.turespuesta,
            'idrespuesta':respuesta.idpregunta,
            'pregunta':respuesta.Pregunta
        }
        //verificar si ka promise estavacio
        
        if(!respuesta.turespuesta |  respuesta.turespuesta  ==""){
            Alert.alert('Tiene que escojer una opcion');
        }else{
              //  console.log(result);
              setrespuestas([... respuestas,result]);
              console.log(respuestas)
              setnumero(numero+1);
              //solo me lee los 10 primero datos
              if(numero >9)
              {   
              //    console.log("hola"+respuestas+"prueba");
              rediregirResultado();
              }
              respuesta.turespuesta= "";
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
        .then(data => {
                 console.log(data[0]);
                        setpregunta(data);                   
                      //  console.log(pregunta);
                    });
        console.log(respuestas)
    },[]);
    if(pregunta==""){   
        console.log("cargando");
        return (<Loading></Loading>);
    }else{
        console.log("cargado");
       // setloading(false);
    }
    
        
    const {test} =route.params;//obtener los parametros
    const nexticon = require('./img/next.png');
    return(
        <View  style={style.frmsimulador}>
                <Head
                Nametest={test}
                 />
                <View style={style.containerTest}>
                   
                      
                    <Text>{numero+1}</Text>
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
                    
                    <View style={style.boxbtn}>
                        <Pressable
                            style={style.btnsiguiente}
                            onPress={SiguientePregunta}
                        >
                            <Text
                                style={style.btnsiguienteText}
                            >Siguiente</Text>
                            <Image
                                style={style.btnsiguienteIcon} 
                                source={nexticon} 
                            />
                        </Pressable>
                    </View>
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
    boxbtn:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    btnsiguiente:{
        margin:5,
        padding:10,
        backgroundColor:"#307848",
        textAlign:"center",
        justifyContent:"space-between",
        alignItems:"center",
        width:"80%",
        height:60,
        border:20,
        flexDirection:"row"
    },
    btnsiguienteText:{
        color:"white",
        fontSize:15,
    },
    btnsiguienteIcon:{
        width:50,
        height:50,
    }
})