import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer icr24jz-YY-moeBH6tqeAR2EQAwR7x44SkHZns0Xf7CWo5zKYHWbvIYEPKHFEXRjQFB0wjf3DjqKYa2qkTza4aKsuk-Qk9zIh9n0fKILgXOleo5lzFC6aAhlmYtFXnYx'
    }
});