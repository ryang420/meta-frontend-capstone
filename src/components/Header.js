import logoImage from './assets/logo.png';

export default function Header() {
    return (
        <header>
            <img src={logoImage} alt='Little Lemon logo'/>
        </header>
    )
}