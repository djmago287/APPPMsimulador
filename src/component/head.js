import { StyleSheet, Text, View } from "react-native";

export function Head({Nametest})
{
    return (
        <View style={style.con_head}>
                <Text style={style.con_headText}>Icono</Text>
                <Text style={style.con_headText}>{Nametest}</Text>
                <Text style={style.con_headText}>Usuario</Text>
        </View>
    )
}
const style = StyleSheet.create({
    con_head:{
        flex:1,
        width:"100%",
        height:10,
        borderBottomColor:"green",
        borderBottomWidth:5,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "flex-end", 
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:10,        
    },
    con_headText:{
        fontSize:15,
    }
})