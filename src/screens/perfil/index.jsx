import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, Modal, Pressable } from 'react-native'

import foto from '../../../assets/images/perfil.jpeg'

function PerfilScreen() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.viewModal}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isVisible}
          onRequestClose={() => {
            setModalVisible(!isVisible)
          }}
        >
          <Pressable onPress={() => setIsVisible(false)}>
            <View style={styles.janelaModal}>
              <Text style={styles.titleResume}>Diego Neves</Text>
              <View style={styles.contetResume}>
                <Text>
                  Sou apaixonado por programação, a lista das linguagens que
                  estudei passa por:
                </Text>
                <Text style={styles.itemResume}>- C, C++;</Text>
                <Text style={styles.itemResume}>- Java;</Text>
                <Text style={styles.itemResume}>- Delphi;</Text>
                <Text style={styles.itemResume}>- Portugol;</Text>
                <Text style={styles.itemResume}>- Lua;</Text>
                <Text style={styles.itemResume}>- Visual Basic</Text>
                <Text style={styles.itemResume}>- Python</Text>
                <Text></Text>
                <Text>Atualmente estou focado em?</Text>
                <Text style={styles.itemResume}>- HTML</Text>
                <Text style={styles.itemResume}>- CSS</Text>
                <Text style={styles.itemResume}>- JavaScrip</Text>
                <Text style={styles.itemResume}>- React</Text>
              </View>
            </View>
          </Pressable>
        </Modal>
      </View>
      <View>
        <Text>Clique na imagem para saber mais</Text>
        <Pressable onPress={() => setIsVisible(true)}>
          <Image style={styles.foto} source={foto} />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  foto: {},
  janelaModal: {
    width: '90%',
    height: '90%',
    left: '5%',
    top: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 50,
  },
  titleResume: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  contetResume: {
    textAlign: 'left',
  },
  itemResume: {
    marginLeft: 25,
  }
})

export default PerfilScreen
