import { View, Text, StyleSheet } from 'react-native';


function AcademicScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.title}>Academico</Text>
        <View style={styles.contentContainer}>
        <Text style={styles.content}>
            Bacharel em <Text style={{fontWeight: 'bold'}}>Sistemas de informação</Text> pela Estácio / FAL.    
          </Text>
          <Text>Cursando <Text style={{fontWeight: 'bold'}}>MBA em Engenharia de Software</Text> pela Faculdade Metropolitana de São Paulo</Text>

      </View>
      </View>
    );
}
  
const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  contentContainer: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    width: '80%',
  },
  content: {
    textAlign: 'justify',
  },
})
export default AcademicScreen;