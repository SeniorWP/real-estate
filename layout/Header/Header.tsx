import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface HeaderProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const Header = ({ ...props }: HeaderProps): JSX.Element => {
    return (
        <header {...props}>Header</header>
    )
}

export default Header