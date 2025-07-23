
import ReactConfetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import useAuth from '../../../hooks/useAuth';
const PaymentSuccess = () => {

  const { width, height } = useWindowSize()
const {user} = useAuth()
  return (

    <div className='border border-black-300'>
      <div className='flex justify-center'
        style={{
          minHeight: 800
        }}
      >
        <ReactConfetti
          gravity={0.1}
          height={height}
          initialVelocityX={2}
          initialVelocityY={2}
          numberOfPieces={200}
          opacity={1}
          recycle
          run
          width={width}
          wind={0}
        />
 <p className='text-xl text-center mt-20 text-blue-700'><span className='text-orange-400'>{user?.displayName}!</span>  <span className='text-base'>payment is done successfully!</span></p>

      </div>
     
    </div>
  )
}
export default PaymentSuccess;