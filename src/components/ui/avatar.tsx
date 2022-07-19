import { options, normalize } from '@/settings';

import type { User } from '@/types';
import type { Config, GetConfigValue } from '@/settings';

type AvatarProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & {
    size?: GetConfigValue<'sizes'>;
    picture: User['picture'];
    name: User['name'];
    // image: {
    //   src: string;
    //   alt: string;
    //   [key: `data-${string}`]: string;
    // };
  }
>;

const { sizes } = options as Config;

export const Avatar: React.FunctionComponent<AvatarProps> = ({
  size: _size,
  name,
  picture,
}) => {
  const size = normalize<'sizes'>(sizes, _size, 'md');

  const getAvatarSize = () => {
    switch (size) {
      case 'sm':
        return 'avatar-sm';
      case 'md':
        return 'avatar-md';
      default:
        return 'avatar-lg';
    }
  };
  const getSrc = () => {
    if (!picture) return 'https://via.placeholder.com/128';
    switch (size) {
      case 'sm':
        return picture.thumbnail;
      case 'md':
        return picture.medium;
      default:
        return picture.large;
    }
  };

  return (
    <img
      className={`object-cover ${getAvatarSize()} rounded-full ring-4 ring-white`}
      src={getSrc()}
      alt={`${name.first} ${name.last}`}
    />
  );
};
