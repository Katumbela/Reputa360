import React, { useEffect, useState } from "react";
import "./banner.css";
import { NavLink } from "react-router-dom";
import arobot from "../../imgs/bann_kit.gif";
import play from "../../imgs/play.png";
import v2 from "../../video/v1.mp4";
import v1 from "../../video/v2.mp4";
import { Fade } from "react-awesome-reveal";
import CardCurso from "../card_serv/card_serv";
import getCursosData from "../../pages/lista_cursos";
import bom from "../../imgs/bom.png";
import mau from "../../imgs/mau.png";
import arreiou from "../../imgs/arreiou.jpeg";
import bomm from "../../imgs/bomm.webp";
import maxi from "../../imgs/maxi.png";
import naorecomendado from "../../imgs/naorecomendado.webp";
import otimo from "../../imgs/otimo.webp";
import xyami from "../../imgs/xyami.jpeg";
import shoprite from "../../imgs/shoprite.jpeg";
import unitel from "../../imgs/unitel.png";
import r360 from "../../imgs/r360.png";
import ruim from "../../imgs/ruim.webp";
import logo from "../../imgs/icon.png";
import desconto from "../../imgs/descontos.webp";
import desc from "../../imgs/desc.png";
import blog from "../../imgs/blog.png";
import b1 from "../../imgs/blog/1.png";
import b2 from "../../imgs/blog/2.png";
import b3 from "../../imgs/blog/3.png";
import b4 from "../../imgs/blog/4.png";
import africa from "../../imgs/africa.png";
import AbreviarTexto from "../abreviarTexto";

const Banner = () => {
  const [load, setLoad] = useState(false);
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCursosData();
      setCursos(data);
    };

    fetchData();
  }, []); // o segundo argumento do useEffect é um array de dependências, coloque aqui qualquer dependência necessária

  const [searchTerm, setSearchTerm] = useState("");
  function handleSearchInputChange(e) {
    setSearchTerm(e.target.value);
  }
  const [searchTerm2, setSearchTerm2] = useState("");
  function handleSearchInputChange2(e) {
    setSearchTerm2(e.target.value);
  }

  const filteredEquipements = cursos.filter(
    (curso) =>
      curso.nome.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (searchTerm2 === "" ||
        curso.endereco.toLowerCase().includes(searchTerm2.toLowerCase()))
  );

  const listarTudo = () => {
    setSearchTerm("");
  };

  return (
    <>
      <div className="banner shadow-md">
        <div className="body-banner text-center container">
          <h4 className="f-reg  titulo">
            O <b className="text-danger">Reputa</b> <b className="text-success">360</b> te aproxima das marcas que têm a confiança do
            consumidor!
          </h4>
          <p className="f-14  text-secondary">
            Compre de modo mais <b className="text-success">seguro</b>, pesquisando empresas e buscando uma
            solução para algum problema.
          </p>

          <br />
          <div className="quadros w-md-75 w-lg-75 mx-auto">
            <div className="qq hover btn rounded-2 btn-outline-primary">
              <span>Pesquise uma empresa </span>{" "}
              <i className="bi bi-search"></i>
            </div>
            <div className="q rounded-2">
              <span>Cadastre uma empresa</span>{" "}
              <i className="bi bi-building-add"></i>
            </div>
            <div className="q rounded-2">
              <span>Domínios AO</span> <i className="bi bi-hdd-rack"></i>
            </div>
            <NavLink to={'/pt/descontos'} className="q text-decoration-none rounded-2">
              <span>Cupons de Desconto</span>{" "}
              <i className="bi bi-ticket-perforated"></i>
            </NavLink>
            <div className="q rounded-2">
              <span> Central de Ajuda </span>{" "}
              <i className="bi bi-question-circle"></i>
            </div>
            <div className="q rounded-2">
              <span>Faça uma Reclamação</span>{" "}
              <i className="bi bi-megaphone"></i>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid container-lg">
        <div className="row">
          <div className="col-12 col-md-4 col-xl-3 col-xxl-2 pt-1">
            <div className="shadow-md card-opt p-3">
              <button
                onClick={() => listarTudo()}
                className="btn btn-primary w-100"
              >
                Listar tudo
              </button>

              <button className="btn my-3 btn-secondary w-100">
                Ver por Categoria
              </button>
              <br />
              <b>Endereço</b>
              <div className="search-by">
                <label htmlFor="d" className="">
                  Buscar por endereço
                </label>
                <input
                  type="text"
                  value={searchTerm2}
                  onChange={handleSearchInputChange2}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="col-12 container-xxl container-fluid col-md-8 col-xl-9 col-xxl-10">
            {(searchTerm.length > 0 || searchTerm2.length > 0) && (
              <div className="row">
                {filteredEquipements.map((item) => (
                  <CardCurso key={item.id} c={item} />
                ))}
              </div>
            )}

            // || filteredEquipements == 0 //

            {filteredEquipements == 0 && (
              <center>
                <span className="mx-auto text-secondary">
                  Não foi encontrado um outro resultado para o que procura!
                </span>
              </center>
            )}

            {searchTerm.length == "" && searchTerm2.length == "" && (
              <div className="row mx-2">
                {cursos.map((item) => (
                  <CardCurso key={item.id} c={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div> */}

      {/* <div
        className="modal fade"
        id="modal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <video width="640" height="360" controls>
              <source src={v2} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>
      </div> */}

      <div className="publicidade text-white bg-secondary my-3 py-5 text-center">
        <br />
        <br />
        <h5>Publicidade</h5>

        <br />
        <br />
      </div>

      <div className="ranking-emp bg-light py-4 container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <h3>
              <b>Ranking das empresas</b>
            </h3>

            <i className="f-12 fw-400">Referente aos últimos 30 dias</i>
            <br />
            <span>
              Com base nas avaliações que os consumidores deixam para as
              empresas das quais reclamaram, a gente constrói nossos rankings. É
              assim que nosso site ajuda as pessoas a saberem em quais marcas
              podem confiar mais!
            </span>
            <br />
            <br />
            <NavLink to={'/pt/ranking'} className="btn rounded-1 btn-outline-success">
              Ver Ranking Completo
            </NavLink>
          </div>
          <div className="col-12 col-lg-8 my-lg-0 my-5">
            <div className="tabss w-100   overflow-x-auto">
              <ul className="w-100 overflow-x-auto">
                <li>
                  <button className="btn btn-sm btn-success">Todos</button>
                </li>
                <li>
                  <button className="btn  btn-sm btn-outline-success">
                    Supermercados
                  </button>
                </li>
                <li>
                  <button className="btn  btn-sm btn-outline-success">
                    Bancos
                  </button>
                </li>
                <li>
                  <button className="btn btn-sm btn-outline-success">
                    <span> Telefonia,</span> <span>TV </span> <span>&</span>{" "}
                    <span>Internet</span>
                  </button>
                </li>
                <li>
                  <button className="btn  btn-sm btn-outline-success">
                    <span>Beleza</span> <span>&</span> <span>Estética</span>
                  </button>
                </li>
                <li>
                  <button className="btn  btn-sm btn-outline-success">
                    Seguradoras
                  </button>
                </li>
                <li>
                  <button className="btn  btn-sm btn-outline-success">
                    <span>Sites</span> <span>& </span>
                    <span>Portais</span>
                  </button>
                </li>
                <li>
                  <button className="btn  btn-sm btn-outline-success">
                    Softwares
                  </button>
                </li>
                <li>
                  <button className="btn  btn-sm btn-outline-success">
                    <span> E-</span>
                    <span>commerce</span>{" "}
                  </button>
                </li>
              </ul>
            </div>

            {/* Cards com os dados das melhores empresas  */}

            <div className="bests-worst">
              <div className="row">
                <div className="melhores col-12 col-md-6">
                  <div className="card-best bg-white border-lightt p-2 rounded-1">
                    <div className="bg-success d-flex  gap-2 head-texts rounded-1 p-3">
                      <img src={bom} alt="" />
                      <span className="my-auto text-white">
                        <b>Top 5 Melhores empresas mais bem avaliadas</b>
                      </span>
                    </div>
                    <br />
                    <div className="empresa my-3 shadow-sm d-flex gap-2 border-lightt p-2 rounded-1">
                      <h5 className="my-auto text-success">
                        <b>1º</b>
                      </h5>
                      <img src={unitel} className="logo-empresa" alt="" />
                      <div className="de my-auto">
                        <b>UNITEL SA</b>

                        <p className="d-flex mt-1 my-auto gap-2 f-14">
                          <img src={r360} className="icon-empresa" alt="" />
                          <span className="my-auto text-secondary">R360</span>
                        </p>
                      </div>
                    </div>
                    <div className="empresa my-3 shadow-sm d-flex gap-2 border-lightt p-2 rounded-1">
                      <h5 className="my-auto text-success">
                        <b>2º</b>
                      </h5>
                      <img src={xyami} className="logo-empresa" alt="" />
                      <div className="de my-auto">
                        <b>XYAMI SHOPPING</b>

                        <p className="d-flex mt-1 my-auto gap-2 f-14">
                          <img src={r360} className="icon-empresa" alt="" />
                          <span className="my-auto text-secondary">R360</span>
                        </p>
                      </div>
                    </div>
                    <div className="empresa my-3 shadow-sm d-flex gap-2 border-lightt p-2 rounded-1">
                      <h5 className="my-auto text-success">
                        <b>3º</b>
                      </h5>
                      <img src={shoprite} className="logo-empresa" alt="" />
                      <div className="de my-auto">
                        <b>SHOPRITE</b>

                        <p className="d-flex mt-1 my-auto gap-2 f-14">
                          <img src={otimo} className="icon-empresa" alt="" />
                          <span className="my-auto text-secondary">
                            Muito Bom
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="empresa my-3 shadow-sm d-flex gap-2 border-lightt p-2 rounded-1">
                      <h5 className="my-auto text-success">
                        <b>4º</b>
                      </h5>
                      <img src={maxi} className="logo-empresa" alt="" />
                      <div className="de my-auto">
                        <b>Maxi Compras</b>

                        <p className="d-flex mt-1 my-auto gap-2 f-14">
                          <img src={bomm} className="icon-empresa" alt="" />
                          <span className="my-auto text-secondary">Bom</span>
                        </p>
                      </div>
                    </div>
                    <div className="empresa my-3 shadow-sm d-flex gap-2 border-lightt p-2 rounded-1">
                      <h5 className="my-auto text-success">
                        <b>5º</b>
                      </h5>
                      <img src={arreiou} className="logo-empresa" alt="" />
                      <div className="de my-auto">
                        <b>ARREIOU TA BARATO</b>

                        <p className="d-flex mt-1 my-auto gap-2 f-14">
                          <img src={bomm} className="icon-empresa" alt="" />
                          <span className="my-auto text-secondary">Bom</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="piores mt-5 mt-md-0 col-12 col-md-6">
                  <div className="card-best bg-white border-lightt p-2 rounded-1">
                    <div className="bg-danger d-flex  gap-2 head-texts rounded-1 p-3">
                      <img src={mau} alt="" />
                      <span className="text-white my-auto">
                        <b>
                          Top 5 <b>Piores</b> empresas mais bem avaliadas
                        </b>
                      </span>
                    </div>
                    <br />
                    <div className="empresa my-3 shadow-sm d-flex gap-2 border-lightt p-2 rounded-1">
                      <h5 className="my-auto text-success">
                        <b>1º</b>
                      </h5>
                      <img src={arreiou} className="logo-empresa" alt="" />
                      <div className="de my-auto">
                        <b>ARREIOU TA BARATO</b>

                        <p className="d-flex mt-1 my-auto gap-2 f-14">
                          <img
                            src={naorecomendado}
                            className="icon-empresa"
                            alt=""
                          />
                          <span className="my-auto text-secondary">
                            Não Recomendado
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="empresa my-3 shadow-sm d-flex gap-2 border-lightt p-2 rounded-1">
                      <h5 className="my-auto text-success">
                        <b>2º</b>
                      </h5>
                      <img src={maxi} className="logo-empresa" alt="" />
                      <div className="de my-auto">
                        <b>Maxi Compras</b>

                        <p className="d-flex mt-1 my-auto gap-2 f-14">
                          <img src={ruim} className="icon-empresa" alt="" />
                          <span className="my-auto text-secondary">
                            Muito Péssimo
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="empresa my-3 shadow-sm d-flex gap-2 border-lightt p-2 rounded-1">
                      <h5 className="my-auto text-success">
                        <b>3º</b>
                      </h5>
                      <img src={unitel} className="logo-empresa" alt="" />
                      <div className="de my-auto">
                        <b>UNITEL SA</b>

                        <p className="d-flex mt-1 my-auto gap-2 f-14">
                          <img
                            src={naorecomendado}
                            className="icon-empresa"
                            alt=""
                          />
                          <span className="my-auto text-secondary">
                            Não Recomendado
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="empresa my-3 shadow-sm d-flex gap-2 border-lightt p-2 rounded-1">
                      <h5 className="my-auto text-success">
                        <b>4º</b>
                      </h5>
                      <img src={xyami} className="logo-empresa" alt="" />
                      <div className="de my-auto">
                        <b>XYAMI SHOPPING</b>

                        <p className="d-flex mt-1 my-auto gap-2 f-14">
                          <img src={ruim} className="icon-empresa" alt="" />
                          <span className="my-auto text-secondary">
                            Muito Péssimo
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="empresa my-3 shadow-sm d-flex gap-2 border-lightt p-2 rounded-1">
                      <h5 className="my-auto text-success">
                        <b>5º</b>
                      </h5>
                      <img src={shoprite} className="logo-empresa" alt="" />
                      <div className="de my-auto">
                        <b>SHOPRITE</b>

                        <p className="d-flex mt-1 my-auto gap-2 f-14">
                          <img src={ruim} className="icon-empresa" alt="" />
                          <span className="my-auto text-secondary">
                            Muito Péssimo
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <div className="desconto container">
        <div className="row flex-row-reverse">
          <div className="col-12 imm col-md-5">
            <img src={desc} alt="" className=" my-auto -100" />
          </div>
          <div className="col-12 tt col-md-7">
            <div className="my-auto">
              <h3 className="fw-bold">Encontre os melhores descontos</h3>
              <br />
              <span>
                Compre com desconto e em segurança nas empresas mais confiáveis.
              </span>

              <br />
              <br />
              <NavLink to={'/pt/descontos'} className="btn rounded-1 btn-outline-success">
                Ver Todos os Descontos
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <br />

      <br />
      <div className="aba-lojas-online container">
        <h2>
          <b>Lojas online com descontos que possuem o R360</b>
        </h2>
        <br />
        <div className="lista-lojas">
          <div className="d-flex scroll-md gap-4">
            <div className="card-loja text-center rounded-1 border-lightt p-3 shadow-sm">
              <img src={arreiou} alt="" className="logo-empresa" />
              <div className="bod">
                <br />
                <AbreviarTexto texto={"Arreiou Ta Barato"} largura={"200"} />

                <p className="d-flex justify-content-center mt-1 my-auto gap-2 f-14">
                  <img src={r360} className="icon-empresa" alt="" />
                  <span className="my-auto text-secondary">R360</span>
                </p>
                <button className="btn mt-2 btn-sm btn-outline-success">
                  Acessar <i className="bi bi-arrow-right-short"></i>
                </button>
              </div>
            </div>

            <div className="card-loja text-center rounded-1 border-lightt p-3 shadow-sm">
              <img src={xyami} alt="" className="logo-empresa" />
              <div className="bod">
                <br />
                <AbreviarTexto texto={"Xyami Shopping"} largura={"200"} />

                <p className="d-flex justify-content-center mt-1 my-auto gap-2 f-14">
                  <img src={r360} className="icon-empresa" alt="" />
                  <span className="my-auto text-secondary">R360</span>
                </p>
                <button className="btn mt-2 btn-sm btn-outline-success">
                  Acessar <i className="bi bi-arrow-right-short"></i>
                </button>
              </div>
            </div>

            <div className="card-loja text-center rounded-1 border-lightt p-3 shadow-sm">
              <img src={shoprite} alt="" className="logo-empresa" />
              <div className="bod">
                <br />
                <AbreviarTexto texto={"Shoprite Shopping"} largura={"200"} />

                <p className="d-flex justify-content-center mt-1 my-auto gap-2 f-14">
                  <img src={bom} className="icon-empresa" alt="" />
                  <span className="my-auto text-secondary">R360</span>
                </p>
                <button className="btn mt-2 btn-sm btn-outline-success">
                  Acessar <i className="bi bi-arrow-right-short"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <br />
      <br />

      <div className="blog container">
        <center>
          <img src={blog} className="logo-blog" alt="" />
        </center>
        <br />
        <br />

        <div className="lista-blog">
          <div className="d-flex overflow-x-auto scroll-md gap-4">
            <div className="card-blog rounded-1 border-lightt shadow-sm">
              <img src={b1} alt="" className="logo-blog" />
              <div className="bod px-3 pb-3">
                <br />
                <AbreviarTexto
                  texto={
                    "'Informacoa oode kwhewwhechjwbebcmegwmg wehggwe mugewmgduge2ufweg egwhjc  hegwfjgwehh evchj.egwfhgwefwe'"
                  }
                  largura={"350"}
                />

                <p className="d-flex pb-2 mt-1 my-auto gap-2 f-14">
                  <span className="my-auto text-secondary">23/12/2023</span>
                </p>
                <a className=" ">
                  Ler mais <i className="bi bi-arrow-right-short"></i>
                </a>
              </div>
            </div>
            <div className="card-blog rounded-1 border-lightt shadow-sm">
              <img src={b2} alt="" className="logo-blog" />
              <div className="bod px-3 pb-3">
                <br />
                <AbreviarTexto
                  texto={
                    "'Financas em dia com , kwhewwhechjwbebcmegwmg wehggwe mugewmgduge2ufweg egwhjc  hegwfjgwehh evchj.egwfhgwefwe'"
                  }
                  largura={"350"}
                />

                <p className="d-flex pb-2 mt-1 my-auto gap-2 f-14">
                  <span className="my-auto text-secondary">23/12/2023</span>
                </p>
                <a className=" ">
                  Ler mais <i className="bi bi-arrow-right-short"></i>
                </a>
              </div>
            </div>
            <div className="card-blog rounded-1 border-lightt shadow-sm">
              <img src={b3} alt="" className="logo-blog" />
              <div className="bod px-3 pb-3">
                <br />
                <AbreviarTexto
                  texto={
                    "'Arreiou Ta Barato, kwhewwhechjwbebcmegwmg wehggwe mugewmgduge2ufweg egwhjc  hegwfjgwehh evchj.egwfhgwefwe'"
                  }
                  largura={"350"}
                />

                <p className="d-flex pb-2 mt-1 my-auto gap-2 f-14">
                  <span className="my-auto text-secondary">23/12/2023</span>
                </p>
                <a className=" ">
                  Ler mais <i className="bi bi-arrow-right-short"></i>
                </a>
              </div>
            </div>
            <div className="card-blog rounded-1 border-lightt shadow-sm">
              <img src={b4} alt="" className="logo-blog" />
              <div className="bod px-3 pb-3">
                <br />
                <AbreviarTexto
                  texto={
                    "'Redes sociais , kwhewwhechjwbebcmegwmg wehggwe mugewmgduge2ufweg egwhjc  hegwfjgwehh evchj.egwfhgwefwe'"
                  }
                  largura={"350"}
                />

                <p className="d-flex pb-2 mt-1 my-auto gap-2 f-14">
                  <span className="my-auto text-secondary">23/12/2023</span>
                </p>
                <a className=" ">
                  Ler mais <i className="bi bi-arrow-right-short"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <center>
          <button className="btn btn-success">
            Ver todas as materias <i className="bi bi-arrow-right-short"></i>
          </button>
        </center>
      </div>

      <br />
      <br />
      <br />
      <br />
      <div className="benefits pt-4 pb-5 bg-success">
        <div className="bbann justify-content-between d-flex">
          <img src={africa} alt="" className="africa-ban" />
          <img src={africa} alt="" className="africa-ban" />
        </div>
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-3 col-xxl-4">
              <div className="titt container">
                <h2 className="text-white">
                  <b>Reputação 360 para empresas</b>
                </h2>
                <h5
                  className="
          text-white"
                >
                  O Reputação 360 é o canal OFICIAL do consumidor Angolano! Ele
                  atua como um canal independente de comunicação entre
                  consumidores e empresas.
                </h5>
                <img src={africa} alt="" className="africa-ban" />
              </div>
            </div>
            <div className="col-12 col-lg-9 col-xxl-8">
              <div className="cards-emp w-100">
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-4 my-3">
                    <div className="card-benefit rounded-1 shadow-md p-3 bg-white">
                      <b className="f-reg">Área da Empresa</b>
                      <br />
                      <span className="f-14">
                        Responda as reclamações, peça avaliação e personalize
                        sua página com informações básicas.
                      </span>
                      <br />
                      <br />
                      <br />
                      <a href="#" className="f-14">
                        Acessar <i className="bi bi-arrow-right-short"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 my-3">
                    <div className="card-benefit rounded-1 shadow-md p-3 bg-white">
                      <b className="f-reg">Cadastrar Empresa</b>
                      <br />
                      <span className="f-14">
                        Conquiste a confiança de milhões de pessoas em todo o
                        Brasil e esteja no maior site de pesquisa de compra.
                      </span>
                      <br />
                      <br />
                      <br />
                      <a href="#" className="f-14">
                        Faça parte do R360{" "}
                        <i className="bi bi-arrow-right-short"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 my-3">
                    <div className="card-benefit rounded-1 shadow-md p-3 bg-white">
                      <b className="f-reg">Blog R360</b>
                      <br />
                      <span className="f-14">
                        O melhor conteúdo para você entender mais sobre o R360,
                        atendimento e direito do consumidor.
                      </span>
                      <br />
                      <br />
                      <br />
                      <a href="#" className="f-14">
                        Acesse o blog{" "}
                        <i className="bi bi-arrow-right-short"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 my-3">
                    <div className="card-benefit rounded-1 shadow-md p-3 bg-white">
                      <b className="f-reg">Divulgue sua marca</b>
                      <br />
                      <span className="f-14">
                        Aproveite para aumentar a confiança dos consumidores que
                        pesquisam sobre você e destaque sua empresa.
                      </span>
                      <br />
                      <br />
                      <br />
                      <a href="#" className="f-14">
                        Saiba mais <i className="bi bi-arrow-right-short"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 my-3">
                    <div className="card-benefit rounded-1 shadow-md p-3 bg-white">
                      <b className="f-reg">Gerencie suas reclamações</b>
                      <br />
                      <span className="f-14">
                        Agilize seu atendimento e facilite a rotina de quem
                        atende o Reputação 360
                      </span>
                      <br />
                      <br />
                      <br />
                      <a href="#" className="f-14">
                        Saiba mais <i className="bi bi-arrow-right-short"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 my-3">
                    <div className="card-benefit rounded-1 shadow-md p-3 bg-white">
                      <b className="f-reg">Aumente a performance do seu time</b>
                      <br />
                      <span className="f-14">
                        Atualize sua equipe com conhecimentos e insights para
                        enfrentar desafios do relacionamento com o consumidor.
                      </span>
                      <br />
                      <br />
                      <br />
                      <a href="#" className="f-14">
                        Saiba mais <i className="bi bi-arrow-right-short"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="publicidade text-white bg-secondary my-3 py-5 text-center">
        <br />
        <br />
        <h5>Publicidade</h5>

        <br />
        <br />
      </div>
      <br />
      <br />
    </>
  );
};

export default Banner;
