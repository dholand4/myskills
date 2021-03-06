import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

export function SkillCard({skill}){
    return (

        <TouchableOpacity 
        style={styles.buttonSkill}>
        <Text style={styles.TextSkill}>
          {skill}
        </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 20
  },
    TextSkill: {
      color: '#FFF',
      fontSize: 22,
      fontWeight: 'bold',
      
    }
  })