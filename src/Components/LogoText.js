import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHippo } from '@fortawesome/free-solid-svg-icons';
//enkel logga med importerad icon och font
const LogoText = () => {
    return ( 
        <div className='flex flex-row'> 
            <div className='flex flex-col'>
              <h3 className='logoText text-2xl'>Hippo</h3>
              <h3 className='logoText pl-3 text-2xl'>Days</h3>
            </div>
            <FontAwesomeIcon icon={faHippo} style={{ fontSize: '3rem' }} />
          </div>
     );
}
 
export default LogoText;