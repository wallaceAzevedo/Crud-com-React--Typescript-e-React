//import { useEffect } from 'react';
import { Record } from '../../interfaces/RecordEntities';
import { RecordMutaionsProps } from '../../interfaces/PagesProps';
import { RecordNew } from './New';
import { RecordEdit } from './Edit';
import { useMutation } from '../../hooks/useMutation';
//import { Status } from '../../components/Status';
//import { RecordError } from '../../components/RecordError';

export const RecordMutations = <T extends Record>({
    FormFields,
    activeRecord,
    apiPath,
    callback,
}: RecordMutaionsProps<T>) => {
  const { create, update, remove } = useMutation<T>(apiPath, callback);

  return (
    <div className="mutations">
      {activeRecord.id ? (
        <RecordEdit<T> 
        FormFields={FormFields} 
        activeRecord={activeRecord}
        update={update}
        remove={remove}
        />
      ) : (
        <RecordNew<T> 
        FormFields={FormFields} 
        activeRecord={activeRecord}
        create={create}
        />
      )}
    </div>
  );
};