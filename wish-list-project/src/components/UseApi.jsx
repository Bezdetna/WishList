import { useEffect, useState } from 'react';

const useApi = (url) => {
    const [items, setItems] = useState(null);
    const [isPending, setIsPeding] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("Failed")
                } return res.json();
            })
            .then(data => {
                setItems(data);
                setIsPeding(false);
                setError(null);
            })
            .catch(err => {
                setIsPeding(false);
                setError(err.message);
            })
    }, [url]);

    return { items, isPending, error };
};

export default useApi;