import { FC, PropsWithChildren } from 'react'

interface IButtonProps {
  cl?: string;
}

const Button: FC<PropsWithChildren<IButtonProps>> = ({ children, cl }) => {
  return (
    <button className={`${cl} btn`}>
      {children}
    </button>
  )
}

export default Button