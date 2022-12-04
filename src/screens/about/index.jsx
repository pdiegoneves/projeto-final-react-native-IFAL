import { View, Text, StyleSheet } from 'react-native'

function AboutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.title}>Sobre</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>
          Gosto de programar e ensinar. Já fui professor de curso de hardware,
          já tive um canal sobre criptomoedas no youtube e já criei um curso
          online sobre informática básica.
        </Text>
        <Text></Text>
        <Text style={styles.content}>
          Atualmento estou em processo de transição de carreira, tentando
          iniciar na carreira de desenvolvedor front-end web.
        </Text>
      </View>
    </View>
  )
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

export default AboutScreen
