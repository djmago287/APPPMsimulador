import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export function  Login({navigation}) {
    const logo = require('./img/logo.png');
    const logear=()=>{
        navigation.navigate('home');
    }
    return(
        <View style={style.frmlogin}>
            <View style={style.frmlogin_head} >
                <Image 
                    style={style.logologin}
                    source={logo}
                />
                <Text
                    style={style.titulologin}
                >
                   Test para Policias y Militares
                </Text>
            </View>
            
            <View style={style.frmlogin_body}>
                <TextInput
                    style={style.textinput}
                    placeholder="Usuario"
                />
                <TextInput 
                    style={style.textinput}
                    secureTextEntry={true}
                    placeholder="Password"
                />
                <Pressable 
                style={style.btnIngresar}
                onPress={logear}
                >
                    <Text 
                        style={style.textbtningresar}
                    >INGRESAR</Text>
                </Pressable>
                <Text>Elaborado por CENEPSI</Text>
            </View>
            
        </View>
    )
}
const style = StyleSheet.create({
    titulologin:{
        color:"#0E6040",
        fontSize:50,
        fontFamily: 'sans-serif-light',
        fontWeight: 'normal',
        padding:5,

    },
    frmlogin: {
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        width:"100%",
        backgroundColor:"#FFFBDB",
    },
    frmlogin_head:{
       alignItems:"center",
        justifyContent:"center",
        flex:1,
        width:"100%",
        backgroundColor:"#FFFBDB",
    },
    frmlogin_body:{
        alignItems:"center",
        width:"100%",
        height:"50%",
        backgroundColor:"#0E6040",
        borderBottomLeftRadius:100,
    },
    logologin:{
        width:"60%",
        height:200,
        resizeMode:'contain',//resize que la imagen se ajuste al tamaño del contenedo
    },
    textinput:{
        backgroundColor:"#509D87",
        width:"90%",
        height:50,
        fontSize:20,
        padding:10,
        marginTop:20,
    },
    btnIngresar:{
        alignItems:"center",
        justifyContent:"center",
        width:"70%",
        height:50,
        borderRadius:10,
        margin:40,
        backgroundColor:"#FF6711",
    },
    textbtningresar:{
        color:"white",
        fontSize:25,
    },
});