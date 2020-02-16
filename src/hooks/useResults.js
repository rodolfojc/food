import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
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
        setResults(response.data.businesses);
        }catch (err) {
            setErrorMessage('Something went wrong! try again later');
        }        
    };

    useEffect(() => {
        searchAPI('pasta');
    }, []);

    return [searchAPI, results, errorMessage];
};