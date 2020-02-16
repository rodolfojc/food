import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import ResultsDetails from './ResultsDetails';

const ResultsList = ({ title, results }) => {
    return(
        <View styles={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={result => result.id}
            renderItem={({ item }) => {
                return <ResultsDetails result={item}/>;
            }}            
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default ResultsList;