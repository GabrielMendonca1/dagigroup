import Image from 'next/image';

const Logo = () => {
    return(
    <div>
        <Image src="/logo.svg" alt="Your Logo" width={134} height={34} priority={true} />
    </div>

    );};
    export default Logo;