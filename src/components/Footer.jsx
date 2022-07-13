import '../sass/grid.scss'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'

import React from 'react'

const Footer = () => {
  return (
    <div className="wp-footer">
      <div className="footer row">
        <div className="footer-item c-6">
          <h2>Dịch vụ</h2>
          <ul>
            <li><a href="/">Mua mã thẻ</a></li>
            <li><a href="/exchange">Đổi thẻ cào</a></li>
          </ul>
        </div>
        <div className="footer-item c-6">
          <h2>Liên hệ</h2>
          <ul>
            <li><i><FaPhoneAlt /></i>0819.2222.73</li>
            <li><i><FaEnvelope /></i>truongan2273@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer