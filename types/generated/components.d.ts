import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksLink extends Schema.Component {
  collectionName: 'components_blocks_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.Text;
  };
}

export interface ElementsImage extends Schema.Component {
  collectionName: 'components_elements_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.link': BlocksLink;
      'elements.image': ElementsImage;
    }
  }
}
