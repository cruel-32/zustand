import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

export interface IAnchorProps extends LinkProps {}

const Anchor = (props: IAnchorProps): JSX.Element => {
  const { children, ...rest } = props;
  return <Link {...rest}>{children}</Link>;
};

export default Anchor;
