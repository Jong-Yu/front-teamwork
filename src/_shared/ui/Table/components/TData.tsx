interface TDataProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}

export const TData = (props: TDataProps) => {
  const { children, className, ...inProps } = props;

  return (
    <td className={`table-cell--default ${className || ''}`} {...inProps}>
      {children}
    </td>
  );
};
