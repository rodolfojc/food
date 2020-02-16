import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResults();
    
    return(
        <View>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmitted={() => searchAPI(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ResultsList title="Cost Efective"/>
            <ResultsList title="Bit Pricier"/>
            <ResultsList title="Big spencer"/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;