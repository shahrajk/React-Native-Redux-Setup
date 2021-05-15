import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { connect, useSelector } from 'react-redux';
import { Submit } from '../Redux/Actions'

const index = (props) => {

    const [value, setvalue] = useState('')
    const Data = useSelector(state => state.Data.UserData);

    const SubmitValue = () => {
        if (value) {
            props.Submit(value)
            setvalue('')
        } else {
            alert('Please enter value')
        }
    }

    return (
        <SafeAreaView>
            <View style={{ borderWidth: 1, marginHorizontal: 16, padding: 10 }}>
                <TextInput
                    value={value}
                    onChangeText={(text) => setvalue(text)}
                />
            </View>
            <View style={{ alignItems: 'center', marginTop: 16 }}>
                <TouchableOpacity onPress={SubmitValue}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
            {Data.map((element) => {
                return (
                    <View key={element} style={{ margin: 10 }}>
                        <Text>{element}</Text>
                    </View>
                )
            })}
        </SafeAreaView>
    )
}

export default connect(null, { Submit })(index)