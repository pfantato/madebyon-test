type Props = React.PropsWithChildren<{
  name: string;
  children?: React.ReactNode;
}>;
export const Page: React.FunctionComponent<Props> = ({ name, children }) => {
  return (
    <div className='container mx-auto pb-6 px-4 sm:px-8' data-page={name}>
      {children}
    </div>
  );
};
