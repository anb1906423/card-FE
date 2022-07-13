import React, { useEffect, useState } from 'react'
import '../sass/grid.scss'

import authApi from '../api/authApi'

// Tối ưu hóa sau

const cardSalePrice = [
  {
    realValue: '10.000',
    priceSale: '9.750'
  },
  {
    realValue: '20.000',
    priceSale: '19.550'
  },
  {
    realValue: '50.000',
    priceSale: '9.750'
  },
  {
    realValue: '100.000',
    priceSale: '9.750'
  },
  {
    realValue: '200.000',
    priceSale: '9.750'
  },
  {
    realValue: '500.000',
    priceSale: '9.750'
  },
];

function GetAuth() {
  const [authList, setAuthList] = useState([]);

  useEffect(() => {
    const fetchAuthList = async () => {
      try {
        const response = await authApi.getAll();
        console.log(response);
        setAuthList(response.data);
      } catch (error) {
        console.log('failed', error);
      }
    }

    fetchAuthList();
  }, []);

}

function Home() {
  return (
    <div id="home">
      <GetAuth />
      <h2 className="heading-page">Mua mã thẻ điện thoại</h2>
      <h2 className="sub-heading">Chọn nhà mạng</h2>
      <ul className="type-card-list row">
        <li className="card-item"><img src="https://www.viettelhochiminh.vn/vnt_upload/File/Image/truyen_hinh_cap_viettel_1_1.jpg" alt="" /></li>
        <li className="card-item"><img src="https://img4.thuthuatphanmem.vn/uploads/2020/08/30/logo-vinaphone_113322210.png" alt="" /></li>
        <li className="card-item"><img src="https://mobifone.thegioigoicuoc.com/wp-content/uploads/2020/08/LOGO-MOBIFONE-PNG.png" alt="" /></li>
        <li className="card-item"><img src="https://seeklogo.com/images/V/vietnamobile-logo-8E0502CDF0-seeklogo.com.png" alt="" /></li>
        <li className="card-item"><img src="https://khothe.vn/uploads/article/garena-3b05142662.png" alt="" /></li>
      </ul>
      <h2 className="sub-heading">Chọn mệnh giá</h2>
      <ul className="value-list row">
        {
          cardSalePrice.map((item, index) =>
            <li className="value-item row" key={index}><div className="real-value c-12">{item.realValue}đ</div>
              <div className="price-sale c-12">
                <p className="">Giá bán:</p><span>{item.priceSale}đ</span>
              </div>
            </li>
          )
        }
      </ul>
      <div className="cart">
        <div className="cart-header">
          <h3 className="heading-cart">Giỏ hàng</h3>
        </div>
        <div className="cart-container"></div>
        <div className="cart-footer"></div>
      </div>
    </div>
  )
}

export default Home
