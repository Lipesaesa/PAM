import { styles } from '../styles/style';
import { View, TouchableOpacity, Text, ScrollView, TextInput, Image} from 'react-native';
import { MotiView } from 'moti';
import { useState } from 'react';

export default function CadastroScreen({navigation}){
      const aviso = () =>{
    if(email != '' && senha != '' && senha === confirma){
        alert('Você Criou a conta, todavia, o app só vai até aqui por enquanto :p');
    }else{
        alert('Não realizou o login.\nPossiveis erros: Campos Email/Senha vazios\nSenhas diferentes');
    }
  }  
    
    const [email, setEmail] = useState('');
      const [senha, setSenha] = useState('');
      const [confirma, setConfirma] = useState('');
    return(
        <ScrollView style={styles.background}>
        <MotiView
                from={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 400, type: 'timing', duration: 600 }}
        >
            <View style={styles.cadastroTitle}>
                <Text style={styles.cadastroH1}> Cadastre-se</Text>
            
                <Text style={styles.cadastroAlgumacoisa}> Area para realizar o cadastro</Text>
            </View>
        </MotiView>
        
        <MotiView
        from={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 700, type: "spring", damping: 10 }}
        >

            <View style={styles.BlocoE}>
                <Text style={styles.Email}> Email: </Text>
                <TextInput style={styles.SndEmail} 
                placeholder='Digite seu email aqui'
                value={email}
                onChangeText={setEmail}
            />
            </View>

        </MotiView>
        <MotiView
        from={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 900, type: "spring", damping: 10 }}
        >
            <View style={styles.BlocoS}>
                <Text style={styles.Senha}>Senha:</Text>
                
                <View style={styles.inputContainer}>

                    <TextInput style={styles.SndSenha} 
                    placeholder='Digite sua senha aqui'
                    value={senha}
                    onChangeText={setSenha}/>
                        <TouchableOpacity style={styles.olhoBtn}>
                            <Image
                            style={styles.olho}
                            source={require('../assets/eye.png')}
                            />
                    </TouchableOpacity>
                </View>
            </View>
                        </MotiView>
        <MotiView
                from={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1000, type: "spring", damping: 10 }}
        >

            <View style={styles.BlocoS}>
                <Text style={styles.Senha}>Confirme sua senha:</Text>
                
                <View style={styles.inputContainer}>

                    <TextInput style={styles.SndSenha} 
                    placeholder='Digite sua senha aqui'
                    value={confirma}
                    onChangeText={setConfirma}/>
                        <TouchableOpacity style={styles.olhoBtn}>
                            <Image
                            style={styles.olho}
                            source={require('../assets/eye.png')}
                            />
                    </TouchableOpacity>
                </View>
            </View>

        </MotiView>
            
         <MotiView
        from={{ opacity: 0, rotateX: "-90deg" }}
        animate={{ opacity: 1, rotateX: "0deg" }}
        transition={{ delay: 1000, type: "timing", duration: 600 }}
        >

            <View style={styles.cadastroBtns}>
                <TouchableOpacity style={styles.cadastroBtn} onPress={aviso}>
                    <Text style={styles.cadastroBtnText}>Entre</Text>
                </TouchableOpacity>

            </View>
        </MotiView>
        <MotiView
        from={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1000, type: "spring", damping: 12 }}
        >

            <View style={styles.ou}>
                <View style={styles.Line}/>
                <Text>OU</Text>
                <View style={styles.Line}/>
            </View>
        </MotiView>

        <MotiView
            from={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 800, type: "timing", duration: 500 }}
        >
            <View style={styles.blocoRedes}>

            <TouchableOpacity style={styles.Google}>
                <Image source={require('../assets/Google.png')}/>
            </TouchableOpacity>
                
            <TouchableOpacity style={styles.Facebook}>
                 <Image source={require('../assets/Facebook.png')}/>
            </TouchableOpacity>
                
            </View>

        </MotiView>


        </ScrollView>
    )
}