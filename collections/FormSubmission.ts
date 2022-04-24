import { CollectionConfig } from 'payload/types';

const FormSubmission: CollectionConfig = {
  slug: 'form-submissions',
  fields: [
    {
      name: 'from',
      label: 'From Email',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'source',
      label: 'Source',
      type: 'text',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
  ],
};

export default FormSubmission;
