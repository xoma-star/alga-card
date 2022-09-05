import alga from '../misc/card.svg'
import bridge from "@vkontakte/vk-bridge";

const Card = () => {
    const cardNo = localStorage.getItem('cardNo')

    const addCardHandler = () => {
        bridge.send('VKWebAppOpenQR').then(r => console.log(r))
    }

    return (
        <div className={'rounded-3xl bg-gradient-to-br from-[#FDABDD] to-[#374A5A] mx-6 mt-12 p-3 h-fit max-w-[460px]'}>
            {cardNo ?
                <img src={alga} className={'rounded-3xl'}/> :
                <div onClick={addCardHandler} role={'button'} className={'bg-pink-100 rounded-3xl text-center py-4 font-bold'}>Добавить карту</div>
            }
            {cardNo && <div className={'font-bold text-center mt-3 text-rose-50'}>{cardNo}</div>}
        </div>
    );
};

export default Card;