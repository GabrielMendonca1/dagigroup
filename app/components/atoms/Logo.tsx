import Image from 'next/image';

const Logo = () => {
    return(
    <div>
<Image 
  src="/logo.svg" 
  alt="Logo" 
  width={130} 
  height={70}
  priority={true}
 
/>
    </div>
 
    );};
    export default Logo;