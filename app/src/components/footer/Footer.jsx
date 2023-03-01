import React from "react";
import './Footer.css';

export default function(){
    return(
        <div className="footermain">
            <div className="first">
                <h5 className="h555">Покупателям</h5>
                <p>Как сделать заказ</p>
                <p>Способы оплаты</p>
                <p>Доставка</p>
                <p>Возврат товара</p>
                <p>Возврат денежных средств</p>
                <p>Правила продажи</p>
                <div className="pp">Правила пользования торговой площадкой</div>
                <p>Вопросы и ответы</p>
            </div>
            <div className="second">
                <h5 className="h555">Партнерам</h5>
                <p>Продавайте на Wildberries</p>
                <p>Курьерам</p>
                <p>Перевозчикам</p>
                <p>Партнерский пункт выдачи</p>
                <p>Франшизный пункт выдачи</p>
                <h5 className="h55">Наши проекты</h5>
                <p>WB Guru</p>
                <p>Трудоустройство</p>
                <p>Цифровые товары</p>
            </div>
            <div className="third">
                <h5 className="h555">Компания</h5>
                <p>O нас</p>
                <p>Реквизиты</p>
                <p>Пресс-центр</p>
                <p>Контакты</p>
                <p>Bug Bounty</p>
                <p>WB.Tech</p>
            </div>
            <div className="fourth">
                <h5 className="h555">Мы в соцсетях</h5>
                <p>ВКонтакте</p>
                <p>Одноклассники</p>
                <p>YouTube</p>
                <p>Телеграм</p>
            </div>
            <div className="fifth">
                <h5 className="h555">Приложение Wildberries</h5>
                <div className="fifthdiv">
                    <img className="img1" src="https://www.wildberries.ru/i/v3/apps/qr.png" />
                    <p>Наведите камеру, чтобы скачать приложение</p>
                    <img className="img2" src="https://impulseradargpr.com/wp-content/uploads/2021/07/google-play-badge.png" />
                    <img className="img2" src="https://www.citypng.com/public/uploads/preview/free-available-on-the-app-store-apple-button-png-11639742555i7lifwrl0p.png" />
                    <img className="img2" src="https://news.ebscer.com/wp-content/uploads/2022/01/Huawei.png" />
                </div>
                
            </div>
        </div>
    )
}