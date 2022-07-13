import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { FaRegTrashAlt } from 'react-icons/fa'

const inforCard = [
    {
        name: 'Viettel',
        discount: 0,
        priceViettel: [
            '8.250',
            '16.500',
            '24.000',
            '42.000',
            '85.000',
            '172.000',
            '264.000',
            '434.000',
            '880.000'
        ]
    },
    {
        name: 'Vinaphone',
        discount: 0,
        priceVinaphone: [
            '8.250',
            '16.500',
            '24.000',
            '42.000',
            '85.000',
            '172.000',
            '264.000',
            '434.000',
            '880.000'
        ]
    },
    {
        name: 'Mobifone',
        discount: 0,
        priceMobifone: [
            '8.250',
            '16.500',
            '24.000',
            '42.000',
            '85.000',
            '172.000',
            '264.000',
            '434.000',
            '880.000'
        ]
    },
    {
        name: 'Vietnamobile',
        discount: 0,
        priceVietnamobile: [
            '8.250',
            '16.500',
            '24.000',
            '42.000',
            '85.000',
            '172.000',
            '264.000',
            '434.000',
            '880.000'
        ]
    },
];

const faceValueCard = [
    '10.000',
    '20.000',
    '30.000',
    '50.000',
    '100.000',
    '200.000',
    '300.000',
    '500.000',
    '1.000.000',
];

function Exchange() {
    return (
        <div id="exchange">
            <h2 className="heading-page">Đổi thẻ cào</h2>
            <form className="form-exchange">
                <div className="row form-container form-add">
                    <div className="row c-3">
                        <select name="type-card" className="c-11" id="">
                            {
                                inforCard.map((item, index) =>
                                    <option key={index} value="{item.name}">{item.name}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="row c-3">
                        <input type="text" className="code c-11" placeholder="Mã thẻ" />
                    </div>
                    <div className="row c-3">
                        <input type="text" className="seri c-11" placeholder="Số seri" />

                    </div>
                    <div className="row c-2">
                        <select name="face-value" id="" className="face-value c-11">
                            <option>Mệnh giá</option>
                            {
                                faceValueCard.map((item, index) =>
                                    <option key={index} value={item}>{item}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="row c-1">
                        <button type="button" className="interact-form add-form c-12">
                            <FaPlus className="add-icon"></FaPlus>
                        </button>
                    </div>
                </div>

                <div className="row form-container form-delete none">
                    <div className="row c-3">
                        <select name="type-card" className="c-11" id="">
                            {
                                inforCard.map((item, index) =>
                                    <option key={index} value="{item.name}">{item.name}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="row c-3">
                        <input type="text" className="code c-11" placeholder="Mã thẻ" />
                    </div>
                    <div className="row c-3">
                        <input type="text" className="seri c-11" placeholder="Số seri" />

                    </div>
                    <div className="row c-2">
                        <select name="face-value" id="" className="face-value c-11">
                            <option>Mệnh giá</option>
                            {
                                faceValueCard.map((item, index) =>
                                    <option key={index} value={item}>{item}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="row c-1">
                        <button type="button" className="interact-form remove-form c-12">
                            <FaRegTrashAlt className="add-icon"></FaRegTrashAlt>
                        </button>
                    </div>
                </div>

                <div className="row form-container form-delete none">
                    <div className="row c-3">
                        <select name="type-card" className="c-11" id="">
                            {
                                inforCard.map((item, index) =>
                                    <option key={index} value="{item.name}">{item.name}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="row c-3">
                        <input type="text" className="code c-11" placeholder="Mã thẻ" />
                    </div>
                    <div className="row c-3">
                        <input type="text" className="seri c-11" placeholder="Số seri" />

                    </div>
                    <div className="row c-2">
                        <select name="face-value" id="" className="face-value c-11">
                            <option>Mệnh giá</option>
                            {
                                faceValueCard.map((item, index) =>
                                    <option key={index} value={item}>{item}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="row c-1">
                        <button type="button" className="interact-form remove-form c-12">
                            <FaRegTrashAlt className="add-icon"></FaRegTrashAlt>
                        </button>
                    </div>
                </div>

                <div className="row form-container form-delete none">
                    <div className="row c-3">
                        <select name="type-card" className="c-11" id="">
                            {
                                inforCard.map((item, index) =>
                                    <option key={index} value="{item.name}">{item.name}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="row c-3">
                        <input type="text" className="code c-11" placeholder="Mã thẻ" />
                    </div>
                    <div className="row c-3">
                        <input type="text" className="seri c-11" placeholder="Số seri" />

                    </div>
                    <div className="row c-2">
                        <select name="face-value" id="" className="face-value c-11">
                            <option>Mệnh giá</option>
                            {
                                faceValueCard.map((item, index) =>
                                    <option key={index} value={item}>{item}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="row c-1">
                        <button type="button" className="interact-form remove-form c-12">
                            <FaRegTrashAlt className="add-icon"></FaRegTrashAlt>
                        </button>
                    </div>
                </div>

                <div className="row form-container form-delete none">
                    <div className="row c-3">
                        <select name="type-card" className="c-11" id="">
                            {
                                inforCard.map((item, index) =>
                                    <option key={index} value="{item.name}">{item.name}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="row c-3">
                        <input type="text" className="code c-11" placeholder="Mã thẻ" />
                    </div>
                    <div className="row c-3">
                        <input type="text" className="seri c-11" placeholder="Số seri" />

                    </div>
                    <div className="row c-2">
                        <select name="face-value" id="" className="face-value c-11">
                            <option>Mệnh giá</option>
                            {
                                faceValueCard.map((item, index) =>
                                    <option key={index} value={item}>{item}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="row c-1">
                        <button type="button" className="interact-form remove-form c-12">
                            <FaRegTrashAlt className="add-icon"></FaRegTrashAlt>
                        </button>
                    </div>
                </div>

                <div className="submit-exchange-wp row">
                    <button type="submit" className="submit-exchange-btn c-3">GỬI THẺ CÀO</button>
                </div>
            </form>
            <div className="fee-table">
                <h3 className="sub-heading uppercase align-center">Bảng giá đổi thẻ cào</h3>
                <div className="table-wp row">
                    <table id="viettel-table" className="table c-12">
                        <thead>
                            <tr className="">
                                <th colSpan="10" className="table-heading">{inforCard[0].name}</th>
                            </tr>
                            <tr>
                                <th>Mệnh giá</th>
                                {
                                    faceValueCard.map((item, index) =>
                                        <th key={index}>{item}</th>
                                    )
                                }
                            </tr>
                        </thead>
                        <tbody className="c-12">
                            <tr className="align-center">
                                <td>Thực nhận</td>
                                {
                                    inforCard[0].priceViettel.map((item, index) =>
                                        <td key={index}>{item}</td>
                                    )
                                }
                            </tr>
                        </tbody>
                    </table>
                    <table id="vinaphone-table" className="table c-12">
                        <thead>
                            <tr className="">
                                <th colSpan="10" className="table-heading">{inforCard[1].name}</th>
                            </tr>
                            <tr>
                                <th>Mệnh giá</th>
                                {
                                    faceValueCard.map((item, index) =>
                                        <th key={index}>{item}</th>
                                    )
                                }
                            </tr>
                        </thead>
                        <tbody className="c-12">
                            <tr className="align-center">
                                <td>Thực nhận</td>
                                {
                                    inforCard[1].priceVinaphone.map((item, index) =>
                                        <td key={index}>{item}</td>
                                    )
                                }
                            </tr>
                        </tbody>
                    </table>
                    <table id="mobifone-table" className="table c-12">
                        <thead>
                            <tr className="">
                                <th colSpan="10" className="table-heading">{inforCard[2].name}</th>
                            </tr>
                            <tr>
                                <th>Mệnh giá</th>
                                {
                                    faceValueCard.map((item, index) =>
                                        <th key={index}>{item}</th>
                                    )
                                }
                            </tr>
                        </thead>
                        <tbody className="c-12">
                            <tr className="align-center">
                                <td>Thực nhận</td>
                                {
                                    inforCard[2].priceMobifone.map((item, index) =>
                                        <td key={index}>{item}</td>
                                    )
                                }
                            </tr>
                        </tbody>
                    </table>
                    <table id="vietnamobile-table" className="table c-12">
                        <thead>
                            <tr className="">
                                <th colSpan="10" className="table-heading">{inforCard[3].name}</th>
                            </tr>
                            <tr>
                                <th>Mệnh giá</th>
                                {
                                    faceValueCard.map((item, index) =>
                                        <th key={index}>{item}</th>
                                    )
                                }
                            </tr>
                        </thead>
                        <tbody className="c-12">
                            <tr className="align-center">
                                <td>Thực nhận</td>
                                {
                                    inforCard[3].priceVietnamobile.map((item, index) =>
                                        <td key={index}>{item}</td>
                                    )
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Exchange
