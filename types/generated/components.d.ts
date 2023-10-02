import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeHero extends Schema.Component {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'hero';
    icon: 'apps';
    description: '';
  };
  attributes: {
    post: Attribute.Relation<'home.hero', 'oneToOne', 'api::post.post'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.hero': HomeHero;
    }
  }
}
