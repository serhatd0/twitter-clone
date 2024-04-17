import { Image, StyleSheet,Pressable } from 'react-native';
import { Text, View } from '@/components/Themed';
import { TweetType } from '@/types';
import { Link } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import IconButton from './IconButton';
import tweets from '@/assets/data/tweets';

type TweetProps ={
    tweet:TweetType;
}


const Tweet = ({tweet} :  TweetProps )=>{
    const theme = useColorScheme();
    // <Link href={`/tweet/${tweet.id}?filter=recent`}  asChild> 
    return (
    <Link href={`/tweet/${tweet.id}`}  asChild> 
    <Pressable
      style={{...styles.container,...(theme==='light' ? styles.light : {} )}}
    >
      <Image source={{uri:tweet.user.image}} style={styles.userImage}/>

      <View style={styles.mainContainer}>
        <View style={{flexDirection:'row'}}>
            <Text style={styles.name} >{tweet.user.name}</Text>
            <Text style={styles.username} >{tweet.user.username} · 2h </Text>
            <Entypo 
                name="dots-three-horizontal" 
                size={16} 
                color="gray" 
                style={{marginLeft:'auto'}}
                />

        </View>

        <Text style={styles.content}>{tweet.content}</Text>

        {tweet.image && <Image source={{uri:tweet.image}} style={styles.image}/>}

        <View style={styles.footer}>
           <IconButton icon="comment" text={tweet.numberOfComments|| 0}/>
           <IconButton icon="retweet" text={tweet.numberOfRetweets|| 0}/>
           <IconButton icon="heart" text={tweet.numberOfLikes|| 0}/>
           <IconButton icon="chart" text={tweet.impressions || 0}/>
           <IconButton icon="share-apple" />
            
        </View>
        
      </View>
    </Pressable>
    </Link>
   )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    padding:10,
    borderBottomWidth:StyleSheet.hairlineWidth,
    borderColor:'lightgrey',
    
  },
  light:{
    backgroundColor:'white'
  },
  userImage :{
    width:50 ,
    height:50,
    borderRadius:50
  },
  mainContainer:{
    marginLeft:10,
    flex:1,
    
  },
  name :{
    fontWeight:'600',
  },
  username :{
    color:'gray',
    marginLeft:5
  },
  content:{
    lineHeight:20,
    marginTop:5,
  },
  image:{
    width:'100%',
    aspectRatio:16/9,
    marginVertical:10,
    borderRadius:15
  },
  footer:{
    flexDirection:'row',
    marginVertical:5,
    justifyContent:'space-between'
  }
});


export default Tweet;