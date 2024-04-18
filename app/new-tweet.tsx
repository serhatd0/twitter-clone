import { useState } from "react";

import { Link, useRouter } from "expo-router";
import { Image, StyleSheet, Text, View,TextInput, useColorScheme, Pressable, SafeAreaView } from "react-native";

const user ={
   
      id: 'u1',
      username: 'VadimNotJustDev',
      name: 'Vadim',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
}

export default function NewTweet(){
  const [text,setText]=useState("");
  const navigation = useRouter();

  const colorScheme = useColorScheme();
    const onTweetPress = () =>{
        console.warn(text);
        setText('');
        navigation.back();
    }
    return(
        <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Link href="../" style={{fontSize:18}}> 
                <Text style={{...(colorScheme==='light' ? {color:'black'} : {color:'white'} )}} >Cancel</Text>
                </Link>

                <Pressable onPress={onTweetPress} style={styles.button}> 
                <Text style={styles.buttonText}>Tweet </Text>
                </Pressable>
            </View>
            <View style={styles.inputContainer}>
                <Image src={user.image} style={styles.image}/>
                <TextInput 
                value={text}
                onChangeText={setText}
                placeholder="What's happening?"
                multiline
                numberOfLines={5}
                style={{flex:1,...(colorScheme==='light' ? {color:'black'} : {color:'white'} )}}
                /> 
            </View>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        flex:1,
    },
    buttonContainer:{
        flexDirection:'row',
        marginVertical:10,
        justifyContent:'space-between',
        alignItems:'center'
    },
    button:{
        backgroundColor:'#1C9BF0',
        padding:10,
        paddingHorizontal:20,
        borderRadius:50
    },
    buttonText:{
        fontWeight:'600',
        color:'white',
        fontSize:16

    },
    inputContainer:{
        flexDirection:'row',
    },
    image:{
        width:50,
        aspectRatio:1,
        borderRadius:50,
        marginRight:10,
    }
})