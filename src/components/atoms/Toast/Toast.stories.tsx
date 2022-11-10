import React from 'react';
import { toast, toastBody } from '.';
import Button from '../Button';

export default {
  title: 'Atoms/Toast',
};

export const Basic = () => {
  const notify = () => toast.error(toastBody(true, 'Berhasil mereject merchant order'));
  return (
    <Button color="primary" onClick={notify}>
      Show Toast
    </Button>
  );
};
