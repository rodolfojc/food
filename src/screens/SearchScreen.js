import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async (searhTerm) => {
        try{
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searhTerm,
                location: 'san jose'
            }
        });
        }catch (err) {
            setErrorMessage('Something went wrong! try again later');
        }
        setResults(response.data.businesses);
    };

    // Call search API whennthe component is call first
    // searchAPI('pasta'); // NO RIGHT

    useEffect(() =>{
        searchAPI('pasta');
    }, []);

    return(
        <View>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmitted={() => searchAPI(term)}
            />
            {setErrorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;