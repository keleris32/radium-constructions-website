import React from 'react';
import { Block } from 'payload/types';
// import RichText from '../../components/RichText';
// import classes from './index.module.css';
import { backgroundColor } from '../../fields';

export type ColumnWidth = 'oneThird' | 'half' | 'twoThirds' | 'full';

export type Alignment = 'left' | 'center' | 'right';

export type AccentLineAlignment = 'left' | 'right';

export type PaddingSize = 'none' | 'small' | 'medium' | 'large';

export type Column = {
  content: unknown;
  width: ColumnWidth;
  alignment: Alignment;
};

export type Type = {
  blockType: 'content';
  blockName?: string;
  columns: Column[];
  accentLine: boolean;
  accentLineAlignment: AccentLineAlignment;
  paddingTop: PaddingSize;
  paddingBottom: PaddingSize;
};

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Content',
    plural: 'Content Blocks',
  },
  fields: [
    // {
    //   name: 'backgroundColor',
    //   label: 'Background Color',
    //   type: 'radio',
    //   defaultValue: 'none',
    //   options: [
    //     {
    //       label: 'None',
    //       value: 'none',
    //     },
    //     {
    //       label: 'Red',
    //       value: 'red',
    //     },
    //     {
    //       label: 'Blue',
    //       value: 'blue',
    //     },
    //     {
    //       label: 'Orange',
    //       value: 'orange',
    //     },
    //   ],
    //   admin: {
    //     layout: 'horizontal',
    //   },
    // },
    backgroundColor,
    {
      name: 'columns',
      type: 'array',
      minRows: 1,
      labels: {
        singular: 'Column',
        plural: 'Columns',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'width',
              label: 'Column Width',
              type: 'select',
              defaultValue: 'full',
              required: true,
              options: [
                {
                  label: 'One Third',
                  value: 'oneThird',
                },
                {
                  label: 'Half',
                  value: 'half',
                },
                {
                  label: 'Two Thirds',
                  value: 'twoThirds',
                },
                {
                  label: 'Full',
                  value: 'full',
                },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              name: 'alignment',
              label: 'Alignment',
              type: 'select',
              defaultValue: 'left',
              required: true,
              options: [
                {
                  label: 'Left',
                  value: 'left',
                },
                {
                  label: 'Center',
                  value: 'center',
                },
                {
                  label: 'Right',
                  value: 'right',
                },
              ],
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
        },
      ],
    },
    {
      name: 'accentLine',
      label: 'Enable Accent Line',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'accentLineAlignment',
      label: 'Accent Line Alignment',
      type: 'radio',
      defaultValue: 'left',
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
      admin: {
        condition: (_, siblingData) => siblingData.accentLine,
        layout: 'horizontal',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'paddingTop',
          label: 'Padding Top',
          type: 'select',
          defaultValue: 'medium',
          options: [
            {
              label: 'Small',
              value: 'small',
            },
            {
              label: 'Medium',
              value: 'medium',
            },
            {
              label: 'Large',
              value: 'large',
            },
          ],
          admin: {
            width: '50%',
          },
        },
        {
          name: 'paddingBottom',
          label: 'Padding Bottom',
          type: 'select',
          defaultValue: 'medium',
          options: [
            {
              label: 'Small',
              value: 'small',
            },
            {
              label: 'Medium',
              value: 'medium',
            },
            {
              label: 'Large',
              value: 'large',
            },
          ],
          admin: {
            width: '50%',
          },
        },
      ],
    },
  ],
};

export const Component: React.FC<Type> = () => <div>Content Placeholder</div>;

export default Content;
