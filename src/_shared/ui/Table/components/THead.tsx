interface TheaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const THead = (props: TheaderProps) => {
  const { children, className, ...inProps } = props;

  return (
    <thead className={`table-header--default ${className || ''}`} {...inProps}>
      {children}
    </thead>
  );
};
