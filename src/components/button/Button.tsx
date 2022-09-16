import style from './Button.module.scss';
/* eslint-disable react/button-has-type */
type ButtonType = Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

type ButtonProps = {
  appearance?: 'primary' | 'default';
  // size?: 'small' | 'large';
  label?: string | JSX.Element | null;
  shape?: 'circle' | 'def';
  icon?: JSX.Element;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
} & ButtonType;

const ButtonCustom = ({
  appearance = 'primary',
  label,
  type = 'button',
  shape = 'def',
  icon,
  disabled,
  ...other
}: ButtonProps): JSX.Element => (
  <button
    className={`${style.style_button} ${style[appearance]} ${
      style[shape] ?? ''
    }`}
    type={type}
    disabled={disabled}
    {...other}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default ButtonCustom;
