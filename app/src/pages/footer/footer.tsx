import footerIcon from './footer.svg'; 

const Footer = () => {
    return (
        <footer 
            className="flex justify-center items-center w-full bg-cover bg-top bg-center bg-no-repeat" 
            style={{ backgroundImage: `url(${footerIcon})`, height: '200px' }}
        >
        </footer>
    );
};

export default Footer;
