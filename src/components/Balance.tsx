import React from 'react';

const Balance = () => {
    return (
        <div className={'rounded-3xl bg-gradient-to-br from-[#FDABDD] to-[#374A5A] mx-6 my-2 p-3 h-fit max-w-[460px] flex justify-between font-bold text-xl'}>
            <span className={'text-rose-100'}>Баланс:</span>
            <span className={'text-rose-50'}>25 Р</span>
        </div>
    );
};

export default Balance;