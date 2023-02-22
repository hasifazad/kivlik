import React from 'react'
import './Footer.css'
import facebook from 'C:/Users/hasifazad/Desktop/kivlik/src/images/facebook.svg'
import instagram from 'C:/Users/hasifazad/Desktop/kivlik/src/images/instagram.svg'
import youtube from 'C:/Users/hasifazad/Desktop/kivlik/src/images/youtube.svg'
import twitter from 'C:/Users/hasifazad/Desktop/kivlik/src/images/twitter.svg'

function Footer() {
    const company = ['Who we are', 'Blog', 'Career', 'Report Fraud', 'Contact', 'Investor Relations']
    const para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    const foot = ['Privacy', 'Terms', 'Security', 'Sitemap']
    const social = ['facebook', 'instagram', 'youtube', 'twitter']

    return (
        <div className='footer'>
            <div className='footer_box_one'>
                <div className='footer_innerbox_1'>
                    <h1 className='f_ib1_head'>KIVLIK</h1>
                    <p className='para'>{para}</p>
                </div>
                <div className='footer_innerbox_2'>
                    <h1 className='f_ib2_head'>COMPANY</h1>
                    {
                        company.map((row, index) => <p key={index}>{row}</p>)
                    }

                </div>
                <div className='footer_innerbox_3'>
                    <h1 className='f_ib3_head'>Got Questions?</h1>
                    <h2 className='f_ib3_head1'>Help Center</h2>
                    <p>Follow Us</p>
                    <div className='social'>
                        {/* {
                            social.map((row, index) => <img src={`../${row}.svg`} />)
                        } */}
                        <img src={facebook} />
                        <img src={instagram} />
                        <img src={youtube} />
                        <img src={twitter} />
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div className='footer_2'>
                <div className='footer_21'>
                    <p>2021 KIVLIK All rights reserved</p>
                </div>
                <div className='footer_22'>
                    {
                        foot.map((row, index) => <p className='foot_menu'>{row}</p>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer