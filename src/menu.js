import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Login } from "./login";
import { StyleSheet, View } from "react-native";
import { Home } from "./home";
import { Simulador } from "./simulador";
import { Contratacion } from "./contratacion";
import { Videos } from "./video";
const stack = createNativeStackNavigator();
export function Menu()
{
    
    return(
        <View style={styles.login}>
            <NavigationContainer>
                <stack.Navigator
                    screenOptions={{
                        headerShown:false,
                    }}
                >
                    <stack.Screen   
                    name="login"
                    component={Login}
                    />
                    <stack.Screen
                    name="home"
                    component={Home}
                    />
                    <stack.Screen 
                    name="simulador"
                    component={Simulador}
                    />
                    <stack.Screen
                    name="contratacion"
                    component={Contratacion}
                    />
                    <stack.Screen 
                     name="video"
                     component={Videos}
                    />
                </stack.Navigator>
            </NavigationContainer> 
        </View>        
    )
}
const styles = StyleSheet.create({
    login: {
     flex:1,
      width: "100%",
      height:"100%",
    },
  });
