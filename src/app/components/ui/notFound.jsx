import Button from "../common/button";

const NotFound = () => {
    return (
        <>
            <h1>404 — Страница не найдена </h1>
            <div className="row mt-4">
                <div className="col">
                    <Button bgColor="primary" to="/" routerLink={true}>
                        <i className="bi bi-chevron-left me-2"></i> На главную
                    </Button>
                </div>
            </div>
        </>
    );
};

export default NotFound;
