import axios from 'axios';
import { useState, useEffect } from 'react';
import {Record} from '../interfaces/RecordEntities';

export const useFeth = <T extends Record>(path: string, options?: {}) => {
    const [records, setRecords] = useState<T[]>([]);
    const url = `${process.env.REACT_APP_API}/${path}`;

    useEffect(() => {
        const callFetcthFuction = async () => {
            const res = await  axios.get<T[]>(url, { params: options });
            setRecords(res.data);
        }
        callFetcthFuction();
    },  [url, options]);
    return { records};
};