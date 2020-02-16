import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetails = ({ result }) => {
    return(
        <View>
            <Text>{result.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ResultsDetails;
