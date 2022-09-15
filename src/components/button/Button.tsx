import { Button } from 'antd';

export interface ButtonProps {
  typeButton?: 'default' | 'primary';
  size?: 'small' | 'large';
  label?: string;
  shape?: 'circle' | 'round';
  icon?: JSX.Element;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  form?: 'submit';
  disabled?: boolean;
  style?: { [x: string]: string };
}

const ButtonCustom = ({
  typeButton,
  size,
  label,
  onClick,
  icon,
  shape,
  form,
  disabled,
  style,
}: ButtonProps): JSX.Element => (
  <Button
    style={style}
    shape={shape}
    type={typeButton}
    size={size}
    onClick={onClick}
    htmlType={form}
    disabled={disabled}
    icon={icon}
  >
    {label}
  </Button>
);

export default ButtonCustom;
