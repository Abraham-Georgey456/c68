import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class TransactionScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}> Transaction Screen </Text>
            </View> 
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5653D4"
    },
    text: {
        color: "#FFFFF",
        fontSize: 30,
    }
});
