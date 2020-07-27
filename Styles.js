import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  formTitleStyle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: "900",
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingBottom: 10,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  formInputStyle: {
    marginTop: 10,
    alignSelf: 'stretch',
    textAlign: 'left',
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    height: 40,
  },
  formSubmitButton: {
    marginTop: 10,
    backgroundColor: '#000',
    color: '#fff',
    width: '100%',
    height: 50,
    borderColor: '#fff',
    borderWidth: 1.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formSubmitButtonText: {
    color: '#fff',
  },
  whitText: {
    color: '#fff',
  },
});
