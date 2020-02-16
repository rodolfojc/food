import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {

    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResults();
    
    const filterResultsByPrice = (price) => {
        // Price === $, $$ or $$$
        return results.filter(result => {
            return result.price === price;
        })
    };

    return(
        <>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmitted={() => searchAPI(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}            
            <ScrollView>
                <ResultsList 
                    title="Cost Efective"
                    results={filterResultsByPrice('$')}
                    navigation={navigation}
                />
                <ResultsList 
                    title="Bit Pricier"
                    results={filterResultsByPrice('$$')}
                    navigation={navigation}
                />
                <ResultsList 
                    title="Big Spencer"
                    results={filterResultsByPrice('$$$')}
                    navigation={navigation}
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;