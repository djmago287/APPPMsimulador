import { StyleSheet, Text, View } from "react-native";
import { Head } from "./component/head";

export function Resultado({route}) {
    const {preguntas} = route.params;//traer los datos de las preguntas resultas
    const {resultados} = route.params;
    //console.log(preguntas+"prueba");
    console.log(resultados);
    return (
    <View
        style={style.frmresultado}
    >
        <Head 
            Nametest={"RESULTADO"}
        /> 
        <View
          style={style.ViewResultado}   
        >
            {
                resultados.map((resultados)=>{
                    return (
                            <Text key={resultados.idrespuesta} >{resultados.turespuesta}</Text>           
                    );
                })
            }
        </View>
       
    </View>);
}
const style = StyleSheet.create({
    frmresultado:{
        flex:1,
        width:"100%",
        backgroundColor:"white",
    },
    ViewResultado:{
        backgroundColor:"green",
        height:"90%"
    }
    
})