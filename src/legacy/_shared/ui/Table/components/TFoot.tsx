interface TFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const TFoot = (props: TFooterProps) => {
  const { children, className, ...inProps } = props;
  return (
    <tfoot className={`table-footer--default ${className || ''}`} {...inProps}>
      {children}
    </tfoot>
  );
};
