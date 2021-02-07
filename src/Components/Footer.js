import * as React from 'react';
import { StyleSheet, Button, View } from 'react-native';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Button 
          title="Home"
          onPress={() =>
            navigation.navigate('Home')
          }
        />
      </View>
      <View style={styles.content}>
        <Button
          title="Profile"
          onPress={() =>
            navigation.navigate('Profile')
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  content : {
    flex: 1,
    borderColor: 'white',
    borderWidth: 1
  }
});

export default Footer;