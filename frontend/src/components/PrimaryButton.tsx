import React, { FC, PropsWithChildren, MouseEvent } from 'react';

type PrimaryButtonProps = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const PrimaryButton: FC<PropsWithChildren<PrimaryButtonProps>> = ({
  children,
  onClick,
}: PropsWithChildren<PrimaryButtonProps>) => {
  return (
    <button className="btn-primary" onClick={onClick}>
      {children}
    </button>
  );
};
export default PrimaryButton;
