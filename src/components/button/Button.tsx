import { Button } from 'antd';

export interface ButtonProps {
  type?: 'default' | 'primary';
  size?: 'small' | 'large';
  label?: string;
  shape?: 'circle' | 'round';
  icon?: JSX.Element;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  props?: { [x: string]: string };
  style?: { [x: string]: string };
}

const ButtonCustom = ({
  type,
  size,
  label,
  onClick,
  icon,
  shape,
  style,
  props,
}: ButtonProps): JSX.Element => (
  <Button
    style={style}
    shape={shape}
    type={type}
    size={size}
    onClick={onClick}
    icon={icon}
    {...props}
  >
    {label}
  </Button>
);

export default ButtonCustom;
