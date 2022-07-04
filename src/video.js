import { Video } from "expo-av";
import { Text , View } from "react-native";

export function Videos()
{
    return(
        <View>
            <Text>Video</Text>
           <Video
            source={{uri:'https://cenepsi.com/website/Img/video2.mp4'}} 
            style={{ width: 500, height: 500 }}
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