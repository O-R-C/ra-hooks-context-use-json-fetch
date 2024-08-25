import PropTypes from 'prop-types'
import useJsonFetch from '../../hooks/useJsonFetch'
import fetchData from '../../js/fetchData'
import Loader from '../Loader/Loader'
import styles from './Item.module.css'

export default function Item({ url }) {
  const [data, error, isLoading] = useJsonFetch(fetchData, { addURL: url })

  if (isLoading) return <Loader />

  return <div className={styles.item + (error ? ' ' + styles.error : '')}>{data?.status || error?.message}</div>
}

Item.propTypes = {
  url: PropTypes.string,
}
