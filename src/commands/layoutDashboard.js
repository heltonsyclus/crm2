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
    case 10:
      jLayout = layoutDashBoard10();
      break;
    case 11:
      jLayout = layoutDashBoard11();
      break;
    case 12:
      jLayout = layoutDashBoard12();
      break;
    case 13:
      jLayout = layoutDashBoard13();
      break;
    case 14:
      jLayout = layoutDashBoard14();
      break;
    case 15:
      jLayout = layoutDashBoard15();
      break;
    case 16:
      jLayout = layoutDashBoard16();
      break;
    case 17:
      jLayout = layoutDashBoard17();
      break;
    case 18:
      jLayout = layoutDashBoard18();
      break;
    case 19:
      jLayout = layoutDashBoard19();
      break;
    case 20:
      jLayout = layoutDashBoard20();
      break;
  }

  return jLayout;
}

//area trabalho - padrao
function layoutDashBoard1() {
  const json = {
    id_dashboard: 1,
    dashboard: "layout dashboard 1",
    grupos: [
      {
        grupo: "Meu Dia",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Planejamento",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status in ('P', 'F') and cast(dt_previsao as date) = current_date and a.cd_responsavel = <id_principal>",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            card: "Pendente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
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
            card: "Distribuição do Tempo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
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
            card: "Notificações",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "62vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyNotificacaoPorTipoAtividade",
              filtro_sql_grupo:
                "where n.ds_status = 'P' and n.cd_colaborador = <id_principal>",
              body_item: "bodyNotificacaoPorAtividade",
              filtro_sql_item:
                "where n.ds_status = 'P' and n.cd_colaborador = <id_principal> and a.cd_tipo_atividade = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Ocorrências",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorTipoAtividade",
              filtro_sql_grupo:
                "where o.ds_status in ('A', 'F') and cast(o.dt_ocorrencia as date) = (current_date -1) and o.cd_colaborador = <id_principal>",
              body_item: "",
              filtro_sql_item: ""
            }
          }
        ],
        cards_opcionais: []
      },
      {
        grupo: "Atividades",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atrasadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31VW",
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
            card: "Futuras",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
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
            card: "Interessado",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeColaboradorPorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) > current_date and acb.cd_colaborador = <id_principal>",
              body_item: "bodyAtividadeColaborador",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) > current_date and acb.cd_colaborador = <id_principal> and a.cd_tipo_atividade = <id_grupo>"
            }
          },
          {
            card: "Atrasadas (Previsão)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(dt_previsao as date) < current_date and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(dt_previsao as date) < current_date and a.cd_responsavel = <id_principal> and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))"
            }
          },
          {
            card: "Futuras (Previsão)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(dt_previsao as date) > current_date and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(dt_previsao as date) > current_date and a.cd_responsavel = <id_principal> and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))"
            }
          }
        ]
      },
      {
        grupo: "Projetos",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "47VW",
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoPorTipoProjeto",
              filtro_sql_grupo:
                "where p.ds_status = 'A' and p.cd_responsavel = <id_principal>",
              body_item: "bodyProjeto",
              filtro_sql_item:
                "where p.ds_status = 'A' and p.cd_responsavel = <id_principal> and p.cd_tipo_projeto = <id_grupo>"
            }
          },
          {
            card: "Interessado",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "47VW",
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoColaboradorPorTipoProjeto",
              filtro_sql_grupo:
                "where p.ds_status = 'A' and pcb.cd_colaborador = <id_principal>",
              body_item: "bodyProjetoColaborador",
              filtro_sql_item:
                "where p.ds_status = 'A' and pcb.cd_colaborador = <id_principal> and p.cd_tipo_projeto = <id_grupo>"
            }
          }
        ]
      },
      {
        grupo: "Estatísticas",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(dt_previsao as date) <= current_date and a.cd_responsavel = <id_principal>",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            card: "Distribuição do Tempo (Mês Atual)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorTipoAtividade",
              filtro_sql_grupo:
                "where o.ds_status in ('A', 'F') and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from o.dt_ocorrencia) = extract(year from current_date)) and o.cd_colaborador = <id_principal>",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            card: "Ocorrências (Mês Atual)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "23vw",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorData",
              filtro_sql_grupo:
                "where o.ds_status in ('A', 'F') and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from o.dt_ocorrencia) = extract(year from current_date)) and o.cd_colaborador = <id_principal>",
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
            width: "32%",
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
            tipo_card: "CardListaApi",
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
            width: "32%",
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
            tipo_card: "CardListaApi",
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
            card: "Tipo Atividade (30 dias)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "47%",
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
            width: "50%",
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
            width: "23vw",
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
            width: "23vw",
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
            width: "23vw",
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
            width: "23vw",
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
            width: "23vw",
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
            width: "23vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_responsavel = <id_principal> and a.cd_workflow = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Finalizadas (Hoje)",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "23vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and cast(a.dt_previsao as date) = (current_date) and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'F' and cast(a.dt_previsao as date) = (current_date) and a.cd_responsavel = <id_principal> and a.cd_workflow = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Finalizadas (Ate 7 dias)",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "23vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and cast(a.dt_previsao as date) between (current_date -7) and (current_date -1) and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'F' and cast(a.dt_previsao as date) between (current_date -7) and (current_date -1) and a.cd_responsavel = <id_principal> and a.cd_workflow = <id_grupo>"
            }
          },
          {
            id_card: 1,
            card: "Notificacoes",
            ordem: 2,
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "23vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyNotificacaoPorTipoAtividade",
              filtro_sql_grupo:
                "where n.ds_status = 'P' and n.cd_colaborador = <id_principal>",
              body_item: "",
              filtro_sql_item: ""
            }
          }
        ],
        cards_opcionais: []
      },
      {
        id_grupo: 2,
        grupo: "Ocorrências",
        icone: "assignment_turned_in",
        cards: [
          {
            id_card: 1,
            card: "Tipo Atividade (hoje)",
            ordem: 2,
            tipo_card: "CardListaApi",
            btn_comando: "btn-atualizar",
            width: "23vw",
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
            width: "23vw",
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
            width: "23vw",
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
            width: "23vw",
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
            card: "Diário",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "23vw",
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
            width: "23vw",
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
            width: "70vw",
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
            width: "70vw",
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
            sub_tipo: "grafico_barra",
            width: "35vw",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorTipoAtividade",
              filtro_sql_grupo:
                "where o.ds_status in ('A', 'F') and (extract(week from o.dt_ocorrencia) = extract(week from current_date)) and (extract(weekday from o.dt_ocorrencia) > 0) and o.cd_colaborador = <id_principal>",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            card: "Atividade atrasadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "35vw",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_responsavel = <id_principal> and a.cd_tipo_atividade = <id_grupo>"
            }
          }
        ],
        cards_opcionais: []
      },
      {
        id_grupo: 5,
        grupo: "Tempo",
        icone: "assignment_turned_in",
        cards: [
          {
            id_card: 1,
            card: "Workflow",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "35vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item: ""
            }
          },
          {
            id_card: 2,
            card: "últimas atividades(30 dias)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "35vw",
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
//bi - area tecnica (corrente)
function layoutDashBoard4() {
  const json = {
    id_dashboard: 4,
    dashboard: "bi - area tecnica (corrente)",
    grupos: [
      {
        grupo: "Geral",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28)",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            card: "Em Execução",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "62vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.qt_colaborador_ativo > 0",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.qt_colaborador_ativo > 0 and a.cd_situacao = <id_grupo>"
            }
          },
          {
            card: "Situação",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_situacao = <id_grupo>"
            }
          },
          {
            card: "Tag",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and ag.cd_tag = <id_grupo>"
            }
          },
          {
            card: "Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28)",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and ac.cd_cliente = <id_grupo>"
            }
          }
        ]
      },
      {
        grupo: "Responsável",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades Previstas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status in ('P', 'F') and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28)",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            card: "Atividades Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_responsavel = <id_grupo>"
            }
          },
          {
            card: "Ocorrências",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorColaborador",
              filtro_sql_grupo:
                "where o.ds_status <> 'C' and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and o.cd_tipo_ocorrencia = 1",
              body_item: "",
              filtro_sql_item: ""
            }
          }
        ]
      },
      {
        grupo: "Tipo",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades Previstas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status in ('P', 'F') and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28)",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            card: "Atividades Pendentes ",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_tipo_atividade = <id_grupo>"
            }
          },
          {
            card: "Ocorrências",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorTipoAtividade",
              filtro_sql_grupo:
                "where o.ds_status <> 'C' and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and o.cd_tipo_ocorrencia = 1",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            card: "Atividades Criadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status in ('P', 'F') and cast(a.dt_emissao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28)",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            card: "Atividades Finalizadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28)",
              body_item: "",
              filtro_sql_item: ""
            }
          }
        ]
      },
      {
        grupo: "Workflow",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades Previstas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyAtividadePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status in ('P', 'F') and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28)",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            card: "Atividades Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_workflow = <id_grupo>"
            }
          },
          {
            card: "Ocorrências",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorWorkflow",
              filtro_sql_grupo:
                "where o.ds_status <> 'C' and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and o.cd_tipo_ocorrencia = 1",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            card: "Atividades Criadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyAtividadePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status in ('P', 'F') and cast(a.dt_emissao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28)",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            card: "Atividades Finalizadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyAtividadePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28)",
              body_item: "",
              filtro_sql_item: ""
            }
          }
        ]
      },
      {
        grupo: "Area 1",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades Previstas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status in ('P', 'F') and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_workflow = 35",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            card: "Atividades Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_workflow = 35",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_workflow = 35 and a.cd_responsavel = <id_grupo>"
            }
          },
          {
            card: "Ocorrências",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorColaborador",
              filtro_sql_grupo:
                "where o.ds_status <> 'C' and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_workflow = 35 and o.cd_tipo_ocorrencia = 1",
              body_item: "",
              filtro_sql_item: ""
            }
          }
        ]
      },
      {
        grupo: "Area 2",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades Previstas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status in ('P', 'F') and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_workflow = 36",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            card: "Atividades Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_workflow = 36",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_workflow = 36 and a.cd_responsavel = <id_grupo>"
            }
          },
          {
            card: "Ocorrências",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorColaborador",
              filtro_sql_grupo:
                "where o.ds_status <> 'C' and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_workflow = 36 and o.cd_tipo_ocorrencia = 1",
              body_item: "",
              filtro_sql_item: ""
            }
          }
        ]
      },
      {
        grupo: "Area 3",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades Previstas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status in ('P', 'F') and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_workflow = 37",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            card: "Atividades Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_workflow = 37",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_workflow = 37 and a.cd_responsavel = <id_grupo>"
            }
          },
          {
            card: "Ocorrências",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorColaborador",
              filtro_sql_grupo:
                "where o.ds_status <> 'C' and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_workflow = 37 and o.cd_tipo_ocorrencia = 1",
              body_item: "",
              filtro_sql_item: ""
            }
          }
        ]
      },
      {
        grupo: "Area 4",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades Previstas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status in ('P', 'F') and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_workflow = 38",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            card: "Atividades Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_workflow = 38",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_workflow = 38 and a.cd_responsavel = <id_grupo>"
            }
          },
          {
            card: "Ocorrências",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorColaborador",
              filtro_sql_grupo:
                "where o.ds_status <> 'C' and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_workflow = 38 and o.cd_tipo_ocorrencia = 1",
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
        grupo: "Geral",
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
        grupo: "Cobrança",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Pendentes",
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
            card: "Finalizadas",
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
//bi - projetos
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
            width: "31vw",
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
            width: "31vw",
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
            width: "31vw",
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
            tipo_card: "CardEmpresaApi",
            width: "31vw",
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
            width: "31vw",
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
            width: "31vw",
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
            width: "31vw",
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
            width: "31vw",
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
            width: "31vw",
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
            width: "31vw",
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
//bi - gestao projetos
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
            width: "31vw",
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
            width: "31vw",
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
//notificacao - período
function layoutDashBoard10() {
  const json = {
    id_dashboard: 1,
    dashboard: "Notificacao-periodo",
    grupos: [
      {
        id_grupo: 1,
        grupo: "Geral",
        icone: "event",
        cards: [
          {
            id_card: 1,
            ordem: 2,
            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyNotificacaoPorTipoAtividade",
              filtro_sql_grupo:
                "where n.ds_status = 'P' and n.cd_colaborador = <id_principal>",
              body_item: "bodyNotificacaoPorAtividade",
              filtro_sql_item:
                "where n.ds_status = 'P' and n.cd_colaborador = <id_principal>"
            }
          }
        ],
        cards_opcionais: []
      },
      {
        id_grupo: 1,
        grupo: "teste",
        icone: "event",
        cards: [
          {
            id_card: 1,
            ordem: 2,
            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyNotificacao",
              filtro_sql_grupo: "where n.ds_status = 'P'",
              body_item: "",
              filtro_sql_item: " "
            }
          }
        ],
        cards_opcionais: []
      }
    ]
  };

  return json;
}
//notificacao - tipo
function layoutDashBoard11() {
  const json = {
    id_dashboard: 1,
    dashboard: "Notificacao-tipo",
    grupos: [
      {
        id_grupo: 1,
        grupo: "Geral",
        icone: "event",
        cards: [
          {
            id_card: 1,
            card: "Exemplo aleatorio",
            ordem: 2,
            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: [
              {
                nomeUsuario: "usuario",
                acao: "parou de executar a atividade.",
                icon: "pause",
                time: "Há 2 minutos"
              },
              {
                nomeUsuario: "usuario",
                acao: "alterou a previsão para: 25 de Janeiro de 2022.",
                icon: "event",
                time: "Há 2 minutos"
              },
              {
                nomeUsuario: "usuario",
                acao: "Texto representando uma ocorrência",
                icon: "question_answer",
                time: "Há 2 minutos"
              },
              {
                nomeUsuario: "usuario",
                acao: "iniciou a execução da atividade.",
                icon: "play_arrow",
                time: "Há 2 minutos"
              }
            ]
          },
          {
            id_card: 1,
            card: "Exemplo aleatorio2",
            ordem: 2,
            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: [
              {
                nomeUsuario: "usuario",
                acao: "iniciou a execução da atividade.",
                icon: "play_arrow",
                time: "Há 2 minutos"
              }
            ]
          },
          {
            id_card: 1,
            card: "Exemplo aleatorio",
            ordem: 2,
            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: [
              {
                nomeUsuario: "usuario",
                acao: "parou de executar a atividade.",
                icon: "pause",
                time: "Há 2 minutos"
              },
              {
                nomeUsuario: "usuario",
                acao: "alterou a previsão para: 25 de Janeiro de 2022.",
                icon: "event",
                time: "Há 2 minutos"
              },
              {
                nomeUsuario: "usuario",
                acao: "Texto representando uma ocorrência",
                icon: "question_answer",
                time: "Há 2 minutos"
              },
              {
                nomeUsuario: "usuario",
                acao: "iniciou a execução da atividade.",
                icon: "play_arrow",
                time: "Há 2 minutos"
              }
            ]
          },
          {
            id_card: 1,
            card: "Exemplo aleatorio2",
            ordem: 2,
            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: [
              {
                nomeUsuario: "usuario",
                acao: "iniciou a execução da atividade.",
                icon: "play_arrow",
                time: "Há 2 minutos"
              }
            ]
          },
          {
            id_card: 1,
            card: "Exemplo aleatorio",
            ordem: 2,
            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: [
              {
                nomeUsuario: "usuario",
                acao: "parou de executar a atividade.",
                icon: "pause",
                time: "Há 2 minutos"
              },
              {
                nomeUsuario: "usuario",
                acao: "alterou a previsão para: 25 de Janeiro de 2022.",
                icon: "event",
                time: "Há 2 minutos"
              },
              {
                nomeUsuario: "usuario",
                acao: "Texto representando uma ocorrência",
                icon: "question_answer",
                time: "Há 2 minutos"
              },
              {
                nomeUsuario: "usuario",
                acao: "iniciou a execução da atividade.",
                icon: "play_arrow",
                time: "Há 2 minutos"
              }
            ]
          },
          {
            id_card: 1,
            card: "Exemplo aleatorio2",
            ordem: 2,
            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: [
              {
                nomeUsuario: "usuario",
                acao: "iniciou a execução da atividade.",
                icon: "play_arrow",
                time: "Há 2 minutos"
              }
            ]
          }
        ],
        cards_opcionais: []
      },
      {
        id_grupo: 1,
        grupo: "Administrativo",
        icone: "event",
        cards: [
          {
            id_card: 1,
            card: "Exemplo Administrativo",
            ordem: 2,
            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: [
              {
                nomeUsuario: "usuario",
                acao: "parou de executar a atividade.",
                icon: "pause",
                time: "Há 2 minutos"
              },
              {
                nomeUsuario: "usuario",
                acao: "Texto representando uma ocorrência",
                icon: "question_answer",
                time: "Há 2 minutos"
              },
              {
                nomeUsuario: "usuario",
                acao: "iniciou a execução da atividade.",
                icon: "play_arrow",
                time: "Há 2 minutos"
              }
            ]
          }
        ],
        cards_opcionais: []
      },
      {
        id_grupo: 2,
        grupo: "Analise Tecnica",
        icone: "event",
        cards: [
          {
            id_card: 1,
            card: "Analise Tecnica",
            ordem: 2,
            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: [
              {
                nomeUsuario: "usuario",
                acao: "Texto representando uma ocorrência",
                icon: "question_answer",
                time: "Há 2 minutos"
              },
              {
                nomeUsuario: "usuario",
                acao: "iniciou a execução da atividade.",
                icon: "play_arrow",
                time: "Há 2 minutos"
              }
            ]
          }
        ],
        cards_opcionais: []
      },
      {
        id_grupo: 3,
        grupo: "Desenvolvimento",
        icone: "event",
        cards: [
          {
            id_card: 1,
            card: "Exemplo aleatorio",
            ordem: 2,
            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: [
              {
                nomeUsuario: "usuario",
                acao: "parou de executar a atividade.",
                icon: "pause",
                time: "Há 2 minutos"
              },
              {
                nomeUsuario: "usuario",
                acao: "alterou a previsão para: 25 de Janeiro de 2022.",
                icon: "event",
                time: "Há 2 minutos"
              }
            ]
          }
        ],
        cards_opcionais: []
      },
      {
        id_grupo: 3,
        grupo: "Gerais",
        icone: "event",
        cards: [
          {
            id_card: 1,
            card: "Exemplo aleatorio",
            ordem: 2,
            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: [
              {
                nomeUsuario: "usuario",
                acao: "parou de executar a atividade.",
                icon: "pause",
                time: "Há 2 minutos"
              },
              {
                nomeUsuario: "usuario",
                acao: "alterou a previsão para: 25 de Janeiro de 2022.",
                icon: "event",
                time: "Há 2 minutos"
              }
            ]
          }
        ],
        cards_opcionais: []
      }
    ]
  };

  return json;
}
//bi - desenvolvimento
function layoutDashBoard12() {
  const json = {
    id_dashboard: 1,
    dashboard: "bi - desenvolvimeto",
    grupos: [
      {
        grupo: "Geral",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Previsão da Semana",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status in ('P', 'F') and extract(week from dt_previsao) = extract(week from current_date) and a.cd_tipo_atividade in (4) and a.cd_situacao in (63, 64, 65, 66, 69, 70, 106)",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            card: "Situação",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao in (63, 64, 65, 66, 69, 70, 106)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = <id_grupo>"
            }
          },
          {
            card: "Projetos  Ativos",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoPorTag",
              filtro_sql_grupo:
                "where p.ds_status = 'A' and p.cd_tipo_projeto in (12) and pg.cd_tag in (13, 15, 16, 110, 113, 183, 258)",
              body_item: "bodyProjetoTag",
              filtro_sql_item:
                "where p.ds_status = 'A' and p.cd_tipo_projeto in (12) and ptg.cd_tag = <id_grupo>"
            }
          }
        ]
      },
      {
        grupo: "Solicitações",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Sem Análise",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 63",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 63 and ac.cd_cliente = <id_grupo>"
            }
          },
          {
            card: "Em Análise",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 64",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 64 and ac.cd_cliente = <id_grupo>"
            }
          },
          {
            card: "Reprovadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 66",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 66 and ac.cd_cliente = <id_grupo>"
            }
          },
          {
            card: "Previsao (Sem Analise)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 63",
              body_item: "bodyAtividade",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 63 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`
            }
          },
          {
            card: "Previsao (Em Analise)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 64",
              body_item: "bodyAtividade",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 64 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`
            }
          }
        ],
        cards_opcionais: []
      },
      {
        grupo: "Aprovadas",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65 and ac.cd_cliente = <id_grupo>"
            }
          },
          {
            card: "Tag",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65 and ag.cd_tag not in (13, 15, 16, 110, 113, 183, 258, 260, 261, 262)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65 and ag.cd_tag = <id_grupo>"
            }
          },
          {
            card: "Previsao",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorMesAno",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65",
              body_item: "bodyAtividade",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65 and (extract(year from a.dt_previsao)||lpad(extract(month from a.dt_previsao), 2, '0')) = <id_grupo>`
            }
          },
          {
            card: "Dificuldade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65 and ag.cd_tag in (260, 261, 262)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65 and ag.cd_tag = <id_grupo>"
            }
          },
          {
            card: "Aplicativo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65 and ag.cd_tag in (13, 15, 16, 110, 113, 183, 258)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65 and ag.cd_tag = <id_grupo>"
            }
          },
          {
            card: "GUT",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorGut",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65 and a.vl_gut = <id_grupo>"
            }
          }
        ]
      },
      {
        grupo: "Planejamento",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67 and ac.cd_cliente = <id_grupo>"
            }
          },
          {
            card: "Tag",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67 and ag.cd_tag not in (13, 15, 16, 110, 113, 183, 258, 260, 261, 262)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67 and ag.cd_tag = <id_grupo>"
            }
          },
          {
            card: "Previsao",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorMesAno",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67",
              body_item: "bodyAtividade",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67 and (extract(year from a.dt_previsao)||lpad(extract(month from a.dt_previsao), 2, '0')) = <id_grupo>`
            }
          },
          {
            card: "Dificuldade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67 and ag.cd_tag in (260, 261, 262)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67 and ag.cd_tag = <id_grupo>"
            }
          },
          {
            card: "Aplicativo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67 and ag.cd_tag in (13, 15, 16, 110, 113, 183, 258)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67 and ag.cd_tag = <id_grupo>"
            }
          },
          {
            card: "GUT",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorGut",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67 and a.vl_gut = <id_grupo>"
            }
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67 and a.cd_responsavel = <id_grupo>"
            }
          }
        ]
      },
      {
        grupo: "Desenvolvimento",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 106",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 106 and ac.cd_cliente = <id_grupo>"
            }
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 106",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 106 and a.cd_responsavel = <id_grupo>"
            }
          },
          {
            card: "Previsao",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 106",
              body_item: "bodyAtividade",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 106 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`
            }
          }
        ]
      },
      {
        grupo: "Beta",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 70",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 70 and ac.cd_cliente = <id_grupo>"
            }
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 70",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 70 and a.cd_responsavel = <id_grupo>"
            }
          },
          {
            card: "Previsao",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 70",
              body_item: "bodyAtividade",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 70 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`
            }
          }
        ]
      },
      {
        grupo: "Final",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 69",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 69 and ac.cd_cliente = <id_grupo>"
            }
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 69",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 69 and a.cd_responsavel = <id_grupo>"
            }
          },
          {
            card: "Previsao",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 69",
              body_item: "bodyAtividade",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 69 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`
            }
          }
        ]
      },
      {
        grupo: "Entregas",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (4) and cast(a.dt_previsao as date) >= (current_date -60)",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (4) and cast(a.dt_previsao as date) >= (current_date -60) and ac.cd_cliente = <id_grupo>"
            }
          },
          {
            card: "Data",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (4) and cast(a.dt_previsao as date) >= (current_date -60)",
              body_item: "bodyAtividade",
              filtro_sql_item: `where a.ds_status = 'F' and a.cd_tipo_atividade in (4) and cast(a.dt_previsao as date) >= (current_date -60) and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`
            }
          }
        ]
      },
      {
        grupo: "Versões",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Syclus ERP 1.0",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoTagPorMesAno",
              filtro_sql_grupo: `where p.ds_status in ('A', 'F') and p.cd_tipo_projeto in (12) and ptg.cd_tag in (15)`,
              body_item: "bodyProjetoTag",
              filtro_sql_item: `where p.ds_status in ('A', 'F') and p.cd_tipo_projeto in (12) and ptg.cd_tag in (15) and (extract(year from p.dt_previsao)||lpad(extract(month from p.dt_previsao), 2, '0')) = <id_grupo>`
            }
          },
          {
            card: "Syclus API",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoTagPorMesAno",
              filtro_sql_grupo: `where p.ds_status in ('A', 'F') and p.cd_tipo_projeto in (12) and ptg.cd_tag in (16)`,
              body_item: "bodyProjetoTag",
              filtro_sql_item: `where p.ds_status in ('A', 'F') and p.cd_tipo_projeto in (12) and ptg.cd_tag in (16) and (extract(year from p.dt_previsao)||lpad(extract(month from p.dt_previsao), 2, '0')) = <id_grupo>`
            }
          },
          {
            card: "Syclus Tarefas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoTagPorMesAno",
              filtro_sql_grupo: `where p.ds_status in ('A', 'F') and p.cd_tipo_projeto in (12) and ptg.cd_tag in (183)`,
              body_item: "bodyProjetoTag",
              filtro_sql_item: `where p.ds_status in ('A', 'F') and p.cd_tipo_projeto in (12) and ptg.cd_tag in (183) and (extract(year from p.dt_previsao)||lpad(extract(month from p.dt_previsao), 2, '0')) = <id_grupo>`
            }
          }
        ]
      }
    ]
  };

  return json;
}
//bi - area tecnica gestao
function layoutDashBoard13() {
  const json = {
    id_dashboard: 13,
    dashboard: "area tecnica gestao",
    grupos: [
      {
        grupo: "Atrasadas",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28)",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            card: "Workflow",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_workflow = <id_grupo>"
            }
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_responsavel = <id_grupo>"
            }
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))"
            }
          },
          {
            card: "Situação",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and a.cd_situacao = <id_grupo>"
            }
          },
          {
            card: "Tag",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and ag.cd_tag = <id_grupo>"
            }
          },
          {
            card: "Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28)",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,15,18,19,20,27,28) and ac.cd_cliente = <id_grupo>"
            }
          }
        ]
      },
      {
        grupo: "Atividades",
        icone: "description",
        cards: [
          {
            card: "Tipo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
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
            tipo_card: "CardGrupoApi",
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
            tipo_card: "CardGrupoApi",
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
          }
        ],
        cards_opcionais: []
      },
      {
        id_grupo: 2,
        grupo: "Ocorrências",
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
            card: "Workflow (hoje)",
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
      },
      {
        grupo: "Estatísticas",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades criadas no Mês (Total)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyAtividadePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status in ('P', 'F') and (extract(week from a.dt_emissao) = extract(week from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date)) and a.cd_tipo_atividade in (2,15,18,19,20,27,28)",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            card: "Atividades criadas no Mês (Pendente)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyAtividadePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status in ('P') and (extract(week from a.dt_emissao) = extract(week from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date)) and a.cd_tipo_atividade in (2,15,18,19,20,27,28)",
              body_item: "",
              filtro_sql_item: ""
            }
          }
        ]
      },
      {
        grupo: "Acompanhamentos",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades Sem Workflow (90 dias)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
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
        ]
      }
    ]
  };

  return json;
}
//bi - cobranca
function layoutDashBoard14() {
  const json = {
    id_dashboard: 5,
    dashboard: "Cobrança",
    grupos: [
      {
        grupo: "Geral",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Atividades",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            card: "Situação",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = <id_grupo>"
            }
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_responsavel = <id_grupo>"
            }
          }
        ]
      },
      {
        grupo: "Corrente",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Clientes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 85",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 85 and ac.cd_cliente = <id_grupo>"
            }
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 85",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 85 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))"
            }
          }
        ]
      },
      {
        grupo: "Moderada",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Clientes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 111",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 111 and ac.cd_cliente = <id_grupo>"
            }
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 111",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 111 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))"
            }
          }
        ]
      },
      {
        grupo: "Intensiva",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Clientes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 86",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 86 and ac.cd_cliente = <id_grupo>"
            }
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 86",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 86 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))"
            }
          }
        ]
      },
      {
        grupo: "Acordos",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Clientes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 87",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 87 and ac.cd_cliente = <id_grupo>"
            }
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 87",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 87 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))"
            }
          }
        ]
      },
      {
        grupo: "Estatísticas",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Finalizadas no Mês",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 6 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 6 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date) and ac.cd_cliente = <id_grupo>"
            }
          }
        ]
      }
    ]
  };

  return json;
}
//bi - comercial
function layoutDashBoard15() {
  const json = {
    id_dashboard: 5,
    dashboard: "Comercial",
    grupos: [
      {
        grupo: "Geral",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Atividades",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1",
              body_item: "",
              filtro_sql_item: ""
            }
          },
          {
            card: "Situação",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = <id_grupo>"
            }
          },
          {
            card: "Previsão da semana",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and extract(week from a.dt_previsao) = extract(week from current_date)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))"
            }
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_responsavel = <id_grupo>"
            }
          }
        ]
      },
      {
        grupo: "Oportunidade",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Clientes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 4",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 4 and ac.cd_cliente = <id_grupo>"
            }
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 4",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 4 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))"
            }
          }
        ]
      },
      {
        grupo: "Proposta",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Clientes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 20",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 20 and ac.cd_cliente = <id_grupo>"
            }
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 20",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 20 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))"
            }
          }
        ]
      },
      {
        grupo: "Negociação",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Clientes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 22",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 22 and ac.cd_cliente = <id_grupo>"
            }
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 22",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 22 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))"
            }
          }
        ]
      },
      {
        grupo: "Faturamento",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Clientes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 82",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 82 and ac.cd_cliente = <id_grupo>"
            }
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 82",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 82 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))"
            }
          }
        ]
      },
      {
        grupo: "Estatísticas",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Finalizadas no Mês",
            btn_comando: "btn-atualizar",
            tipo_card: "CardEmpresaApi",
            width: "31vw",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date) and ac.cd_cliente = <id_grupo>"
            }
          }
        ]
      }
    ]
  };

  return json;
}
