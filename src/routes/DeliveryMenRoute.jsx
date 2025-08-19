import useRole from '../hooks/useRole'
import LoadingSpinner from '../components/Shared/LoadingSpinner'
import { Navigate } from 'react-router-dom'

const DeliveryMenRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <LoadingSpinner />
  if (role === 'Delivery Man') return children
  return <Navigate to='/dashboard' replace='true' />
}



export default DeliveryMenRoute