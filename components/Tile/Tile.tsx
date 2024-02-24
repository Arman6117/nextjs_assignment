import clsx from 'clsx'
import './tile.scss'
type TileProps = {
    children: React.ReactNode
    className?:string
}

const Tile = ({children,className}:TileProps) => {
  return (
    <div className={clsx("tileContent",className)}>
      {children}
    </div>
  )
}

export default Tile