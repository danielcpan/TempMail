import { schema } from 'normalizr';

export const emailSchema = new schema.Entity('emails', {}, { idAttribute: '_id' });
export const emailListSchema = [emailSchema]
