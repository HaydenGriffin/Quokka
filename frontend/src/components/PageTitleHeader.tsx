import React, { PropsWithChildren, FC } from 'react';
import { ReactComponent as ArtistIcon } from '../assets/icons/mic-thicc.svg';

type PageTitleProps = {
  title: string;
};

const PageTitleHeader: FC<PropsWithChildren<PageTitleProps>> = ({
  title,
  children,
}: PropsWithChildren<PageTitleProps>) => {
  return (
    <div className="flex mt-10 items-center">
      <h1 className="text-6xl font-bold mr-3">{title}</h1>
      {children}
    </div>
  );
};
export default PageTitleHeader;
