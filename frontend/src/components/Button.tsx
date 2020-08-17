import React, { FC, PropsWithChildren, MouseEvent } from 'react';

type ButtonProps = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const PrimaryButton: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button className="btn-primary" onClick={onClick}>
      {children}
    </button>
  );
};
export default PrimaryButton;
