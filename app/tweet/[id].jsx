import Tweet from '../../components/Tweet';
import tweets from '../../assets/data/tweets';
import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';


export default function TweetScreen(){
    const { id }= useLocalSearchParams();
    const tweet = tweets.find(t=> t.id === id );
    
    if(!tweet)
    return <Text> Tweet {id} not found</Text>
    return(
        <Tweet tweet={tweet}/>
    )
}