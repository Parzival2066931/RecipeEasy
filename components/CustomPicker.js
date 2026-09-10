import { Picker } from '@react-native-picker/picker';

export function CustomPicker({
  values,
  suffix,
  selectedValue,
  onValueChange,
  style
}) {
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      style={style}
      dropdownIconColor="white"
    >
      {values.map((value) => (
        <Picker.Item
          key={value}
          label={`${value} ${suffix}`}
          value={value}
        />
      ))}
    </Picker>
  );
}