import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://github.com/ingridk12'>
                <img src="/img/github2.png" alt='Github' />
            </a>
            <a href='https://www.linkedin.com/in/ingridkatherinevegaordóñez/'>
                <img src="/img/linkedin3.png" alt='linkedin' />
            </a>
           
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Ingrid Katherine Vega Ordoñez</strong>
    </footer>
}

export default Footer