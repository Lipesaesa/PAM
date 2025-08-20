import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [manterLogado, setManterLogado] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acesse</Text>
      <Text style={styles.subtitle}>Informe seus dados de acesso</Text>

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          onChangeText={setSenha}
          value={senha}
          placeholder="Senha"
          secureTextEntry={!mostrarSenha}
        />
        <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
          <Text style={styles.toggleText}>{mostrarSenha ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setManterLogado(!manterLogado)}
        >
          {manterLogado && (
            <Text style={styles.checkmark}>✓</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>Manter-se logado</Text>

        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.accessButton}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton} >
        <Text style={styles.registerText}>Cadastrar-se</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Ou continue com</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image source={require('../assets/Google.png')} style={styles.socialIcon} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../assets/Facebook.png')} style={styles.facebookIcon} />
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
    marginBottom: 8,
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 25,
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleText: {
    marginLeft: 10,
    fontSize: 18,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkmark: {
    fontSize: 16,
    color: '#00C851',
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  forgotText: {
    color: '#007BFF',
    fontSize: 14,
  },
  accessButton: {
    backgroundColor: '#00C851',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  registerButton: {
    borderWidth: 1,
    borderColor: '#00C851',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  registerText: {
    color: '#00C851',
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
  facebookIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});
