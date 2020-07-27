import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Toast from 'react-native-tiny-toast'
import styles from '../Styles.js'

export default function Login() {
  const logout = () => {
    Toast.showLoading('処理中...')

    setTimeout(() => {
      // Recommend
      Toast.hide()
      Actions.login()
    }, 3000)
  }

  return (
    <View style={styles.container}>
      <Text
        style={styles.whitText}
      >
        ようこそ、カッコいいアプリへ
      </Text>
      <TouchableOpacity
        style={styles.formSubmitButton}
        onPress={() => {
          logout()
        }}
      >
         <Text style={styles.formSubmitButtonText}>ログアウト</Text>
      </TouchableOpacity>
    </View>
  );
}
