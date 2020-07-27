import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-tiny-toast'
import styles from '../Styles'

export default function Login() {
  const authenticate = () => {
    Toast.showLoading('処理中...')

    setTimeout(() => {
      // Recommend
      Toast.hide()
      Actions.toppage()
    }, 3000)
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text
        style={styles.formTitleStyle}
      >
        カッコいいアプリ名
      </Text>
      <TextInput
        placeholder="ユーザーID"
        style={styles.formInputStyle}
      />
      <TextInput
        placeholder="パスワード"
        style={styles.formInputStyle}
      />
      <TouchableOpacity
        style={styles.formSubmitButton}
        onPress={() => {
          authenticate()
        }}
      >
         <Text style={styles.formSubmitButtonText}>ログイン</Text>
      </TouchableOpacity>
    </View>
  );
}
