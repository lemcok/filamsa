import s from '../styles/components/Home.module.scss'

export const Home = ():JSX.Element => {
    return (
        <section className={s.home}>
            <div>
                <img
                    src="assets/images/home1.png"
                    alt=""
                    className={s.home__img}
                />
                <div className={`${s.home__container} container grid`}>
                    <div className={s.home__data}>
                        <span className={s.home__data_subtitle}>
                            Calidad y Tecnologia para la mineria y
                            construccion
                        </span>
                    </div>
                    <div className={s.home__certificate_img}>
                        <img
                            src="/assets/images/certificate.png"
                            alt="ISO-Certificate"
                        />
                    </div>
                </div>
            </div>
            <div>
                <h3>Trabajos que realozamos</h3>
            </div>
            <div>
                <div className="product1">
                    <div>
                        <h2>Cargador de Anfo tipo Pistolete</h2>
                        <p>
                            con protecion anti salpicaduras, con valvula de
                            PVC de 1&quot;, con tubo de absorcion de PVC y
                            corte diagonal de 30 grados.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/assets/images/pistolete1.png"
                            alt="pistole"
                        />
                        <img
                            src="/assets/images/pistolete2.png"
                            alt="pistole"
                        />
                    </div>
                </div>
                <div className="product2">
                    <div>
                        <h2>Alcayata de Acero</h2>
                        <p>
                            Barras dobladas y/o soldadas en fierro corrugado
                            o liso de diversos diametros, se realiza el
                            diseno y produccion de acuerdo a la solicitud
                            del cliente.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/assets/images/pistolete1.png"
                            alt="pistole"
                        />
                        <img
                            src="/assets/images/pistolete2.png"
                            alt="pistole"
                        />
                    </div>
                </div>
                <div className="product3">
                    <div>
                        <h2>Cargador de Anfo tipo Pistolete</h2>
                        <p>
                            con protecion anti salpicaduras, con valvula de
                            PVC de 1&quot;, con tubo de absorcion de PVC y
                            corte diagonal de 30 grados.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/assets/images/pistolete1.png"
                            alt="pistole"
                        />
                        <img
                            src="/assets/images/pistolete2.png"
                            alt="pistole"
                        />
                    </div>
                </div>
                <div className="product4">
                    <div>
                        <h2>Cargador de Anfo tipo Pistolete</h2>
                        <p>
                            con protecion anti salpicaduras, con valvula de
                            PVC de 1&quot;, con tubo de absorcion de PVC y
                            corte diagonal de 30 grados.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/assets/images/pistolete1.png"
                            alt="pistole"
                        />
                        <img
                            src="/assets/images/pistolete2.png"
                            alt="pistole"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
