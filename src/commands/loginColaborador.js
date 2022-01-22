export function senhaLogin() {
  const json = {
    login: [
      {
        usuario: "usuario",
        senha: "0",
        id_colaborador: 1,
        recursos: {
          dashboard_area_trabalho: {
            id_layout_dashboard: 1,
            dashboard_complementar: []
          },
          dashboard_cliente: {
            id_layout_dashboard: 2,
            dashboard_complementar: [6, 7]
          },
          dashboard_colaborador: {
            id_layout_dashboard: 3,
            dashboard_complementar: [],
            permissao_colaborador: ["*"]
          },
          dashboard_tags: {
            id_layout_dashboard: 13,
            dashboard_complementar: [],
            permissao_colaborador: ["*"]
          },
          dashboard_projeto: {
            id_layout_dashboard: 9,
            dashboard_complementar: []
          },
          dashboard_notificacao: {
            layout_dashboard: [
              {
                id_layout_dashboard: 10,
                dashboard: "Periodo",
                dashboard_complementar: []
              },
              {
                id_layout_dashboard: 11,
                dashboard: "Tipo",
                dashboard_complementar: []
              }
            ]
          },
          dashboard_bi_x: [
            {
              grupo: "Desenvolvimento",
              icone: "code",
              layout_dashboard: [
                {
                  icone: "code",
                  id_layout_dashboard: 12,

                  dashboard: "Padrão",
                  dashboard_complementar: []
                }
              ]
            }
          ]
        },
        rotas: "colaborador",
        img: require("../assets/comum.png"),
        token: "1086222297"
      },
      {
        usuario: "abner",
        senha: "1= 210124",
        id_colaborador: 51,
        recursos: {
          dashboard_area_trabalho: {
            id_layout_dashboard: 1,
            dashboard_complementar: []
          },
          dashboard_cliente: {
            id_layout_dashboard: 2,
            dashboard_complementar: []
          },
          dashboard_bi_x: [
            {
              grupo: "Desenvolvimento",
              icone: "code",
              layout_dashboard: [
                {
                  icone: "code",
                  id_layout_dashboard: 12,
                  dashboard: "Padrão",
                  dashboard_complementar: []
                }
              ]
            }
          ]
        },
        rotas: "colaborador",
        img: require("../assets/comum.png"),
        token: "10328697"
      },
      {
        usuario: "adelmo",
        senha: "adelmo321",
        id_colaborador: 57,
        recursos: {
          dashboard_area_trabalho: {
            id_layout_dashboard: 1,
            dashboard_complementar: []
          },
          dashboard_cliente: {
            id_layout_dashboard: 2,
            dashboard_complementar: []
          },
          dashboard_bi_x: [
            {
              grupo: "Desenvolvimento",
              icone: "code",
              layout_dashboard: [
                {
                  icone: "code",
                  id_layout_dashboard: 12,
                  dashboard: "Padrão",
                  dashboard_complementar: []
                }
              ]
            }
          ]
        },
        rotas: "colaborador",
        img: require("../assets/comum.png"),
        token: "1086222297"
      },
      {
        usuario: "cledesson",
        senha: "cledesson321",
        id_colaborador: 2,
        recursos: {
          dashboard_area_trabalho: {
            id_layout_dashboard: 1,
            dashboard_complementar: []
          },
          dashboard_cliente: {
            id_layout_dashboard: 2,
            dashboard_complementar: []
          },
          dashboard_bi_x: [
            {
              grupo: "Desenvolvimento",
              icone: "code",
              layout_dashboard: [
                {
                  icone: "code",
                  id_layout_dashboard: 12,

                  dashboard: "Padrão",
                  dashboard_complementar: []
                }
              ]
            }
          ]
        },
        rotas: "colaborador",
        img: require("../assets/cledesson.png"),
        token: "1086222297"
      },
      {
        usuario: "danilo",
        senha: "teste",
        id_colaborador: 4,
        recursos: {
          dashboard_area_trabalho: {
            id_layout_dashboard: 1,
            dashboard_complementar: []
          },
          dashboard_cliente: {
            id_layout_dashboard: 2,
            dashboard_complementar: [6, 7]
          },
          dashboard_colaborador: {
            id_layout_dashboard: 3,
            dashboard_complementar: [],
            permissao_colaborador: ["*"]
          },
          dashboard_projeto: {
            id_layout_dashboard: 9,
            dashboard_complementar: []
          },
          dashboard_bi_x: [
            {
              grupo: "Diretoria",
              icone: "people_outline",
              layout_dashboard: [
                {
                  icone: "people_outline",
                  id_layout_dashboard: 5,
                  dashboard: "Padrão",
                  dashboard_complementar: []
                }
              ]
            },
            {
              grupo: "Desenvolvimento",
              icone: "code",
              layout_dashboard: [
                {
                  id_layout_dashboard: 12,
                  icone: "code",
                  dashboard: "Padrão",
                  dashboard_complementar: []
                }
              ]
            },
            {
              grupo: "Área Técnica",
              layout_dashboard: [
                {
                  id_layout_dashboard: 4,
                  dashboard: "Corrente",
                  icone: "construction",
                  dashboard_complementar: []
                },
                {
                  id_layout_dashboard: 13,
                  icone: "construction",
                  dashboard: "Gestão",
                  dashboard_complementar: []
                },
                {
                  id_layout_dashboard: 18,
                  dashboard: "Formação",
                  icone: "construction",
                  dashboard_complementar: []
                }
              ]
            },
            {
              grupo: "Projetos",
              layout_dashboard: [
                {
                  icone: "description",
                  id_layout_dashboard: 8,
                  dashboard: "Gestão",
                  dashboard_complementar: []
                }
              ]
            },
            {
              grupo: "Administrativo",
              icone: "paid",
              layout_dashboard: [
                {
                  icone: "paid",
                  id_layout_dashboard: 17,
                  dashboard: "Geral",
                  dashboard_complementar: []
                },
                {
                  icone: "paid",
                  id_layout_dashboard: 14,
                  dashboard: "Cobrança",
                  dashboard_complementar: []
                },
                {
                  icone: "paid",
                  id_layout_dashboard: 19,
                  dashboard: "Qualidade",
                  dashboard_complementar: []
                },
                {
                  icone: "paid",
                  id_layout_dashboard: 20,
                  dashboard: "Processos",
                  dashboard_complementar: []
                }
              ]
            },
            {
              grupo: "Comercial",
              icone: "work",
              layout_dashboard: [
                {
                  icone: "work",
                  id_layout_dashboard: 15,
                  dashboard: "Padrão",
                  dashboard_complementar: []
                }
              ]
            },
            {
              grupo: "Contas",
              icone: "work",
              layout_dashboard: [
                {
                  icone: "work",
                  id_layout_dashboard: 16,
                  dashboard: "Padrão",
                  dashboard_complementar: []
                }
              ]
            }
          ]
        },
        rotas: "colaborador",
        img: require("../assets/comum.png"),
        token: "1086222297"
      },
      {
        usuario: "eron",
        senha: "eronsyclus",
        id_colaborador: 49,
        recursos: {
          dashboard_area_trabalho: {
            id_layout_dashboard: 1,
            dashboard_complementar: []
          },
          dashboard_cliente: {
            id_layout_dashboard: 2,
            dashboard_complementar: []
          },
          dashboard_bi_x: [
            {
              grupo: "Desenvolvimento",
              icone: "code",
              layout_dashboard: [
                {
                  icone: "code",
                  id_layout_dashboard: 12,

                  dashboard: "Padrão",
                  dashboard_complementar: []
                }
              ]
            }
          ]
        },
        rotas: "colaborador",
        img: require("../assets/comum.png"),
        token: "103218697"
      },
      {
        usuario: "ewerton",
        senha: "ewerton321",
        id_colaborador: 46,
        recursos: {
          dashboard_area_trabalho: {
            id_layout_dashboard: 1,
            dashboard_complementar: []
          },
          dashboard_cliente: {
            id_layout_dashboard: 2,
            dashboard_complementar: []
          },
          dashboard_bi_x: [
            {
              grupo: "Contas",
              icone: "work",
              layout_dashboard: [
                {
                  icone: "work",
                  id_layout_dashboard: 16,
                  dashboard: "Padrão",
                  dashboard_complementar: []
                }
              ]
            },
            {
              grupo: "Área Técnica",
              layout_dashboard: [
                {
                  id_layout_dashboard: 4,
                  dashboard: "Corrente",
                  icone: "construction",
                  dashboard_complementar: []
                },
                {
                  id_layout_dashboard: 13,
                  icone: "construction",
                  dashboard: "Gestão",
                  dashboard_complementar: []
                },
                {
                  id_layout_dashboard: 18,
                  dashboard: "Formação",
                  icone: "construction",
                  dashboard_complementar: []
                }
              ]
            },
            {
              grupo: "Projetos",
              layout_dashboard: [
                {
                  icone: "description",
                  id_layout_dashboard: 8,
                  dashboard: "Gestão",
                  dashboard_complementar: []
                }
              ]
            },
            {
              grupo: "Desenvolvimento",
              icone: "code",
              layout_dashboard: [
                {
                  id_layout_dashboard: 12,
                  icone: "code",
                  dashboard: "Padrão",
                  dashboard_complementar: []
                }
              ]
            }
          ]
        },
        rotas: "colaborador",
        img: require("../assets/comum.png"),
        token: "13108697"
      },
      {
        usuario: "fabricio",
        senha: "k2yk",
        id_colaborador: 42,
        recursos: {
          dashboard_area_trabalho: {
            id_layout_dashboard: 1,
            dashboard_complementar: []
          },
          dashboard_cliente: {
            id_layout_dashboard: 2,
            dashboard_complementar: []
          },
          dashboard_colaborador: {
            id_layout_dashboard: 3,
            dashboard_complementar: [],
            permissao_colaborador: ["*"]
          },
          dashboard_bi_x: [
            {
              grupo: "Desenvolvimento",
              icone: "code",
              layout_dashboard: [
                {
                  icone: "code",
                  id_layout_dashboard: 12,

                  dashboard: "Padrão",
                  dashboard_complementar: []
                }
              ]
            }
          ]
        },
        rotas: "colaborador",
        img: require("../assets/fabricio.png"),
        token: "108697"
      },
      {
        usuario: "helton",
        senha: "helton321",
        id_colaborador: 47,
        recursos: {
          dashboard_area_trabalho: {
            id_layout_dashboard: 1,
            dashboard_complementar: []
          },
          dashboard_cliente: {
            id_layout_dashboard: 2,
            dashboard_complementar: []
          },
          dashboard_colaborador: {
            id_layout_dashboard: 3,
            dashboard_complementar: [],
            permissao_colaborador: ["*"]
          },
          dashboard_bi_x: [
            {
              grupo: "Desenvolvimento",
              icone: "code",
              layout_dashboard: [
                {
                  icone: "code",
                  id_layout_dashboard: 12,
                  dashboard: "Padrão",
                  dashboard_complementar: []
                },
                {
                  icone: "code",
                  id_layout_dashboard: 9999,
                  dashboard: "Teste",
                  dashboard_complementar: []
                }
              ]
            }
          ],
          dashboard_notificacao: {
            layout_dashboard: [
              {
                id_layout_dashboard: 10,
                dashboard: "Periodo",
                dashboard_complementar: []
              },
              {
                id_layout_dashboard: 11,
                dashboard: "Tipo",
                dashboard_complementar: []
              }
            ]
          }
        },
        rotas: "colaborador",
        img: require("../assets/helton.png"),
        token: "108697"
      },
      {
        usuario: "henrique",
        senha: "140290syclus",
        id_colaborador: 12,
        recursos: {
          dashboard_area_trabalho: {
            id_layout_dashboard: 1,
            dashboard_complementar: []
          },
          dashboard_cliente: {
            id_layout_dashboard: 2,
            dashboard_complementar: []
          },
          dashboard_colaborador: {
            id_layout_dashboard: 3,
            dashboard_complementar: [],
            permissao_colaborador: ["*"]
          },
          dashboard_bi_x: [
            {
              grupo: "Administrativo",
              icone: "paid",
              layout_dashboard: [
                {
                  icone: "paid",
                  id_layout_dashboard: 17,
                  dashboard: "Geral",
                  dashboard_complementar: []
                },
                {
                  icone: "paid",
                  id_layout_dashboard: 14,
                  dashboard: "Cobrança",
                  dashboard_complementar: []
                },
                {
                  icone: "paid",
                  id_layout_dashboard: 19,
                  dashboard: "Qualidade",
                  dashboard_complementar: []
                }
              ]
            },
            {
              grupo: "Área Técnica",
              layout_dashboard: [
                {
                  id_layout_dashboard: 4,
                  dashboard: "Corrente",
                  icone: "construction",
                  dashboard_complementar: []
                },
                {
                  id_layout_dashboard: 13,
                  dashboard: "Gestão",
                  icone: "construction",
                  dashboard_complementar: []
                },
                {
                  id_layout_dashboard: 18,
                  dashboard: "Formação",
                  icone: "construction",
                  dashboard_complementar: []
                }
              ]
            },
            {
              grupo: "Projetos",
              layout_dashboard: [
                {
                  icone: "description",
                  id_layout_dashboard: 8,
                  dashboard: "Gestão",
                  dashboard_complementar: []
                }
              ]
            },
            {
              grupo: "Desenvolvimento",
              icone: "code",
              layout_dashboard: [
                {
                  id_layout_dashboard: 12,
                  icone: "code",
                  dashboard: "Padrão",
                  dashboard_complementar: []
                }
              ]
            },
            {
              grupo: "Comercial",
              icone: "work",
              layout_dashboard: [
                {
                  icone: "work",
                  id_layout_dashboard: 15,
                  dashboard: "Padrão",
                  dashboard_complementar: []
                }
              ]
            }
          ]
        },
        rotas: "colaborador",
        img: require("../assets/comum.png"),
        token: "108697321"
      },
      {
        usuario: "joaopaulo",
        senha: "joaopaulo321",
        id_colaborador: 21,
        recursos: {
          dashboard_area_trabalho: {
            id_layout_dashboard: 1,
            dashboard_complementar: []
          },
          dashboard_cliente: {
            id_layout_dashboard: 2,
            dashboard_complementar: [6]
          },
          dashboard_colaborador: {
            id_layout_dashboard: 3,
            dashboard_complementar: [],
            permissao_colaborador: ["*"]
          },
          dashboard_bi_x: [
            {
              grupo: "Administrativo",
              icone: "paid",
              layout_dashboard: [
                {
                  icone: "paid",
                  id_layout_dashboard: 17,
                  dashboard: "Geral",
                  dashboard_complementar: []
                },
                {
                  icone: "paid",
                  id_layout_dashboard: 14,
                  dashboard: "Cobrança",
                  dashboard_complementar: []
                }
              ]
            }
          ]
        },
        rotas: "colaborador",
        img: require("../assets/jpaulo.png"),
        token: "108693217"
      },
      {
        usuario: "joaopedro",
        senha: "joao1905",
        id_colaborador: 52,
        recursos: {
          dashboard_area_trabalho: {
            id_layout_dashboard: 1,
            dashboard_complementar: []
          },
          dashboard_cliente: {
            id_layout_dashboard: 2,
            dashboard_complementar: []
          },
          dashboard_bi_x: [
            {
              grupo: "Desenvolvimento",
              icone: "code",
              layout_dashboard: [
                {
                  icone: "code",
                  id_layout_dashboard: 12,

                  dashboard: "Padrão",
                  dashboard_complementar: []
                }
              ]
            }
          ]
        },
        rotas: "colaborador",
        img: require("../assets/jpedro.png"),
        token: "10869227"
      },
      {
        usuario: "jonatan",
        senha: "82374338",
        id_colaborador: 56,
        recursos: {
          dashboard_area_trabalho: {
            id_layout_dashboard: 1,
            dashboard_complementar: []
          },
          dashboard_cliente: {
            id_layout_dashboard: 2,
            dashboard_complementar: []
          },
          dashboard_colaborador: {
            id_layout_dashboard: 3,
            dashboard_complementar: [],
            permissao_colaborador: ["*"]
          },
          dashboard_bi_x: [
            {
              grupo: "Administrativo",
              icone: "code",
              layout_dashboard: [
                {
                  icone: "code",
                  id_layout_dashboard: 20,
                  dashboard: "Processos",
                  dashboard_complementar: []
                }
              ]
            },
            {
              grupo: "Desenvolvimento",
              icone: "code",
              layout_dashboard: [
                {
                  icone: "code",
                  id_layout_dashboard: 12,
                  dashboard: "Padrão",
                  dashboard_complementar: []
                }
              ]
            }
          ]
        },
        rotas: "colaborador",
        img: require("../assets/comum.png"),
        token: "108693217"
      },
      {
        usuario: "jullyadson",
        senha: "jullyadson321",
        id_colaborador: 15,
        recursos: {
          dashboard_area_trabalho: {
            id_layout_dashboard: 1,
            dashboard_complementar: []
          },
          dashboard_cliente: {
            id_layout_dashboard: 2,
            dashboard_complementar: []
          },
          dashboard_colaborador: {
            id_layout_dashboard: 3,
            dashboard_complementar: [],
            permissao_colaborador: ["*"]
          },
          dashboard_projeto: {
            id_layout_dashboard: 9,
            dashboard_complementar: []
          },
          dashboard_bi_x: [
            {
              grupo: "Área Técnica",
              layout_dashboard: [
                {
                  id_layout_dashboard: 4,
                  dashboard: "Corrente",
                  icone: "construction",
                  dashboard_complementar: []
                },
                {
                  id_layout_dashboard: 13,
                  dashboard: "Gestão",
                  icone: "construction",
                  dashboard_complementar: []
                },
                {
                  id_layout_dashboard: 18,
                  dashboard: "Formação",
                  icone: "construction",
                  dashboard_complementar: []
                }
              ]
            },
            {
              grupo: "Projetos",
              layout_dashboard: [
                {
                  icone: "description",
                  id_layout_dashboard: 8,
                  dashboard: "Gestão",
                  dashboard_complementar: []
                }
              ]
            },
            {
              grupo: "Desenvolvimento",
              icone: "code",
              layout_dashboard: [
                {
                  id_layout_dashboard: 12,
                  icone: "code",
                  dashboard: "Padrão",
                  dashboard_complementar: []
                }
              ]
            }
          ]
        },
        rotas: "colaborador",
        img: require("../assets/jully.png"),
        token: "108632197"
      },
      {
        usuario: "maciel",
        senha: "29915052",
        id_colaborador: 20,
        recursos: {
          dashboard_area_trabalho: {
            id_layout_dashboard: 1,
            dashboard_complementar: []
          },
          dashboard_cliente: {
            id_layout_dashboard: 2,
            dashboard_complementar: [7]
          },
          dashboard_colaborador: {
            id_layout_dashboard: 3,
            dashboard_complementar: [],
            permissao_colaborador: ["*"]
          },
          dashboard_bi_x: [
            {
              grupo: "Área Técnica",
              layout_dashboard: [
                {
                  id_layout_dashboard: 4,
                  dashboard: "Corrente",
                  icone: "construction",
                  dashboard_complementar: []
                }
              ]
            },
            {
              grupo: "Desenvolvimento",
              icone: "code",
              layout_dashboard: [
                {
                  id_layout_dashboard: 12,
                  icone: "code",
                  dashboard: "Padrão",
                  dashboard_complementar: []
                }
              ]
            },
            {
              grupo: "Comercial",
              icone: "work",
              layout_dashboard: [
                {
                  icone: "work",
                  id_layout_dashboard: 15,
                  dashboard: "Padrão",
                  dashboard_complementar: []
                }
              ]
            }
          ]
        },
        rotas: "colaborador",
        img: require("../assets/comum.png"),
        token: "10821697"
      },
      {
        usuario: "pedrosantos",
        senha: "phsshp091217",
        id_colaborador: 41,
        recursos: {
          dashboard_area_trabalho: {
            id_layout_dashboard: 1,
            dashboard_complementar: []
          },
          dashboard_cliente: {
            id_layout_dashboard: 2,
            dashboard_complementar: []
          },
          dashboard_bi_x: [
            {
              grupo: "Desenvolvimento",
              icone: "code",
              layout_dashboard: [
                {
                  icone: "code",
                  id_layout_dashboard: 12,

                  dashboard: "Padrão",
                  dashboard_complementar: []
                }
              ]
            }
          ]
        },
        rotas: "colaborador",
        img: require("../assets/comum.png"),
        token: "10863297"
      },
      {
        usuario: "renan",
        senha: "renan321",
        id_colaborador: 55,
        recursos: {
          dashboard_area_trabalho: {
            id_layout_dashboard: 1,
            dashboard_complementar: []
          },
          dashboard_cliente: {
            id_layout_dashboard: 2,
            dashboard_complementar: []
          },
          dashboard_bi_x: [
            {
              grupo: "Desenvolvimento",
              icone: "code",
              layout_dashboard: [
                {
                  icone: "code",
                  id_layout_dashboard: 12,

                  dashboard: "Padrão",
                  dashboard_complementar: []
                }
              ]
            }
          ]
        },
        rotas: "colaborador",
        img: require("../assets/comum.png"),
        token: "108697"
      },
      {
        usuario: "rodrigo",
        senha: "cradle66",
        id_colaborador: 58,
        recursos: {
          dashboard_area_trabalho: {
            id_layout_dashboard: 1,
            dashboard_complementar: []
          },
          dashboard_cliente: {
            id_layout_dashboard: 2,
            dashboard_complementar: []
          },
          dashboard_bi_x: [
            {
              grupo: "Desenvolvimento",
              icone: "code",
              layout_dashboard: [
                {
                  icone: "code",
                  id_layout_dashboard: 12,

                  dashboard: "Padrão",
                  dashboard_complementar: []
                }
              ]
            }
          ]
        },
        rotas: "colaborador",
        img: require("../assets/rodrigo.png"),
        token: "108321697"
      },
      {
        usuario: "wagner",
        senha: "wagner321",
        id_colaborador: 53,
        recursos: {
          dashboard_area_trabalho: {
            id_layout_dashboard: 1,
            dashboard_complementar: []
          },
          dashboard_cliente: {
            id_layout_dashboard: 2,
            dashboard_complementar: []
          },
          dashboard_colaborador: {
            id_layout_dashboard: 3,
            dashboard_complementar: [],
            permissao_colaborador: ["*"]
          },
          dashboard_bi_x: [
            {
              grupo: "Área Técnica",
              layout_dashboard: [
                {
                  id_layout_dashboard: 4,
                  dashboard: "Corrente",
                  icone: "construction",
                  dashboard_complementar: []
                },
                {
                  id_layout_dashboard: 13,
                  dashboard: "Gestão",
                  icone: "construction",
                  dashboard_complementar: []
                },
                {
                  id_layout_dashboard: 18,
                  dashboard: "Formação",
                  icone: "construction",
                  dashboard_complementar: []
                }
              ]
            },
            {
              grupo: "Desenvolvimento",
              icone: "code",
              layout_dashboard: [
                {
                  id_layout_dashboard: 12,
                  icone: "code",
                  dashboard: "Padrão",
                  dashboard_complementar: []
                }
              ]
            }
          ]
        },
        rotas: "colaborador",
        img: require("../assets/wagner.png"),
        token: "1321308697"
      },
      {
        usuario: "techplast",
        senha: "0",
        id_colaborador: 54,
        recursos: {
          dashboard_cliente_producao: {
            id_layout_dashboard: 21,
            dashboard_complementar: []
          }
        },
        rotas: "cliente",
        img: require("../assets/clientes/techplast.png"),
        token: "1321308697"
      }
    ]
  };
  return json;
}
