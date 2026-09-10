import { StyleSheet, Text, Pressable, View } from 'react-native';
import { RadioGroup } from 'react-native-radio-buttons-group';
import { Field } from './Field';
import { CustomPicker } from './CustomPicker';
import { useState } from "react";
import { SubmitButton } from './SubmitButton';

export function RecipeForm() {
  const [hours, setHours] = useState(0);
  const hourValues = [...Array(12).keys()];
  const [minutes, setMinutes] = useState(0);
  const minuteValues = [...Array(60).keys()];
  const categories = [
    {
      id: '1',
      label: 'Breakfast',
      value: '1',
      color: 'white',
    },
    {
      id: '2',
      label: 'Lunch',
      value: '2',
      color: 'white',
    },
    {
      id: '3',
      label: 'Dinner',
      value: '3',
      color: 'white',
    },
  ]

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <RadioGroup
          styles={styles.radio}
          labelStyle={styles.buttonLabel}
          layout="row"
          radioButtons={categories}
        />
      </View>
      

      <Field label="Name" />

      <View style={styles.durationRow}>
        <Text style={styles.text}>Duration</Text>

        <CustomPicker
          values={hourValues}
          suffix="h"
          selectedValue={hours}
          onValueChange={(value) => setHours(value)}
          style={styles.picker}
        />

        <Text style={styles.text}>:</Text>

        <CustomPicker
          values={minuteValues}
          suffix="mins"
          selectedValue={minutes}
          onValueChange={(value) => setMinutes(value)}
          style={styles.picker}
        />
      </View>

      <Field
        label="Description"
        multiline
        style={{ flex: 1, width: '100%' }}
      />

      <View style={styles.saveContainer}>
        <SubmitButton label="Save" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    gap: 16,
    padding: 16,
    backgroundColor: '#367e7f',
  },
  descriptionContainer: {
    flex: 1,
    width: '100%',
  },
  durationRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  saveContainer: {
    alignItems: 'center',
  },
  picker: {
    flex: 1,
    height: 50,
    color: 'white',
    backgroundColor: 'transparent',
    border: 'none'
  },
  radio: {
    alignItems: 'center',
  },
  buttonLabel: {
    color: 'white',
  },
  text: {
    color: 'white',
    margin: 10
  }
});