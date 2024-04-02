import { Outlet } from 'react-router-dom'
import { ReactNode } from 'react'

import { NavBar } from "../components/navbar/index";
import { Footer } from "../components/footer/index";
interface Props {
    disableFooter?: boolean
    children?: ReactNode
  
    // any props that come into the component
  }

export const RootLayout = ({ disableFooter, children }: Props) => {
    // console.log(import.meta.env.VITE_SIGN)
  
    return (
      <>
        <NavBar />
        <div className={"mt-[48px]"}>
          <Outlet />
          {children}
        </div>
        { <Footer />}
        {/* {isDev && <Debugger />} */}
      </>
    )
  }