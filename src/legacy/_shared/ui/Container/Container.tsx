interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Container = (props: ContainerProps) => {
  const { children, className, ...inProps } = props;

  return (
    <div
      className={`container container--default ${className || ''}`}
      {...inProps}
    >
      {props.children}
    </div>
  );
};
