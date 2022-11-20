const Footer = () => {
    return (
        <footer className="footer shrink-0 items-center p-3 bg-[#191919] text-neutral-content flex flex-col">
            <div className="container mx-auto flex flex-row justify-between items-center">
                <div className="text-lg font-medium text-white">Team #4</div>
                <div className="text-sm ">© 2022</div>
                <div className="flex flex-row gap-x-6 md:place-self-center text-xl">
                    <a
                        target="_blank"
                        href="https://github.com/the-tranquillity/02-hackathon/"
                        rel="noreferrer"
                    >
                        <i className="bi bi-github"></i>
                    </a>
                    <a target="_blank" href="https://t.me/result_school_it" rel="noreferrer">
                        <i className="bi bi-youtube"></i>
                    </a>
                    <a
                        target="_blank"
                        href="https://www.youtube.com/c/VladilenMinin"
                        rel="noreferrer"
                    >
                        <i className="bi bi-telegram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
