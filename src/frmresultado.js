import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Calificacion } from "./component/calificacion";
import { Head } from "./component/head";

export function Resultado({route}) {
    const {preguntas} = route.params;//traer los datos de las preguntas resultas
    const {resultados} = route.params;
    var i=0;
    //console.log(preguntas+"prueba");
    console.log(resultados);
    return (
            <View
                style={style.frmresultado}
            >
                <Head  Nametest={"RESULTADO"} /> 
                <ScrollView
                style={style.ViewResultado}   
                >
                    {
                        resultados.map((resultados)=>{
                            i++;
                        // if(resultados.turespuesta==resultados.preguntas.opcioncorrecta_pregunta)
                            return (
                                    <Calificacion 
                                        NumeroPregunta={i}
                                        key={resultados.pregunta.idpregunta}
                                        resultado={resultados}
                                        />
                                );
                        })
                    }
                </ScrollView>
            </View>);
}


const style = StyleSheet.create({
    frmresultado:{
        flex:1,
        width:"100%",
        backgroundColor:"white",
    },
    ViewResultado:{
      //  backgroundColor:"green",
        height:"80%"
    }
    
})