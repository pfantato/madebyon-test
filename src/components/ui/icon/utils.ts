import * as RiLib from 'react-icons/lib';

export const ALL_ICONS: RiLib.IconManifest[] = RiLib['IconsManifest'];

export const getManifest = (set) => ALL_ICONS.find(({ id }) => id === set);

export const getSet = (setID) => {
  if (setID)
    switch (setID) {
      case 'md':
        return import(`react-icons/md`);
      case 'ri':
        return import(`react-icons/ri`);
      default:
        return import(`react-icons/fa`);
    }
  return null;
};
