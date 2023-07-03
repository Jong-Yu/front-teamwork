interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {}

export const Table = (props: TableProps) => {
  const { children, className, ...inProps } = props;

  return (
    <table className={`table--default ${className || ''}`} {...inProps}>
      {children}
    </table>
  );
};
