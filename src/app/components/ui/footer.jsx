import logo from "../../assets/imgs/logo/logo.png";
import insta from "../../assets/imgs/social_networks/insta.png";
import telegram from "../../assets/imgs/social_networks/telegram.png";
import vk from "../../assets/imgs/social_networks/vk.png";
import whatsapp from "../../assets/imgs/social_networks/whatsapp.png";
import youtube from "../../assets/imgs/social_networks/youtube.png";

const Footer = () => {
    return (
        <footer className="mt-4 bg-dark opacity-75 text-center">
            <div className="row text-white">
                <div className="col-md-3 col-6 pt-4">
                    <h5>КОНТАКТЫ</h5>
                    <ul className="list-unstyled">
                        <li>
                            <a href="#" className="text-decoration-none text-reset">
                                {"+7 (495) 111-11-11"}
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none text-reset">
                                {"+7 (495) 222-22-22"}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 col-6 pt-4">
                    <h5>ИНФОРМАЦИЯ</h5>
                    <ul className="list-unstyled">
                        <li>
                            <a href="/" className="text-decoration-none text-reset">
                                О нас
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 col-6 pt-4">
                    <h5>СОЦИАЛЬНЫЕ СЕТИ</h5>
                    <ul className="list-unstyled ">
                        <li>
                            <a href="#" className="text-decoration-none text-reset">
                                <img height="25" src={insta} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none text-reset">
                                <img height="25" src={telegram} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none text-reset">
                                <img height="25" src={vk} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none text-reset">
                                <img height="25" src={whatsapp} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none text-reset">
                                <img height="25" src={youtube} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 col-6 pt-4">
                    <div className="pb-4">
                        <img width="150" src={logo} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
