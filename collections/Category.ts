import { CollectionConfig } from 'payload/types';
import slug from '../fields/slug';

export type Type = {
  title: string;
  slug: string;
};

const Category: CollectionConfig = {
  slug: 'categories',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    slug,
  ],
};

export default Category;

// const Category: CollectionConfig = {
//   slug: 'categories',
//   fields: [
//     {
//       name: 'title',
//       label: 'Title',
//       type: 'text',
//       required: true,
//     },
//     {
//       name: 'client',
//       label: 'Client',
//       type: 'text',
//       admin: {
//         position: 'sidebar',
//       },
//     },
//     {
//       name: 'location',
//       label: 'Location',
//       type: 'text',
//       admin: {
//         position: 'sidebar',
//       },
//     },
//     slug,
//   ],
// };
