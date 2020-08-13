import React, { FC, PropsWithChildren, MouseEvent } from 'react';

type ButtonProps = {
  //onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

const PrimaryButton: FC<PropsWithChildren<ButtonProps>> = ({
  children,
}: PropsWithChildren<ButtonProps>) => {
  return <button className="btn-primary">{children}</button>;
};
export default PrimaryButton;
