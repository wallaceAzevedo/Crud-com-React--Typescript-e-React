import { AxiosError } from 'axios';

interface IProps {
  error: AxiosError;
}

export const RecordError: React.FC<IProps> =({ error }) =>{

    return (
        <div className="error">
            
        </div>
    )
}