export function GeLayoutDashBoard(pIdLayout) {
  let jLayout;

  switch (pIdLayout) {
    case 1:
      jLayout = layoutDashBoard1();
      break;
    case 2:
      jLayout = layoutDashBoard2();
      break;
    case 3:
      jLayout = layoutDashBoard3();
      break;
    case 4:
      jLayout = layoutDashBoard4();
      break;
    case 5:
      jLayout = layoutDashBoard5();
      break;
    case 6:
      jLayout = layoutDashBoard6();
      break;
    case 7:
      jLayout = layoutDashBoard7();
      break;
    case 8:
      jLayout = layoutDashBoard8();
      break;
    case 9:
      jLayout = layoutDashBoard9();
      break;
  }

  return jLayout;
}

//area trabalho - modelo
function layoutDashBoard0() {
  console.log("3> xx1");
  const json = {
    id_dashboard: 1,
    dashboard: "Dashboard Principal",
    grupos: [
      {
        id_grupo: 1,
        grupo: "Atividades",
        icone: "assignment_turned_in",
        cards: [
          {
            id_card: 12,
            card: "Minhas execuções",
            ordem: 1,
            tipo_card: "Slide"
          },
          {
            id_card: 10,
            card: "Minhas atividades",
            ordem: 2
          },
          {
            id_card: 8,
            card: "Meus projetos",
            ordem: 3
          },
          {
            id_card: 6,
            card: "Agenda",
            ordem: 4,
            tipo_card: "Agenda"
          },
          {
            id_card: 4,
            card: "Atividades atrasadas",
            ordem: 5,
            tipo_card: "Expansao"
          },
          {
            id_card: 2,
            card: "Gráficos de atividade",
            ordem: 5,
            tipo_card: "Grafico",
            sub_tipo: "grafico_padrao"
          },
          {
            id_card: 1,
            card: "Execuções Gerais",
            ordem: 6,
            tipo_card: "Lista",
            sub_tipo: "lista-padrao",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_item: "bodyExecucaoGeral"
            }
          },
          {
            id_card: 9,
            card: "Gráfico Tempo",
            ordem: 7,
            tipo_card: "Grafico",
            sub_tipo: "grafico_linha"
          }
        ],
        cards_opcionais: [
          {
            id_card: 12,
            card: "Minhas execuções",
            ordem: 1,
            icone: "assignment_turned_in",
            cor: "primary"
          },
          {
            id_card: 10,
            card: "Minhas atividades",
            ordem: 2,
            icone: "description",
            cor: "orange"
          },
          {
            id_card: 8,
            card: "Meus projetos",
            ordem: 3,
            icone: "article",
            cor: "red-5"
          },
          {
            id_card: 6,
            card: "Agenda",
            ordem: 4,
            icone: "article",
            cor: "pink-5"
          },
          {
            id_card: 4,
            card: "Atividades atrasadas",
            ordem: 5,
            icone: "folder",
            cor: "purple-5"
          },
          {
            id_card: 2,
            card: "Gráficos Atividades",
            ordem: 6,
            icone: "leaderboard",
            cor: "deep-purple-5"
          },
          {
            id_card: 1,
            card: "Execuções Gerais",
            ordem: 7,
            icone: "work_outline",
            cor: "indigo-5"
          },
          {
            id_card: 2,
            card: "Gráfico Tempo",
            ordem: 6,
            icone: "auto_graph",
            cor: "deep-purple-7"
          }
        ]
      },
      {
        id_grupo: 2,
        grupo: "Projetos",
        icone: "article",
        cards: [
          {
            id_card: 8,
            card: "Meus projetos",
            ordem: 1,
            btn_comando: "btn-filtro",
            tipo_card: "Lista",
            sub_tipo: "lista-padrao",
            conteudo_card: ["Scrum", "Implantação"]
          },
          {
            id_card: 11,
            card: "Atividade de projeto",
            ordem: 2,
            tipo_card: "Expansao"
          },
          {
            id_card: 9,
            card: "Duração por projeto",
            ordem: 3,
            btn_comando: "btn-filtro",
            tipo_card: "Lista",
            sub_tipo: "lista-padrao",
            conteudo_card: ["projeto A", "projeto B"]
          },
          {
            id_card: 6,
            card: "Agenda",
            ordem: 4,
            cor_header: "bg-light-blue-3",
            tipo_card: "Agenda"
          },
          {
            id_card: 5,
            card: "Projetos Atrasados",
            ordem: 5,
            tipo_card: "Expansao"
          },
          {
            id_card: 2,
            card: "Gráficos",
            ordem: 6,
            btn_comando: "btn-filtro",
            tipo_card: "Grafico",
            sub_tipo: "grafico_update"
          },
          {
            id_card: 9,
            card: "Coboradores por projeto",
            ordem: 7,
            btn_comando: "btn-itens",
            tipo_card: "Lista",
            sub_tipo: "lista-padrao",
            conteudo_card: ["execução 1", "execução 1"]
          }
        ],
        cards_opcionais: [
          {
            id_card: 8,
            card: "Meus projetos",
            ordem: 1,
            icone: "article",
            cor: "orange"
          },
          {
            id_card: 11,
            card: "Atividade de projeto",
            ordem: 2,
            icone: "description",
            cor: "indigo-5"
          },
          {
            id_card: 9,
            card: "Duração por projeto",
            ordem: 3,
            icone: "article",
            cor: "blue-5"
          },
          {
            id_card: 6,
            card: "Agenda",
            ordem: 4,
            icone: "article",
            cor: "primary"
          },
          {
            id_card: 3,
            card: "Projetos atrasadas",
            ordem: 5,
            icone: "folder",
            cor: "cyan-5"
          },
          {
            id_card: 2,
            card: "Gráficos",
            ordem: 6,
            icone: "leaderboard",
            cor: "teal-5"
          },
          {
            id_card: 9,
            card: "Coboradores por projeto",
            ordem: 7,
            icone: "work_outline",
            cor: "green-5"
          }
        ]
      },
      {
        id_grupo: 3,
        grupo: "Estatisticas",
        icone: "assignment_turned_in",
        cards: [
          {
            id_card: 13,
            card: "Revisão de atividades",
            ordem: 1,
            cor_header: "bg-light-blue-1",
            tipo_card: "Grafico",
            sub_tipo: "grafico_update",
            formato_card: "my-card-s-310-380"
          },
          {
            id_card: 14,
            card: "Gráfico de comparação",
            cor_header: "bg-light-blue-2",
            ordem: 2,
            tipo_card: "Grafico",
            sub_tipo: "grafico_linha",
            formato_card: "my-card-s-310-380"
          },
          {
            id_card: 15,
            card: "Gráfico de atividades",
            cor_header: "bg-light-blue-3",
            ordem: 3,
            tipo_card: "Grafico",
            sub_tipo: "grafico_pontos",
            formato_card: "my-card-s-310-380"
          }
        ],
        cards_opcionais: [
          {
            id_card: 13,
            card: "Revisão de atividades",
            ordem: 1,
            icone: "signal_cellular_alt",
            cor: "amber-9"
          },
          {
            id_card: 14,
            card: "Gráfico de comparação",
            ordem: 2,
            icone: "leaderboard",
            cor: "amber-5"
          },
          {
            id_card: 15,
            card: "Gráfico de atividades",
            ordem: 3,
            icone: "auto_graph",
            cor: "brown-8"
          }
        ]
      },
      {
        id_grupo: 4,
        grupo: "Financeiro",
        icone: "paid",
        cards: [
          {
            id_card: 24,
            card: "Atividade Rápida",
            ordem: 1,
            tipo_card: "Input",
            layout_lin_col: [
              {
                heigth: 15,
                colunas: [
                  {
                    width: 100,
                    sub_tipo: "input-padrao",
                    label: "Digite o CPF"
                  }
                ]
              },
              {
                heigth: 15,
                colunas: [
                  {
                    width: 100,
                    sub_tipo: "input-selecao",
                    label: "Modelo",
                    opcao: [
                      "Administrativo",
                      "Desenvolvimento",
                      "Contas",
                      "Comercial",
                      "Projetos"
                    ]
                  }
                ]
              },
              {
                heigth: 15,
                colunas: [
                  {
                    width: 100,
                    sub_tipo: "input-selecao",
                    label: "Tags",
                    opcao: [
                      "Syclus 1.0",
                      "Syclus 2.0",
                      "Manutenção",
                      "Pagamentos",
                      "POP"
                    ]
                  }
                ]
              },
              {
                heigth: 15,
                colunas: [
                  {
                    width: 100,
                    sub_tipo: "input-padrao",
                    label: "Descricao"
                  }
                ]
              },
              {
                heigth: 15,
                colunas: [
                  {
                    width: 50,
                    sub_tipo: "input-selecao",
                    label: "Situação",
                    opcao: [
                      "Administrativo",
                      "Desenvolvimento",
                      "Contas",
                      "Comercial",
                      "Projetos"
                    ]
                  }
                ]
              },
              {
                heigth: 15,
                colunas: [
                  {
                    width: 100,
                    sub_tipo: "input-adicao",
                    label: "Colaborador",
                    opcao: [
                      "Helton",
                      "Henrique",
                      "João Pedro",
                      "João Paulo",
                      "Pedro"
                    ]
                  }
                ]
              },
              {
                heigth: 15,
                colunas: [
                  {
                    width: 100,
                    sub_tipo: "input-btn",
                    label: "Enviar"
                  }
                ]
              }
            ],
            formato_card: "my-card-s-500-304"
          },
          {
            id_card: 21,
            card: "Atividades Fiscais",
            ordem: 2,
            btn_comando: "btn-itens",
            tipo_card: "Lista",
            sub_tipo: "lista-padrao",
            conteudo_card: ["fiscal 1", "fiscal 2"]
          },
          {
            id_card: 20,
            card: "Gráficos de atendimento",
            ordem: 3,
            btn_comando: "btn-filtro",
            tipo_card: "Grafico",
            sub_tipo: "grafico_pontos"
          },
          {
            id_card: 19,
            card: "Pesquisa de cliente",
            ordem: 4,
            tipo_card: "Input",
            layout_lin_col: [
              {
                heigth: 15,
                colunas: [
                  {
                    width: 100,
                    sub_tipo: "input-padrao",
                    label: "Digite o nome ou CNPJ"
                  }
                ]
              },
              {
                heigth: 15,
                colunas: [
                  {
                    width: 100,
                    sub_tipo: "input-selecao",
                    label: "Workflow",
                    opcao: [
                      "Administrativo",
                      "Desenvolvimento",
                      "Contas",
                      "Comercial",
                      "Projetos"
                    ]
                  }
                ]
              },
              {
                heigth: 15,
                colunas: [
                  {
                    width: 100,
                    sub_tipo: "input-btn",
                    label: "Enviar"
                  }
                ]
              }
            ]
          },
          {
            id_card: 18,
            card: "Repasse de atividade",
            ordem: 5,
            btn_comando: "btn-filtro",
            tipo_card: "Secao",
            sub_tipo: "secao-repasse"
          },
          {
            id_card: 23,
            card: "Ultimas atividades",
            ordem: 8,
            tipo_card: "Secao",
            sub_tipo: "secao-padrao"
          },
          {
            id_card: 16,
            card: "Atendimentos",
            ordem: 7,
            btn_comando: "btn-filtro",
            tipo_card: "Grafico",
            sub_tipo: "grafico_padrao"
          },
          {
            id_card: 17,
            card: "Minhas ocorrências",
            ordem: 6,
            btn_comando: "btn-filtro",
            tipo_card: "Secao",
            sub_tipo: "secao-padrao"
          }
        ],
        cards_opcionais: [
          {
            id_card: 22,
            card: "Atividade Rápida",
            ordem: 1,
            icone: "mode_edit",
            cor: "grey-8"
          },
          {
            id_card: 21,
            card: "Atividades Fiscais",
            ordem: 2,
            icone: "monetization_on",
            cor: "blue-grey-8"
          },
          {
            id_card: 20,
            card: "Gráficos de atendimento",
            ordem: 3,
            icone: "show_chart",
            cor: "yellow-12"
          },
          {
            id_card: 19,
            card: "Pesquisa de cliente",
            ordem: 4,
            icone: "query_stats",
            cor: "orange-12"
          },
          {
            id_card: 18,
            card: "Repasse de atividade",
            ordem: 5,
            icone: "sync_alt",
            cor: "light-green-7"
          },
          {
            id_card: 17,
            card: "Minhas ocorrências",
            ordem: 6,
            icone: "task",
            cor: "orange-8"
          },
          {
            id_card: 16,
            card: "Atendimentos",
            ordem: 7,
            icone: "ring_volume",
            cor: "cyan-13"
          },
          {
            id_card: 23,
            card: "Ultimas atividades",
            ordem: 8,
            icone: "drive_file_rename_outline",
            cor: "cyan-9"
          }
        ]
      },
      {
        id_grupo: 5,
        grupo: "Triagem",
        icone: "support_agent",
        cards: [
          {
            id_card: 24,
            card: "Atividade Rápida",
            ordem: 1,
            tipo_card: "Input",
            layout_lin_col: [
              {
                heigth: 15,
                colunas: [
                  {
                    width: 100,
                    sub_tipo: "input-padrao",
                    label: "Digite o CPF"
                  }
                ]
              },
              {
                heigth: 15,
                colunas: [
                  {
                    width: 100,
                    sub_tipo: "input-selecao",
                    label: "Modelo",
                    opcao: [
                      "Administrativo",
                      "Desenvolvimento",
                      "Contas",
                      "Comercial",
                      "Projetos"
                    ]
                  }
                ]
              },
              {
                heigth: 15,
                colunas: [
                  {
                    width: 100,
                    sub_tipo: "input-selecao",
                    label: "Tags",
                    opcao: [
                      "Syclus 1.0",
                      "Syclus 2.0",
                      "Manutenção",
                      "Pagamentos",
                      "POP"
                    ]
                  }
                ]
              },
              {
                heigth: 15,
                colunas: [
                  {
                    width: 100,
                    sub_tipo: "input-padrao",
                    label: "Descricao"
                  }
                ]
              },
              {
                heigth: 15,
                colunas: [
                  {
                    width: 50,
                    sub_tipo: "input-selecao",
                    label: "Situação",
                    opcao: [
                      "Administrativo",
                      "Desenvolvimento",
                      "Contas",
                      "Comercial",
                      "Projetos"
                    ]
                  }
                ]
              },
              {
                heigth: 15,
                colunas: [
                  {
                    width: 100,
                    sub_tipo: "input-adicao",
                    label: "Colaborador",
                    opcao: [
                      "Helton",
                      "Henrique",
                      "João Pedro",
                      "João Paulo",
                      "Pedro"
                    ]
                  }
                ]
              },
              {
                heigth: 15,
                colunas: [
                  {
                    width: 100,
                    sub_tipo: "input-btn",
                    label: "Enviar"
                  }
                ]
              }
            ],
            formato_card: "my-card-s-500-304"
          },
          {
            id_card: 25,
            card: "Notificação cliente",
            ordem: 2,
            btn_comando: "btn-itens",
            tipo_card: "Input",
            layout_lin_col: [
              {
                heigth: 15,
                colunas: [
                  {
                    width: 100,
                    sub_tipo: "input-padrao",
                    label: "CNPJ, CPF, nome"
                  }
                ]
              },
              {
                heigth: 15,
                colunas: [
                  {
                    width: 100,
                    sub_tipo: "input-padrao",
                    label: "Título"
                  }
                ]
              },
              {
                heigth: 15,
                colunas: [
                  {
                    width: 100,
                    sub_tipo: "input-selecao",
                    label: "Modelo",
                    opcao: [
                      "Administrativo",
                      "Desenvolvimento",
                      "Contas",
                      "Comercial",
                      "Projetos"
                    ]
                  }
                ]
              },
              {
                heigth: 15,
                colunas: [
                  {
                    width: 100,
                    sub_tipo: "input-padrao",
                    label: "Link"
                  }
                ]
              },
              {
                heigth: 15,
                colunas: [
                  {
                    width: 100,
                    sub_tipo: "input-padrao",
                    label: "Observações ..."
                  }
                ]
              },
              {
                heigth: 15,
                colunas: [
                  {
                    width: 100,
                    sub_tipo: "input-btn",
                    label: "Enviar"
                  }
                ]
              }
            ],
            formato_card: "my-card-s-500-304"
          },
          {
            id_card: 26,
            card: "Eventos",
            ordem: 3,
            btn_comando: "btn-filtro",
            tipo_card: "Secao",
            sub_tipo: "secao-contexto"
          },
          {
            id_card: 27,
            card: "Encaminhar",
            ordem: 4,
            tipo_card: "Secao",
            sub_tipo: "secao-contexto"
          },
          {
            id_card: 28,
            card: "Cobrança",
            ordem: 5,
            btn_comando: "btn-itens",
            tipo_card: "Secao",
            sub_tipo: "secao-contexto"
          },
          {
            id_card: 29,
            card: "Controle de triagem",
            ordem: 6,
            btn_comando: "btn-filtro",
            tipo_card: "Grafico",
            sub_tipo: "grafico_update"
          }
        ],
        cards_opcionais: [
          {
            id_card: 24,
            card: "Atividade Rápida",
            ordem: 1,
            icone: "mode_edit",
            cor: "grey-8"
          },
          {
            id_card: 25,
            card: "Notificação cliente",
            ordem: 2,
            icone: "notifications",
            cor: "green-6"
          },
          {
            id_card: 26,
            card: "Eventos",
            ordem: 3,
            icone: "event_available",
            cor: "teal-7"
          },
          {
            id_card: 27,
            card: "Encaminhar",
            ordem: 4,
            icone: "sync",
            cor: "orange-8"
          },
          {
            id_card: 18,
            card: "Cobrança",
            ordem: 5,
            icone: "dangerous",
            cor: "red-12"
          },
          {
            id_card: 29,
            card: "Controle de triagem",
            ordem: 6,
            icone: "record_voice_over",
            cor: "light-blue-5"
          }
        ]
      }
    ]
  };
  return json;
}

//area trabalho - padrao
function layoutDashBoard1() {
  const json = {
    id_dashboard: 1,
    dashboard: "layout dashboard 1",
    grupos: [
      {
        grupo: "Atividades",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades do dia",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(dt_previsao as date) = current_date and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(dt_previsao as date) = current_date and a.cd_responsavel = <id_principal> and a.cd_tipo_atividade = <id_grupo>"
            }
          },
          {
            card: "Atividades Atrasadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(dt_previsao as date) < current_date and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(dt_previsao as date) < current_date and a.cd_responsavel = <id_principal> and a.cd_tipo_atividade = <id_grupo>"
            }
          },
          {
            card: "Atividades Futuras",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(dt_previsao as date) > current_date and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(dt_previsao as date) > current_date and a.cd_responsavel = <id_principal> and a.cd_tipo_atividade = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Ocorrências do dia",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorTipoAtividade",
              filtro_sql_grupo:
                "where o.ds_status in ('A', 'F') and cast(o.dt_ocorrencia as date) = (current_date) and o.cd_colaborador = <id_principal>",
              body_item: "",
              filtro_sql_item: ""
            }
          }
        ],
        cards_opcionais: []
      }
    ]
  };

  return json;
}

//cliente - padrao
function layoutDashBoard2() {
  const json = {
    id_dashboard: 1,
    dashboard: "Cliente",
    grupos: [
      {
        id_grupo: 1,
        grupo: "Area Tecnica",
        icone: "assignment_turned_in",
        cards: [
          {
            id_card: 1,
            card: "Tipo Atividade",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "98%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade not in (1,4,6) and a.dt_previsao <= current_date and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade not in (1,4,6) and a.dt_previsao <= current_date and ac.cd_cliente = <id_principal> and a.cd_tipo_atividade = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Responsável",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "32%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade not in (1,4,6) and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade not in (1,4,6) and ac.cd_cliente = <id_principal> and a.cd_responsavel = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Situação",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "32%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade not in (1,4,6) and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade not in (1,4,6) and ac.cd_cliente = <id_principal> and a.cd_situacao = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Workflow",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "32%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade not in (1,4,6) and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade not in (1,4,6) and ac.cd_cliente = <id_principal> and a.cd_workflow = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Tag",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "32%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade not in (1,4,6) and ac.cd_cliente = <id_principal>",
              body_item: "",
              filtro_sql_item: ""
            }
          }
        ],
        cards_opcionais: []
      },
      {
        id_grupo: 2,
        grupo: "Desenvolvimento",
        icone: "assignment_turned_in",
        cards: [
          {
            id_card: 1,
            card: "Tipo Atividade",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "98%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and ac.cd_cliente = <id_principal> and a.cd_tipo_atividade = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Responsável",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "32%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and ac.cd_cliente = <id_principal> and a.cd_responsavel = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Situação",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "32%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and ac.cd_cliente = <id_principal> and a.cd_situacao = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Workflow",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "32%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and ac.cd_cliente = <id_principal> and a.cd_workflow = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Tag",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "32%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and ac.cd_cliente = <id_principal>",
              body_item: "",
              filtro_sql_item: ""
            }
          }
        ],
        cards_opcionais: []
      },
      {
        id_grupo: 3,
        grupo: "Finalizadas",
        icone: "assignment_turned_in",
        cards: [
          {
            id_card: 1,
            card: "Tipo Atividade (30 dias)",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "97%",
            heigth: "600px",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade not in (1,4,6) and a.dt_previsao >= current_date - 30 and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'F' and a.cd_tipo_atividade not in (1,4,6) and a.dt_previsao >= current_date - 30 and ac.cd_cliente = <id_principal> and a.cd_tipo_atividade = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Workflow (30 dias)",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "32%",
            heigth: "600px",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade not in (1,4,6) and a.dt_previsao >= current_date - 30 and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'F' and a.cd_tipo_atividade not in (1,4,6) and a.dt_previsao >= current_date - 30 and ac.cd_cliente = <id_principal> and a.cd_workflow = <id_grupo>"
            }
          }
        ],
        cards_opcionais: []
      },
      {
        id_grupo: 2,
        grupo: "Projetos",
        icone: "assignment_turned_in",
        cards: [
          {
            id_card: 1,
            card: "Projetos Ativos",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "98%",
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoPorTipoProjeto",
              filtro_sql_grupo: `where p.ds_status = 'A' and p.cd_cliente = <id_principal>`,
              body_item: "bodyProjeto",
              filtro_sql_item: `where p.ds_status = 'A' and p.cd_cliente = <id_principal> and p.cd_tipo_projeto = <id_grupo>`
            }
          }
        ],
        cards_opcionais: []
      }
    ]
  };

  return json;
}

//colaborador - padrao
function layoutDashBoard3() {
  const json = {
    id_dashboard: 1,
    dashboard: "Colaborador",
    grupos: [
      {
        id_grupo: 1,
        grupo: "Atividades",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Em Atraso",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_responsavel = <id_principal> and a.cd_tipo_atividade = <id_grupo>"
            }
          },
          {
            card: "Hoje",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_responsavel = <id_principal> and a.cd_tipo_atividade = <id_grupo>"
            }
          },
          {
            card: "Futuro",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) > current_date and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) > current_date and a.cd_responsavel = <id_principal> and a.cd_tipo_atividade = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Cliente",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_responsavel = <id_principal> and ac.cd_cliente = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Tag",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_responsavel = <id_principal> and ag.cd_tag = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Workflow",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_responsavel = <id_principal> and a.cd_workflow = <id_grupo>"
            }
          }
        ],
        cards_opcionais: []
      },
      {
        id_grupo: 2,
        grupo: "Ocorrencias",
        icone: "assignment_turned_in",
        cards: [
          {
            id_card: 1,
            card: "Tipo Atividade (hoje)",
            ordem: 2,
            tipo_card: "CardListaApi",
            btn_comando: "btn-atualizar",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorTipoAtividade",
              filtro_sql_grupo:
                "where o.ds_status in ('A', 'F') and cast(o.dt_ocorrencia as date) = (current_date) and o.cd_colaborador = <id_principal>",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            id_card: 1,
            card: "Workflow (hoje)",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorWorkflow",
              filtro_sql_grupo:
                "where o.ds_status in ('A', 'F') and cast(o.dt_ocorrencia as date) = (current_date) and o.cd_colaborador = <id_principal>",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            id_card: 1,
            card: "Tipo Atividade (semana)",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorTipoAtividade",
              filtro_sql_grupo:
                "where o.ds_status in ('A', 'F') and (extract(week from o.dt_ocorrencia) = extract(week from current_date)) and (extract(year from o.dt_ocorrencia) = extract(year from current_date)) and o.cd_colaborador = <id_principal>",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            id_card: 1,
            card: "Workflow (semana)",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorWorkflow",
              filtro_sql_grupo:
                "where o.ds_status in ('A', 'F') and (extract(week from o.dt_ocorrencia) = extract(week from current_date)) and (extract(year from o.dt_ocorrencia) = extract(year from current_date)) and o.cd_colaborador = <id_principal>",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            id_card: 1,
            card: "Diário",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorData",
              filtro_sql_grupo:
                "where o.ds_status in ('A', 'F') and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from o.dt_ocorrencia) = extract(year from current_date)) and o.cd_colaborador = <id_principal>",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            id_card: 1,
            card: "Semanal",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorSemana",
              filtro_sql_grupo:
                "where o.ds_status in ('A', 'F') and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from o.dt_ocorrencia) = extract(year from current_date)) and o.cd_colaborador = <id_principal>",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            id_card: 1,
            card: "Anual",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorMesAno",
              filtro_sql_grupo:
                "where o.ds_status in ('A', 'F') and (extract(year from o.dt_ocorrencia) = extract(year from current_date)) and o.cd_colaborador = <id_principal>",
              body_item: "",
              filtro_sql_item: ""
            }
          }
        ]
      },
      {
        id_grupo: 2,
        grupo: "Projetos",
        icone: "assignment_turned_in",
        cards: [
          {
            id_card: 1,
            card: "Projetos Ativos",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "98%",
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoPorTipoProjeto",
              filtro_sql_grupo: `where p.ds_status = 'A' and p.cd_responsavel = <id_principal>`,
              body_item: "bodyProjeto",
              filtro_sql_item: `where p.ds_status = 'A' and p.cd_responsavel = <id_principal> and p.cd_tipo_projeto = <id_grupo>`
            }
          }
        ],
        cards_opcionais: []
      },
      {
        id_grupo: 4,
        grupo: "Gráficos",
        icone: "assignment_turned_in",
        cards: [
          {
            id_card: 1,
            card: "Atividades por semana",
            ordem: 1,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_padrao",
            width: "100%",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorTipoAtividade",
              filtro_sql_grupo:
                "where o.ds_status in ('A', 'F') and (extract(week from o.dt_ocorrencia) = extract(week from current_date)) and (extract(weekday from o.dt_ocorrencia) > 0) and o.cd_colaborador = <id_principal>",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            id_card: 2,
            card: "Tipo Atividade (semana)",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorTipoAtividade",
              filtro_sql_grupo:
                "where o.ds_status in ('A', 'F') and (extract(week from o.dt_ocorrencia) = extract(week from current_date)) and (extract(year from o.dt_ocorrencia) = extract(year from current_date)) and o.cd_colaborador = <id_principal>",
              body_item: "",
              filtro_sql_item: ""
            }
          }
        ],
        cards_opcionais: []
      }
    ]
  };

  return json;
}

//area trabalho - gestao area tecnica
function layoutDashBoard4() {
  const json = {
    id_dashboard: 4,
    dashboard: "area de trabalho",
    grupos: [
      {
        id_grupo: 1,
        grupo: "Suporte",
        icone: "description",
        cards: [
          {
            id_card: 1,
            card: "Tipo Atividade",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.dt_previsao <= current_date",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.dt_previsao <= current_date and a.cd_tipo_atividade = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Workflow",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.dt_previsao <= current_date",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.dt_previsao <= current_date and a.cd_workflow = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Responsável",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.dt_previsao <= current_date",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.dt_previsao <= current_date and a.cd_responsavel = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Tag",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.dt_previsao <= current_date",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.dt_previsao <= current_date and and ag.cd_tag = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Cliente",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.dt_previsao <= current_date",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.dt_previsao <= current_date and ac.cd_cliente = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Sem Workflow (90 dias)",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status <> 'C' and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_workflow is null and cast(a.dt_previsao as date) >= (current_date -90)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status <> 'C' and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_workflow is null and cast(a.dt_previsao as date) >= (current_date -90) and a.cd_tipo_atividade = <id_grupo>"
            }
          }
        ],
        cards_opcionais: []
      },
      {
        id_grupo: 2,
        grupo: "Ocorrencias",
        icone: "assignment_turned_in",
        cards: [
          {
            id_card: 1,
            card: "Colaborador (hoje)",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorColaborador",
              filtro_sql_grupo:
                "where o.ds_status <> 'C' and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and o.cd_tipo_ocorrencia = 1 and cast(o.dt_ocorrencia as date) = (current_date)",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            id_card: 1,
            card: "Workflow (hoje)",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorWorkflow",
              filtro_sql_grupo:
                "where o.ds_status <> 'C' and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and o.cd_tipo_ocorrencia = 1 and cast(o.dt_ocorrencia as date) = (current_date)",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            id_card: 1,
            card: "Mês atual (Dia)",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorData",
              filtro_sql_grupo:
                "where o.ds_status <> 'C' and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and o.cd_tipo_ocorrencia = 1 and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from o.dt_ocorrencia) = extract(year from current_date)) ",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            id_card: 1,
            card: "Semana",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorSemana",
              filtro_sql_grupo:
                "where o.ds_status <> 'C' and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and o.cd_tipo_ocorrencia = 1 and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from o.dt_ocorrencia) = extract(year from current_date)) ",
              body_item: "",
              filtro_sql_item: ""
            }
          }
        ]
      }
    ]
  };

  return json;
}

//area trabalho - danilo
function layoutDashBoard5() {
  const json = {
    id_dashboard: 5,
    dashboard: "layout dashboard 5",
    grupos: [
      {
        id_grupo: 1,
        grupo: "teste",
        icone: "signal_cellular_alt",
        cards: []
      }
    ]
  };

  return json;
}

//cliente - cobranca
function layoutDashBoard6() {
  const json = {
    id_dashboard: 6,
    dashboard: "layout dashboard 6",
    grupos: [
      {
        id_grupo: 3,
        grupo: "Cobrança",
        icone: "assignment_turned_in",
        cards: [
          {
            id_card: 1,
            card: "Pendentes",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "47%",
            heigth: "600px",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and ac.cd_cliente = <id_principal> and a.cd_situacao = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Finalizadas",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "47%",
            heigth: "600px",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 6 and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 6 and ac.cd_cliente = <id_principal> and a.cd_situacao = <id_grupo>"
            }
          }
        ],
        cards_opcionais: []
      }
    ]
  };

  return json;
}

//cliente - comercial
function layoutDashBoard7() {
  const json = {
    id_dashboard: 7,
    dashboard: "layout dashboard 7",
    grupos: [
      {
        id_grupo: 3,
        grupo: "Comercial",
        icone: "assignment_turned_in",
        cards: [
          {
            id_card: 1,
            card: "Pendentes",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "47%",
            heigth: "600px",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and ac.cd_cliente = <id_principal> and a.cd_situacao = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Finalizadas",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "47%",
            heigth: "600px",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and ac.cd_cliente = <id_principal> and a.cd_situacao = <id_grupo>"
            }
          }
        ],
        cards_opcionais: []
      }
    ]
  };

  return json;
}
//area trabalho -gestao de projetos
function layoutDashBoard8() {
  const json = {
    id_dashboard: 1,
    dashboard: "Projeto",
    grupos: [
      {
        id_grupo: 1,
        grupo: "Projetos",
        icone: "signal_cellular_alt",
        cards: [
          {
            id_card: 1,
            card: "Projetos Ativos",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "98%",
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoPorTipoProjeto",
              filtro_sql_grupo: `where p.ds_status = 'A'`,
              body_item: "bodyProjeto",
              filtro_sql_item: `where p.ds_status = 'A' and p.cd_tipo_projeto = <id_grupo>`
            }
          },
          {
            id_card: 1,
            card: "Tags",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "98%",
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoPorTag",
              filtro_sql_grupo: "where p.ds_status = 'A'",
              body_item: "",
              filtro_sql_item: `where p.ds_status = 'A' and pg.cd_tag = <id_grupo>`
            }
          },
          {
            id_card: 1,
            card: "Responsavel",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "98%",
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoPorResponsavel",
              filtro_sql_grupo: `where p.ds_status = 'A'`,
              body_item: "bodyProjeto",
              filtro_sql_item: `where p.ds_status = 'A' and p.cd_responsavel = <id_grupo>`
            }
          },
          {
            id_card: 1,
            card: "Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "98%",
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoPorCliente",
              filtro_sql_grupo: `where p.ds_status = 'A'`,
              body_item: "bodyProjeto",
              filtro_sql_item: `where p.ds_status = 'A' and p.cd_cliente = <id_grupo>`
            }
          },
          {
            id_card: 1,
            card: "Tempo Máximo",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "98%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal> and a.cd_tipo_atividade = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Ocorrência por projeto",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "98%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal> and a.cd_tipo_atividade = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Tempo gasto no mês",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "98%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal> and a.cd_tipo_atividade = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "GUT",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "98%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal> and a.cd_tipo_atividade = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Atrasados",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "98%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal> and a.cd_tipo_atividade = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Tipos",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "98%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal> and a.cd_tipo_atividade = <id_grupo>"
            }
          }
        ],
        cards_opcionais: []
      }
    ]
  };

  return json;
}

//area trabalho -gestao de projetos
function layoutDashBoard9() {
  const json = {
    id_dashboard: 1,
    dashboard: "Projeto",
    grupos: [
      {
        id_grupo: 1,
        grupo: "Projetos",
        icone: "signal_cellular_alt",
        cards: [
          {
            id_card: 1,
            card: "Execução",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "47%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePendenteProjeto",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal> and a.cd_tipo_atividade = <id_grupo>"
            }
          },
          {
            id_card: 2,
            card: "Finalizados",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "47%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePendenteProjeto",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal> and a.cd_tipo_atividade = <id_grupo>"
            }
          }
        ],
        cards_opcionais: []
      }
    ]
  };

  return json;
}
