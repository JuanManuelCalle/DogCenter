import { View, Text, Modal, Pressable } from 'react-native'
import React from 'react'
import styles from './style'

const ModalDelete = ({modalVisible, setModalVisible, onConfirmDeletion, selectedPlace}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <Text style={styles.modalTextTitle}>Quieres eliminar el siguiente objeto?</Text>  
        <Text style={styles.modalText}>{selectedPlace?.name}</Text>
        <View style={styles.containerButtons}>
            <Pressable style={styles.button} onPress={() => setModalVisible(false)}>
                <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => onConfirmDeletion(selectedPlace?.id)}>
                <Text style={styles.textStyle}>Eliminar</Text>
            </Pressable>
        </View>
      </View>  
    </Modal>
  )
}

export default ModalDelete