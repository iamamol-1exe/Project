const Card = ({ children,     className = "" }) => {
  const baseClass = "card"
  const fullClassName = `${baseClass} ${className}`

  return <div className={fullClassName}>{children}</div>
}

export default Card
