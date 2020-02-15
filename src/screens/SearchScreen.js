import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async () => {
        try{
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term,
                location: 'san jose'
            }
        });
        }catch (err) {
            setErrorMessage('Something went wrong! try again later');
        }
        setResults(response.data.businesses);
    };

    return(
        <View>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmitted={searchAPI}
            />
            {setErrorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;