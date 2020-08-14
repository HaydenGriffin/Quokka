import React, { PropsWithChildren, FC } from 'react';

type BreadcrumbsProps = {
  title: string;
};

const Breadcrumbs: FC<PropsWithChildren<BreadcrumbsProps>> = ({
  title,
  children,
}: PropsWithChildren<BreadcrumbsProps>) => {
  return (
    <nav className="container">
      <ol className="breadcrumb">{children}</ol>
    </nav>
  );
};
export default Breadcrumbs;
