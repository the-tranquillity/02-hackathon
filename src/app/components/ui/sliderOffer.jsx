import { useState } from "react";

const SliderOffer = () => {
    const slides = [
        {
            img_left:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubHaoWWV5fTkK2YxU57umNH7u0Hqbq98aiQ&usqp=CAU",
            img_centr:
                "https://nanosemantics.ai/wp-content/uploads/2019/12/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D1%82%D0%B5%D0%B9-1024x683.jpg",
            img_right:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGJ-eCypr-zQ6BUTSw3iJa-TFILqk0np71Q&usqp=CAU",
            offer: "Финиш близко, но это начало...",
            text: "Меняемся сами, меняем наше окружение, меняем нашу жизнь. Это чувство, что все только начинается..."
        },
        {
            img_left:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiGirIk3ytJ7CfvXBPcr6A6w80qyNGf5mV2w&usqp=CAU",
            img_centr:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFAqTO-MFJa5lEpvUJAz2XSbTTy-_uuDcZEQ&usqp=CAU",
            img_right:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3jWLQ4WRCDH2z_0a0NHGZS-kgn0fo14eaTg&usqp=CAU",
            offer: "Что-то новенькое. Это хорошо",
            text: "Новые знания, новые компетенции, новые возможноти - все это то что нам нужно и мы заберем ВСЕ!"
        },
        {
            img_left:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysDp6aZ1K7qkVH2SPTh1m3ZifEz3i3uuBBA&usqp=CAU",
            img_centr:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtv2JLWFYy862ASjhbQtZlpyxZoHIsdsSdGQ&usqp=CAU",
            img_right:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEv_Rb8q6r8SoQ9gwzRiRhV5pS0itOglAzQ&usqp=CAU",
            offer: "Двигаемся только вперед",
            text: "Мы знаем свои цели, не боимся трудных задач и идем к своей мечте, снося все приграды на пути"
        }
    ];
    const [index, setIndex] = useState(0);
    const indexUpdate = () => {
        setIndex((prevState) => {
            if (prevState < slides.length - 1) {
                return prevState + 1;
            } else {
                return 0;
            }
        });
    };
    setTimeout(indexUpdate, 5000);
    return (
        <section className="offer-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <div className="offer-slider">
                            <div className={"offer" + (index === 0
? " d-block"
: " d-none")}>
                                <h1 className="offer__title">{slides[0].offer}</h1>
                                <div className="offer__block">
                                    <p className="offer__text">{slides[0].text}</p>
                                </div>
                            </div>
                            <div className={"offer" + (index === 1
? " d-block"
: " d-none")}>
                                <h1 className="offer__title">{slides[1].offer}</h1>
                                <div className="offer__block">
                                    <p className="offer__text">{slides[1].text}</p>
                                </div>
                            </div>
                            <div className={"offer" + (index === 2
? " d-block"
: " d-none")}>
                                <h1 className="offer__title">{slides[2].offer}</h1>
                                <div className="offer__block">
                                    <p className="offer__text">{slides[2].text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-end">
                        <div className={"offer-img" + (index === 0
? " d-block"
: " d-none")}>
                            <div className="offer-img-slider">
                                <div className="offer-img-wrapper">
                                    <img
                                        src={slides[0].img_centr}
                                        alt="фото1"
                                        className="offer-img__photo"
                                    />
                                </div>
                            </div>
                            <img
                                src={slides[0].img_left}
                                alt="фото4"
                                className="offer-img__smallphoto-left d-none d-md-block"
                                id="offer-img__smallphoto-left"
                            />
                            <img
                                src={slides[0].img_right}
                                alt="фото5"
                                className="offer-img__smallphoto-right d-none d-md-block"
                                id="offer-img__smallphoto-right"
                            />
                        </div>
                        <div className={"offer-img" + (index === 1
? " d-block"
: " d-none")}>
                            <div className="offer-img-slider">
                                <div className="offer-img-wrapper">
                                    <img
                                        src={slides[1].img_centr}
                                        alt="фото1"
                                        className="offer-img__photo"
                                    />
                                </div>
                            </div>
                            <img
                                src={slides[1].img_left}
                                alt="фото4"
                                className="offer-img__smallphoto-left d-none d-md-block"
                                id="offer-img__smallphoto-left"
                            />
                            <img
                                src={slides[1].img_right}
                                alt="фото5"
                                className="offer-img__smallphoto-right d-none d-md-block"
                                id="offer-img__smallphoto-right"
                            />
                        </div>
                        <div className={"offer-img" + (index === 2
? " d-block"
: " d-none")}>
                            <div className="offer-img-slider">
                                <div className="offer-img-wrapper">
                                    <img
                                        src={slides[2].img_centr}
                                        alt="фото1"
                                        className="offer-img__photo"
                                    />
                                </div>
                            </div>
                            <img
                                src={slides[2].img_left}
                                alt="фото4"
                                className="offer-img__smallphoto-left d-none d-md-block"
                                id="offer-img__smallphoto-left"
                            />
                            <img
                                src={slides[2].img_right}
                                alt="фото5"
                                className="offer-img__smallphoto-right d-none d-md-block"
                                id="offer-img__smallphoto-right"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SliderOffer;
