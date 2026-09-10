import { StyleSheet, TextInput, View } from 'react-native';

export function Field({ label, style, multiline }) {
  return (
    <View style={style}>
      <TextInput
        placeholder={label}
        placeholderTextColor="white"
        multiline={multiline}
        style={[
          styles.input,
          multiline && styles.multiline
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 8,
    color: '#ffffff',
  },

  multiline: {
    flex: 1,
    textAlignVertical: 'top',
  },
});