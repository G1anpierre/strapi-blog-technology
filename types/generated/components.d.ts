import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeFooter extends Schema.Component {
  collectionName: 'components_home_footers';
  info: {
    displayName: 'footer';
    icon: 'filter';
  };
  attributes: {
    newsletter: Attribute.Component<'home.newsletter'>;
    sections: Attribute.Component<'home.section', true>;
  };
}

export interface HomeHeader extends Schema.Component {
  collectionName: 'components_home_headers';
  info: {
    displayName: 'header';
    icon: 'stack';
  };
  attributes: {
    tabs: Attribute.Component<'shared.link', true>;
  };
}

export interface HomeHero extends Schema.Component {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'hero';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    button: Attribute.Component<'shared.link'>;
  };
}

export interface HomeNewsletter extends Schema.Component {
  collectionName: 'components_home_newsletters';
  info: {
    displayName: 'newsletter';
    icon: 'envelop';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface HomeSection extends Schema.Component {
  collectionName: 'components_home_sections';
  info: {
    displayName: 'section';
    icon: 'collapse';
  };
  attributes: {
    title: Attribute.String;
    links: Attribute.Component<'shared.link', true>;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
    icon: 'attachment';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
    enum: Attribute.Enumeration<['_blank']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.footer': HomeFooter;
      'home.header': HomeHeader;
      'home.hero': HomeHero;
      'home.newsletter': HomeNewsletter;
      'home.section': HomeSection;
      'shared.link': SharedLink;
    }
  }
}
