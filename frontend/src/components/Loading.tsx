import React, { FC } from 'react';
import { LoadingIcon } from '../assets/icons/index';

const Loading: FC = () => (
  <div className="spinner">
    <img src={LoadingIcon} alt="Loading" />
  </div>
);

export default Loading;
