import { Record } from "../../interfaces/RecordEntities";
import { RecordIndexProps } from "../../interfaces/PagesProps";
import { useFeth } from "../../hooks/useFetch";
import { RecordList} from './List';

export const RecordIndex = <T extends Record>({
    ListItem,
    apiPath,
    apiOptions,
}: RecordIndexProps<T> ) =>{
    const { recods } = useFeth<T>(apiPath, apiOptions);

    return (
        <div className="page">
            <div className="content">
                <RecordList<T> ListItem={ListItem} records={recods}/>
            </div>
        </div>
    )
}