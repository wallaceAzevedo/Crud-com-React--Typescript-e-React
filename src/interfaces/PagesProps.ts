import React from "react";

export interface RecordIndexProps<T>{
    Listem:React.FC<ListItemProps<T>>;
    apiPath: string;
    apiOptions:{};
}