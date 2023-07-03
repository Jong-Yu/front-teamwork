interface TBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const TBody = (props: TBodyProps) => {
  const { children, className, ...inProps } = props;

  return (
    <tbody className={`table-body--default ${className || ''}`} {...inProps}>
      {children}
    </tbody>
  );
};
