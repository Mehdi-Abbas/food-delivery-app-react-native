import React, {useEffect, useState} from 'react';
import { icons, images, SIZES, COLORS, FONTS } from '../constants'

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import ConfettiCannon from 'react-native-confetti-cannon';

const Message_ = ({ route, navigation }) => {
  const [shoot, setShoot] = useState(false);

  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.cardStyle}>
          <Text style={styles.headingStyle}>
            Thanks for the order
          </Text>
          <View style={styles.simpleLineStyle} />
          <Text style={styles.paragraph}>
            Your food will be delivered soon
          </Text>
          <Image
            style={styles.logoStyle}
            source={require('../assets/images/bike.png')}
          />
          
          
          <TouchableOpacity
                    style={{
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate("Home")}
                >
                   <View
                        style={{
                        marginTop: 20,
                        backgroundColor: COLORS.primary,
                        width: '100%',
                        borderRadius: 10,
                        }}>
                        <Text
                        style={{
                            color: 'white',
                            fontSize: 18,
                            padding: 10,
                            textAlign: 'center',
                        }}
                        // 
                        >
                        Goto Home
                        </Text>
                    </View>
                    
            </TouchableOpacity>
          
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default Message_;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 15,
    backgroundColor: '#ecf0f1',
    padding: 12,
  },
  cardStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: 'white',
  },
  textLargeStyle: {
    margin: 24,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'green',
  },
  simpleLineStyle: {
    backgroundColor: 'grey',
    width: '100%',
    height: 1,
  },
  headingStyle: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.primary,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
  logoStyle: {
    height: 120,
    width: 120,
  },
});