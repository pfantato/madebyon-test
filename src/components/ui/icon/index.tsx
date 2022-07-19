import { useCallback, useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import loadable, { LoadableLibrary } from '@loadable/component';

import * as utils from './utils';

import type { IconManifest } from 'react-icons/lib';

type Props = {
  icon: string;
  color?: string;
  size?: string;
  className?: string;
  style?: React.CSSProperties;
  attr?: React.SVGAttributes<SVGElement>;
}

export const Icon: React.FC<Props> = ({ ...props }) => {
  const [collection, iconName] = props.icon.split('/');
  if (!collection || !iconName) return <div>Could Not Find Icon</div>;

  const [collectionManifest, setCollectionManifest] = useState<IconManifest>();
  const [iconCollection, setIconCollection] = useState<LoadableLibrary<any>>();
  const [icon, setIcon] = useState();

  const getCollection = useCallback(() => {
    const lib = collectionManifest?.id && utils.getSet(collectionManifest.id);
    if (lib) {
      const _module = loadable.lib(() => lib);
      _module && setIconCollection(_module);
    }
  }, [collectionManifest?.id]);

  const getIcon = useCallback(() => {
    if (iconCollection) {
      iconCollection.load().then((collection) => {
        const name = Object.keys(collection).find((icon) => icon === iconName);
        const icon = collection[name];
        setIcon(icon);
      });
    }
  }, [iconCollection]);

  const value: IconContext = {
    color: props.color,
    size: props.size,
    className: props.className,
    style: props.style,
    attr: props.attr,
  };

  useEffect(() => {
    const manifest = utils.getManifest(collection);
    if (manifest) setCollectionManifest(manifest);
  }, []);

  useEffect(() => {
    getCollection();
  }, [collectionManifest?.id]);

  useEffect(() => {
    getIcon();
  }, [iconCollection]);

  return (
    <IconContext.Provider value={value}>
      {typeof icon == 'object' && <i data-icon>{icon}</i>}
    </IconContext.Provider>
  );
};
