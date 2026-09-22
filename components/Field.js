import { StyleSheet, TextInput, View } from 'react-native';

export function Field(props) {
  return (
    <View style={props.style}>
      <TextInput
        placeholder={props.label}
        placeholderTextColor="white"
        value={props.value}
        onChangeText={props.onChangeText}
        multiline={props.multiline}
        style={[
          styles.input,
          props.multiline && styles.multiline
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