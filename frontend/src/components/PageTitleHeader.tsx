import React from 'react';
import CreateButton from './Button';
import {FC} from 'react';


const PageTitleHeader: FC = () => {
    return (
        <div className="flex align-center">
            <h1 className="text-6xl font-bold">Projects</h1>
            <CreateButton/>
        </div>
    )
  
  }
export default PageTitleHeader

