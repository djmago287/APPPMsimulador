import { Video } from "expo-av";
import { StyleSheet, Text , View } from "react-native";

export function Videos()
{
    return(
        <View>
            <Text>Video</Text>
           <Video
            source={{uri:'https://cenepsi.com/website/Img/video2.mp4'}} 
            style={style.video}
            rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
           >

           </Video>
        </View>
    )
}
const style = StyleSheet .create({
    video:{
        width: 200,
        height: 400,
    },
})