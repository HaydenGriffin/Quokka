import React, { FC, useState } from 'react';
import { ReactComponent as CloseIcon } from '../assets/icons/x.svg';

type ErrorAlertProps = {
  errormsg: string;
};

const ErrorAlert: FC<ErrorAlertProps> = ({ errormsg }: ErrorAlertProps) => {
  const [ErrorDialog, setErrorDialog] = useState<string>(' hidden');

  const off = () => {
    setErrorDialog(' hidden');
  };

  const on = () => {
    setErrorDialog(' relative');
  };

  return (
    <div
      className={
        'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded' +
        ErrorDialog
      }
      role="alert"
    >
      <span className="block sm:inline">{errormsg}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <button
          className="absolute right-0 mr-3 w-5 cursor-pointer"
          onClick={off}
        >
          <CloseIcon />
        </button>
      </span>
    </div>
  );
};
export default ErrorAlert;
