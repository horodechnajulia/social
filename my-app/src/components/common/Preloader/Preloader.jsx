
import loader from './../../../assets/images/loader.svg'
import s from './Preloader.module.css'

let Preloader = (props) => {
    return <div className = {s.preloader}>
        <img src={loader} alt='' />
    </div>
}

export default Preloader;