import { AxiosError } from "axios";
import { ValidationError } from "class-validator";

interface IProps {
    error:AxiosError;
}

export const RecordError: React.FC<IProps> =({ error }) =>{
    const validationErrors = error?.response?.data
    ?.validation as ValidationError[];

    return (
        <div className="error">
            <div>
                <b>Message:</b>{error.message}
            </div>
            <div>
                <b>URL:</b>{error.config.url}
            </div>
            {error.response?.data.message && (
                <div>
                    <b>Details</b>{error.response?.data.message}
                </div>
            )}
            {validationErrors && 
            validationErrors.map((error, errorkey) => (
                <ul key={errorkey}>
                    {error.constraints &&
                    Object.values(
                        error.constraints
                    ).map((contraint, constrainKey)=>(
                        <li key={constrainKey}>{contraint}</li>
                    ))}
                </ul>
            ))
            }
        </div>
    )
}