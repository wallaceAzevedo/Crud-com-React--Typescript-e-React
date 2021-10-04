import React from 'react';
import { Article } from '../../interfaces/RecordEntities';
import {RecordIndex} from '../Record';
import { ArticleListem } from './Listem';

export const ArticleIndex: React.FC = () => {
    const apiOptions = { relations: ['author'] };

    return (
        <RecordIndex <Article>
            ListItem={ArticleListem}
            apiPath="articles"
            apiOptions={apiOptions}
        />
    );
};