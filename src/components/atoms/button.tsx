interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { text, onClick } = props;

  return (
    <button
      className='hidden md:flex py-2 px-4 rounded-xl text-white gradient font-medium text-base'
      onClick={props.onClick}>
      {text}
    </button>
  );
};

export default Button;
