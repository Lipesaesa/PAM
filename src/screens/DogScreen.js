
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

export default function DogScreen({navigation}){
    return (

   
        <View style= {styles.container}>
          <Image
                style={styles.dogImage}
                source={ require('./assets/dog.png') }
            />
            <View>
                <Text style = {styles.h1}>Ótimo dia!</Text>
            </View>
            <View>
                <Text style = {styles.h3}>Como deseja acessar?</Text>
            </View>
            
      

    
              <TouchableOpacity style = {styles.button1}>
                     <Image
                    style={styles.google}
                     source={require('./assets/Google.png')}
                    />
                    <Text style = {styles.txtbutton1}>Como deseja acessar?</Text>
                 </TouchableOpacity>
           <View>
                <TouchableOpacity style={styles.button2}>
                    <Text style = {styles.txtbutton2}>Outras opções</Text>
                </TouchableOpacity>
            </View>
        </View>
        
     );} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    h1: {
        marginLeft: windowWidth * 0.25,
        justifyContent: "center",
        alignItems: "center",
        color: "#32404d",
        fontSize: 40,
        marginBottom: windowWidth * 0.02,
    },

    h3: {
        marginLeft: windowWidth * 0.3,
        justifyContent: "center",
        alignItems: "center",
        color: "#32404d",
        fontSize: 14,
    },

    dogImage: {
        height: windowWidth * 0.82,
        marginTop: windowWidth * 0.01,
        marginBottom: windowWidth * 0.1,
    },

    button1: {
        marginTop: windowWidth * 0.2,
        flexDirection: "row",
        backgroundColor: "#13b666",
        marginLeft: windowWidth * 0.05,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10,
        width: windowWidth * 0.9,
        height: windowWidth * 0.17,
    },

    txtbutton1: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 4,
        color: "#f2f2f2",
        fontSize: 15,
        marginRight: windowWidth * 0.23,
    },

    button2: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F2FAFA",
        borderColor: "#13b666",
        borderWidth: 2,
        padding: "5px",
        marginTop: windowWidth * 0.05,
        marginLeft: windowWidth * 0.05,
        marginBottom: windowWidth * 0.2,
        borderRadius: 10,
        width: windowWidth * 0.9,
        height: windowWidth * 0.17,
    },

    txtbutton2: {
        color: "#32404d",
        fontSize: 15,
    },

    titleContainer: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    buttonContainer: {
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },

});