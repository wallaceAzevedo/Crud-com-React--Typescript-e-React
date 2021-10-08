import { AxiosError } from 'axios';
import { ValidationError } from 'class-validator';

interface IProps {
  error: AxiosError;
}

export const RecordError: React.FC<IProps> =({ error }) =>{
    const validationErrors = error?.response?.data

    return (
        <div className="error">
            
        </div>
    )
}