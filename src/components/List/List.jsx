import Item from '../Item/Item'
import styles from './List.module.css'

export default function List() {
  return (
    <div className={styles.list}>
      <Item
        key={'data'}
        url={'data'}
      />
      <Item
        key={'error'}
        url={'error'}
      />
      <Item
        key={'loading'}
        url={'loading'}
      />
    </div>
  )
}
