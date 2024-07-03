import Auth from '../components/Auth'
import Quote from '../components/Quote'

function Signup() {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 '>

    <div>
      <Auth/>
    </div>
    <div className='md:visible invisible'>
    <Quote/>

    </div>
    </div>
    </>
  )
}

export default Signup