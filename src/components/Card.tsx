//@ts-ignore
import alga from '../misc/card.svg'
import React, {useState} from "react";
import axios from "axios";

const Card = () => {
    const cardNo = localStorage.getItem('cardNo')
    const [addCardNo, setAddCardNo] = useState('')
    const [loading, setLoading] = useState(false)

    const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        let no = ''
        let newNo = ''
        no = e.currentTarget.value.replace('^[0-9]$', '').replace(/\s/g, '')
        for(let i = 0; i < no.length; i++){
            if([4, 9, 14].indexOf(i) >= 0) newNo += ' '
            newNo += no[i]
        }
        setAddCardNo(newNo.slice(0, 22))
    }
    const addCardHandler = () => {
        navigator.vibrate(100)
        const no = addCardNo.replace('^[0-9]$', '').replace(/\s/g, '')
        if(no.length < 19) alert('Не все цифры!!')
        axios.post('https://pay.brsc.ru/Alga.pay/GoldenCrownSite.php', {
            cardNumber: no
        }).then(r => alert(r))
    }

    return (
        <div className={'rounded-3xl bg-gradient-to-br from-[#FDABDD] to-[#374A5A] mx-6 mt-12 p-3 h-fit max-w-[460px]'}>
            {cardNo ?
                <img src={alga} className={'rounded-3xl'}/> :
                <div>
                    <input value={addCardNo} onChange={inputHandler} className={'w-full rounded-3xl bg-pink-50 border-0 outline-0 p-4 mb-3 font-bold'}/>
                    <div onClick={addCardHandler} className={'bg-pink-100 rounded-3xl text-center py-4 font-bold'}>Добавить карту</div>
                </div>
            }
            {cardNo && <div className={'font-bold text-center mt-3 text-rose-50'}>{cardNo}</div>}
        </div>
    );
};

export default Card;