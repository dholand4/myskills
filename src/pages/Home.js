import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [myskills, setMySkills] = useState([]);
  const [greeting, setGretting] = useState('');

  function handAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGretting('Bom Dia');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Boa Tarde');
    } else {
      setGretting('Boa Noite');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-Vindo, Daniel!</Text>

      <Text style={styles.greetings}> {greeting} </Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#999"
        onChangeText={setNewSkill}
      />

      <Button onPress={handAddNewSkill} />

      <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>

      <FlatList
        data={myskills}
        keyExtractor={item => item}
        renderItem={({item}) => <SkillCard skill={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },

  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 8,
  },

  greetings: {
    color: '#FFF',
  },
});
