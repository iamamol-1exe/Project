const Input = ({ className = "", ...props }) => {
  const baseClass = "input"
  const fullClassName = `${baseClass} ${className}`

  return <input className={fullClassName} {...props} />
}

export default Input
