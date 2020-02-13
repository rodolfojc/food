import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    return(
        <View>
            <SearchBar />
            <Text>Welcome to Search Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;