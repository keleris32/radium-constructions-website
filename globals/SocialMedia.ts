import { GlobalConfig } from 'payload/types';

export type Type = {
  link: {
    label: string;
    url: string;
  }[];
};

const SocialMedia: GlobalConfig = {
  slug: 'social-media',
  label: 'Social Media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'link',
      label: 'links',
      type: 'array',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'label',
              label: 'Label',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'url',
              label: 'URL',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
      ],
    },
  ],
};

export default SocialMedia;
