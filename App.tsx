import axios from 'axios';
import { TouchableOpacity, Text, StyleSheet , View , TextInput} from 'react-native';
import { useState } from 'react';


export default function App() {
  const [ProcurarMamifero, SetProcurarMamifero] = useState('');
  const [MamiferoNome, SetMamiferoNome] = useState('');

  const HandleProcurar = async () => {
    try {
      const response = await axios.get(`http://localhost:3333/mamifero/${ProcurarMamifero}`, {
        params: { nome: ProcurarMamifero }
      });

      if (response.data.length > 0) {
        const primeiroMamifero = response.data[0];
        const nomeDoMamifero = primeiroMamifero.nome;

        console.log("Nome do primeiro mamífero:", nomeDoMamifero);

        SetMamiferoNome(nomeDoMamifero);
      } else {
        console.log("Nenhum mamífero encontrado com esse nome");
        SetMamiferoNome("");
      }

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style= {styles.h1}>
        PROCURA DE MAMÍFEROS
      </Text>
      <TextInput 
        style={styles.input}
        value={ProcurarMamifero}
        onChangeText={SetProcurarMamifero}
        placeholder='Digite o nome do mamífero'
      />
      <View style={styles.buttonall}>
      <TouchableOpacity style={styles.button} onPress={HandleProcurar}>
             <Text style={styles.buttonText}>Procurar</Text>
</TouchableOpacity>
      </View >
      {MamiferoNome ? (
        <Text style={styles.resultProcura}>Nome do Mamífero encontrado: {MamiferoNome}</Text>
      ) : ( <Text style={styles.resultProcura}>Nenhum Mamífero encontrado</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 12,
    backgroundColor: 'gray',
    borderRadius: 5,
    marginBottom:100,
    width:250,
    textAlign:'center',
    fontWeight: '500',
    borderColor:'transparent',



  },
  h1:{
    color:'orange',
    textAlign:'center',

    fontSize:30,
    position:'absolute',
    marginTop:25,
    fontWeight:'600',
    top:0,

  },
  button:{
    width:150,
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
  buttonall:{

  },
  buttonText:{

  },
  resultProcura: {
    backgroundColor: 'orange',
    marginTop:50,
    borderRadius:20,
    color: 'white',
    padding:20,
    width:180,
    textAlign:'center',
    fontWeight:'500',
    justifyContent:'center',




  }
});
