interface TRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}

export const TRow = (props: TRowProps) => {
  const { children, className, ...inProps } = props;

  return (
    <tr className={`table-row--default ${className || ''}`} {...inProps}>
      {children}
    </tr>
  );
};
