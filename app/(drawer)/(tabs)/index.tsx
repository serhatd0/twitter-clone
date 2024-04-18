import { View,Image, StyleSheet,FlatList, Pressable } from 'react-native';
import { Text,  } from '@/components/Themed';
import tweets from '@/assets/data/tweets';
import Tweet from '@/components/Tweet';
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';


const tweet = tweets[0];
export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList 
      data={tweets}
      renderItem={({item})=> <Tweet tweet={item} />}
      />
        <Link href="/new-tweet" asChild>
          <Entypo name="plus" size={24} color="white" style={styles.floatingButton}/>
        </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  page:{
    flex:1,
  },
  floatingButton:{
  backgroundColor:'#1C9BF0',
  width:50,
  height:50,
  borderRadius:25,


  textAlign:'center',
  lineHeight:50,

  position:'absolute',
  right:15,
  bottom:15,

  shadowColor:'#000',
  shadowOffset:{
    width:0,
    height:2,
  },
  shadowOpacity:0.25,
  shadowRadius:3.84,

  elevation:5,
  overflow:'hidden',

  }
});
