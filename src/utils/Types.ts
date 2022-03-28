export type Color =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'approval'
  | 'danger'
  | 'light';

export enum ColorEnum {
  Neutral = 'neutral',
  Primary = 'primary',
  Secondary = 'secondary',
  Approval = 'approval',
  Danger = 'danger',
  Light = 'light',
}

export const buttonColor = [
  'neutral',
  'primary',
  'secondary',
  'approval',
  'danger',
  'light',
];

export const colorProps = (color) => {
  switch (color) {
    case 'neutral':
      return 'gray';
    case 'primary':
      return 'blue';
    case 'secondary':
      return 'yellow';
    case 'approval':
      return 'green';
    case 'danger':
      return 'red';
    case 'light':
      return 'white';
    default:
      return;
  }
};
