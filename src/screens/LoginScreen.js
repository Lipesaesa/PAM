import { styles } from '../styles/style';
import { ScrollView , Text , TouchableOpacity, Image, View} from 'react-native';
import { MotiView } from 'moti';

export default function LoginScreen({navigation}){
    
const Cadastro = () =>{
    
}
const Acesso = () =>{
    navigation.navigate('Acesso')
}
    return(
        <ScrollView >

        <View style={styles.background}>
            <MotiView 
              from={{
                opacity: 0,
                translateY: -50,
                scale: 0.9,
              }}
              animate={{
                translateY: 0,
                scale: 1,
                opacity: 1,
              }}
              transition={{
                  damping: 12,
                  stiffness: 120,
                  mass: 0.8,
                  delay: 200,
                  type: "spring",
              }}
            >

                <Image
                    source={require('../assets/casual_dog.png')}
                    style={styles.dog}
                    />
            
                    </MotiView>
              <MotiView 
              from={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 400, type: "timing", duration: 600 }}
            >

                <Text style={styles.h1}>Ótimo dia!</Text>
                <Text style={styles.h3}> Como deseja acessar?</Text>
            </MotiView>

            <MotiView 
              from={{ opacity: 0, translateY: 30 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 700, type: "timing", duration: 600 }}
            >
                <TouchableOpacity style={styles.btn1} onPress={()=> navigation.navigate('Acesso')}>

                <Image
                    source={ require('../assets/Google.png')}
                    style={styles.google}
                    />
                <Text style={styles.textBtn1}>Como deseja acessar?</Text>
                
                </TouchableOpacity>

            </MotiView>
            
            <MotiView 
              from={{ opacity: 0, translateY: 30 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 900, type: "timing", duration: 600 }}
            >

                <TouchableOpacity style={styles.btn2} onPress={()=> navigation.navigate('Cadastro')}>
                    <Text style={styles.textBtn2}>Outras opções</Text>
                </TouchableOpacity>
            </MotiView>
        </View>

        </ScrollView>
    )
}