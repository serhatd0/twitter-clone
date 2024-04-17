
import { Text, View } from '@/components/Themed';
import { EvilIcons } from '@expo/vector-icons';

type IconButtonProps ={
    icon:React.ComponentProps<typeof EvilIcons>['name'];
    text?:number | string ;
}

const IconButton =({icon,text}:IconButtonProps)=>{
return (
 <View style={{flexDirection:'row',alignItems:'center'}}>
                <EvilIcons name={icon} size={22} color="gray"/>
                <Text style={{fontSize:12, color: 'gray'}}>{text}</Text>
 </View>
)
};

export default IconButton;