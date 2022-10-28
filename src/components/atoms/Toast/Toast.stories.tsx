import React from 'react';
import Button from '../Button';
import { toast, toastBody } from './Toast';

export default {
  title: 'Atoms/Toast',
};

export const Basic = () => {
  const notify = () =>
    toast(toastBody(true, 'Page has been unpublished successfully', [], 'Unpublished'));
  return (
    <Button color="primary" onClick={notify}>
      Show Toast
    </Button>
  );
};
