import axios from 'axios';

export const getNews = async () => {
    const URL ='http://localhost:5000';
    try {
        return await axios.get(`${URL}/news`);
    } catch(error) {
        console.log('Error while calling get new api', error);
    }
}