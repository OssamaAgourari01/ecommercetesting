import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='main-footer'>
        <div className='about-shopee'>
            <h1>What is Shopee ?</h1>
            <div className='about-info'>
                <div className='about-info-p'>
                    <h3>Une communauté qui fait le bien autour d'elle</h3>
                    <p>Shopee est un marché international en ligne, où les gens se retrouvent pour fabriquer, vendre, acheter et collectionner des articles uniques. Nous constituons également une communauté qui vise à obtenir des changements positifs pour les petites entreprises, les individus et la planète.</p>
                </div>
                <div className='about-info-p'>
                    <h3>Un soutien aux créateurs indépendants</h3>
                    <p>Chez Shopee, nous n'avons pas d'entrepôt, nous avons des millions d'individus qui vendent ce qu'ils aiment. Nous facilitons ce processus en vous aidant à entrer directement en contact avec les créateurs et à découvrir des articles extraordinaires.</p>
                </div>
                <div className='about-info-p'>
                    <h3>La tranquillité d'esprit</h3>
                    <p>Nous accordons une très haute importance à la confidentialité de vos données. Si vous avez besoin d'assistance en quoi que ce soit, nous sommes toujours prêts à intervenir pour vous aider.</p>
                </div>
            </div>
        </div>
        <div className='copyright'>
            <b>© 2020 Copyright: Shopee.com</b>
        </div>
    </div>
  )
}

export default Footer
