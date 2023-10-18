import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutHero extends Schema.Component {
  collectionName: 'components_about_heroes';
  info: {
    displayName: 'hero';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface AboutValuesList extends Schema.Component {
  collectionName: 'components_about_values_lists';
  info: {
    displayName: 'valuesList';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    icon: Attribute.Enumeration<
      ['rocket', 'people', 'stars', 'hand', 'cap', 'sun']
    > &
      Attribute.Required;
  };
}

export interface AboutValues extends Schema.Component {
  collectionName: 'components_about_values';
  info: {
    displayName: 'values';
    icon: 'bold';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    valuesList: Attribute.Component<'about.values-list', true> &
      Attribute.Required;
  };
}

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
      'about.hero': AboutHero;
      'about.values-list': AboutValuesList;
      'about.values': AboutValues;
      'home.footer': HomeFooter;
      'home.header': HomeHeader;
      'home.hero': HomeHero;
      'home.newsletter': HomeNewsletter;
      'home.section': HomeSection;
      'shared.link': SharedLink;
    }
  }
}
