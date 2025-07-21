"use client"
import { Link } from "react-router-dom"

const Button = ({ children, href, onClick, type = "button", className = "", ...props }) => {
  const baseClass = "button"
  const fullClassName = `${baseClass} ${className}`

  if (href) {
    return (
      <Link to={href} className={fullClassName} onClick={onClick} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={fullClassName} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
