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
      <ArtistIcon className="w-12 h-12" />
      <h1 className="text-6xl font-bold mr-10">{title}</h1>
      {children}
    </div>
  );
};
export default PageTitleHeader;
