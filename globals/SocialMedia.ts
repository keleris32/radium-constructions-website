import { GlobalConfig } from 'payload/types';

const SocialMedia: GlobalConfig = {
  slug: 'social-media',
  label: 'Social Media',
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
