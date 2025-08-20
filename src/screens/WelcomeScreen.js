import { styles } from "../styles/style";
import {View,TouchableOpacity, Text, ScrollView, TextInput, Image} from "react-native";
import Checkbox from 'expo-checkbox';
import { useState } from "react";
import { MotiView } from "moti";

export default function WelcomeScreen({ navigation }) {
  const aviso = () =>{
    if(email === 'Admin' && senha === 'Admin' && check != false){
        alert('Você realizou o login, todavia, o app só vai até aqui por enquanto :p');
    }else{
        alert('Não realizou o login.\nPossiveis erros: Campos Email/Senha vazios\nOu Não concordou com os termos de uso');
    }
  }
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [check, setChecked] = useState(false);

  return (
    <ScrollView style={styles.background}>

      <MotiView
        from={{ opacity: 0, translateY: -30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 200, type: "timing", duration: 500 }}
      >
       
        <View style={styles.cadastroTitle}>

          <Text style={styles.cadastroH1}> Acesse</Text>
          <Text style={styles.cadastroAlgumacoisa}>Area para fazer o Login</Text>
        </View>
      </MotiView>

      <MotiView
        from={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 400, type: "spring", damping: 10 }}
      >
        <View style={styles.BlocoE}>

          <Text style={styles.Email}> Email: </Text>
          <TextInput
            style={styles.SndEmail}
            placeholder="Digite seu email aqui"
            value={email}
            onChangeText={setEmail}
          ></TextInput>
        </View>

      </MotiView>

      <MotiView
        from={{ opacity: 0, translateX: -30 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ delay: 600, type: "timing", duration: 500 }}
      >
        <View style={styles.BlocoS}>
                <Text style={styles.Senha}>Senha:</Text>
                
                <View style={styles.inputContainer}>

                    <TextInput style={styles.SndSenha}
                     placeholder='Digite sua senha aqui'
                     value={senha}
                     onChangeText={setSenha}
                    ></TextInput>
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
        from={{ opacity: 0, translateY: -30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 700, type: "timing", duration: 500 }}
      >

        <View style={styles.Checkbox}>
        <Checkbox
        value={check}
        onValueChange={setChecked}
        color={check ? '#13b666' : undefined}
        />
        <Text style={styles.checkboxTxt}>Concordo com os Termos de Serviço</Text>
        </View>
    </MotiView>

      <MotiView
        from={{ opacity: 0, rotateX: "-90deg" }}
        animate={{ opacity: 1, rotateX: "0deg" }}
        transition={{ delay: 600, type: "timing", duration: 600 }}
      >
        <View style={styles.acessoBtns}>

          <TouchableOpacity style={styles.acessoBtn} onPress={aviso} >
            <Text style={styles.acessoBtnText}>Entre</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.acessoBtn2} onPress={()=>navigation.navigate('Cadastro')}>
            <Text style={styles.acessoBtnText2}>Cadastre-se</Text>
          </TouchableOpacity>

        </View>
      </MotiView>

      <MotiView
        from={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1000, type: "spring", damping: 12 }}
      >

        <View style={styles.ou}>
          <View style={styles.Line} />
          <Text>OU</Text>
          <View style={styles.Line} />
        </View>

      </MotiView>
      
      <MotiView
        from={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 800, type: "timing", duration: 500 }}
      >

        
        <View style={styles.blocoRedes}>

          <TouchableOpacity style={styles.Google}>
            <Image source={require("../assets/Google.png")} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.Facebook} >
            <Image source={require("../assets/Facebook.png")} />
          </TouchableOpacity>
        </View>

      </MotiView>

    </ScrollView>
  );
}