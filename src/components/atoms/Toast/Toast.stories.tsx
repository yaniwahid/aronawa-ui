import React from 'react';
import { toast, toastBody } from '.';
import Button from '../Button';

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
