import * as React from 'react';
import { StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Item = Picker.Item;

function PickerFirstEvidence() {
    const [value, setValue] = React.useState('firstEvidence');
    return (
      <Picker
        testID="basic-picker"
        selectedValue={value}
        prompt="Pick one evidence"
        onValueChange={(v) => setValue(v)}>
        <Item label="Ghost Orb" value="key0" />
        <Item label="Spirit Box" value="key1" />
        <Item label="Fingerprints" value="key2" />
        <Item label="EMF Level 5" value="key3" />
        <Item label="Freezing Temperatures" value="key4" />
        <Item label="Ghost Writing" value="key5" />
      </Picker>
    );
}

function PickerSecondEvidence() {
    const [value, setValue] = React.useState('secondEvidence');
    return (
      <Picker
        testID="basic-picker"
        selectedValue={value}
        prompt="Pick one evidence"
        onValueChange={(v) => setValue(v)}>
        <Item label="Ghost Orb" value="key0" />
        <Item label="Spirit Box" value="key1" />
        <Item label="Fingerprints" value="key2" />
        <Item label="EMF Level 5" value="key3" />
        <Item label="Freezing Temperatures" value="key4" />
        <Item label="Ghost Writing" value="key5" />
      </Picker>
    );
}

function PickerThirdEvidence() {
    const [value, setValue] = React.useState('thirdEvidence');
    return (
      <Picker
        testID="basic-picker"
        selectedValue={value}
        prompt="Pick one evidence"
        onValueChange={(v) => setValue(v)}>
        <Item label="Ghost Orb" value="key0" />
        <Item label="Spirit Box" value="key1" />
        <Item label="Fingerprints" value="key2" />
        <Item label="EMF Level 5" value="key3" />
        <Item label="Freezing Temperatures" value="key4" />
        <Item label="Ghost Writing" value="key5" />
      </Picker>
    );
}

const styles = StyleSheet.create({
    container: {
      color: 'white',
      backgroundColor: '#333',
    },
});

export const title = '<Picker>';
export const description =
  'Provides multiple options to choose from, using either a dropdown menu or a dialog.';

export const examples = [
    {
        title:'#1 Evidence',
        render: PickerFirstEvidence
    },
    {
        title:'#2 Evidence',
        render: PickerSecondEvidence
    },
    {
        title:'#3 Evidence',
        render: PickerThirdEvidence
    }
];