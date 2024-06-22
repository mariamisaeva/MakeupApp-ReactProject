import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchProducts(url) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setProducts(response.data);

            } catch (error) {
                setError(error);

            } finally {
                setLoading(false);
            }

        }
        fetchData();
    }, [url]);

    return { products, loading, error };

}

export default useFetchProducts;
