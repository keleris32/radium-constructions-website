import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import { Page, Study, Media, FormSubmission, Category } from './collections';
import { MegaMenu, SocialMedia, Footer } from './globals';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Page, Study, Media, FormSubmission, Category],
  globals: [MegaMenu, SocialMedia, Footer],
});
