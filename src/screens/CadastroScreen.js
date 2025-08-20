import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function CadastroScreen() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se</Text>
      <Text style={styles.subtitle}>Informe seu nome, email e uma senha</Text>

      <TextInput
        style={styles.input}
        onChangeText={setNome}
        value={nome}
        placeholder="Nome completo"
      />

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        onChangeText={setSenha}
        value={senha}
        placeholder="Senha"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Ou continue com</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image
            source={require ( '../assets/Google.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require ( '../assets/Facebook.png')}
            
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 30,
    alignSelf: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  orText: {
    alignSelf: 'center',
    marginVertical: 20,
    color: '#555',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});
