interface THeaderProps extends React.ThHTMLAttributes<HTMLTableCellElement> {}

export const THeader = (props: THeaderProps) => {
  const { children, className, ...inProps } = props;

  return (
    <th className={`table-th--default ${className || ''}`} {...inProps}>
      {children}
    </th>
  );
};
