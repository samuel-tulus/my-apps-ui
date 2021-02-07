import * as React from 'react';
import { Text, View, Button, SafeAreaView, StyleSheet } from 'react-native';
import Footer from '../Components/Footer';

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}></View>
      <Footer
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  content: {
    flex: 0.95,
    marginVertical: 8,
  },
  text: {
    fontFamily: "Cochin",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    marginVertical: 8,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 8,
  },
  button: {
    marginHorizontal: 100,
    marginVertical: 8,
  }
});

export default Profile;