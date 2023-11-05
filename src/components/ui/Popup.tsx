import { FC, PropsWithChildren } from 'react'
interface IPopupProps {
  cl: string;
}

const Popup: FC<PropsWithChildren<IPopupProps>> = ({ children, cl }) => {

  return (
    <div className={cl}>
      {children}
    </div>
  )
}

export default Popup