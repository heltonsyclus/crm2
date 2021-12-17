//Retorna IdCliente buscando por: RazaoSocial, NomeFantasia ou CpfCnpj
export function bodyProcuraIdCliente(pValor) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select c.cd_cliente "id_cliente", c.ds_fantasia "nome_fantasia", c.ds_cpf_cnpj "cpf_cnpj" from cliente c where c.ds_status = \'A\' and ((c.ds_razao_social like ('%${pValor}%')) or (c.ds_fantasia like ('%${pValor}%')) or (c.ds_cpf_cnpj like ('${pValor}%')))`
  };

  return body;
}
//Retorna dados do cliente por IdCliente
export function bodyCliente(pIdCliente) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select c.cd_cliente "id_cliente", c.ds_fantasia "nome_fantasia", c.ds_cpf_cnpj "cpf_cnpj" , c.ds_status "status" from cliente c where c.cd_cliente = ${pIdCliente}`
  };

  return body;
}

//Retorna dados do cliente pIdCliente
export function bodyDadosCliente(pIdCliente) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select c.cd_cliente \"id_cliente\", c.ds_razao_social \"razao_social\", c.ds_fantasia \"nome_fantasia\", c.ds_cpf_cnpj \"cpf_cnpj\", ce.ds_endereco_completo \"endereco\", ce.ds_bairro \"bairro\", ce.ds_cidade \"cidade\", ce.ds_uf \"uf\", ce.ds_cep \"cep\", ct.ds_telefone \"telefone\", cm.ds_email \"email\" from cliente c left join proc_cliente_endereco(c.cd_cliente, 'R') ce on (1 = 1) left join proc_cliente_telefone(c.cd_cliente, '') ct on (1 = 1) left join proc_cliente_email(c.cd_cliente, '') cm on (1 = 1) where c.cd_cliente = ${pIdCliente}`
  };
  return body;
}

//Retorna atividades pendente por IdColarador
export function bodyAtividesPendentes(pIdColaborador) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select a.cd_atividade \"id_atividade\", a.ds_atividade \"atividade\", a.dt_previsao \"data_previsao\" from atividade a where a.ds_status = 'E' and a. cd_responsavel = '${pIdColaborador}`
  };

  return body;
}
//Retorna atividades pendente por IdColarador
export function bodyAtividesExecucao(pIdColaborador) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select a.cd_atividade \"id_atividade\", a.ds_atividade \"atividade\", a.dt_previsao \"data_previsao\" from atividade a where a.ds_status = 'P' and a. cd_responsavel = '${pIdColaborador}`
  };

  return body;
}

/*
//Retorna atividades pendentes cliente por IdCliente
export function bodyAtividesPendentesclientes(pIdCliente) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select a.cd_atividade "id_atividade", a.ds_atividade "atividade", a.dt_previsao "data_previsao", tv.ds_tipo_atividade "tipo_atividade" from atividade a inner join tipo_atividade tv on tv.cd_tipo_atividade = a.cd_tipo_atividade inner join atividade_cliente ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade where a.ds_status = \'P\' and a.dt_previsao < current_date and ac.cd_cliente = ${pIdCliente} order by a.dt_previsao`
  };

  return body;
}

//Retorna atividades pendentes (qtde - tipo atividade) pIdCliente
export function bodyAtividesPendentesPorTipo(pIdCliente) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select tv.cd_tipo_atividade "id_tipo_atividade", tv.ds_tipo_atividade "tipo_atividade", count(a.cd_atividade) "qtde_atividade" from atividade a inner join tipo_atividade tv on tv.cd_tipo_atividade = a.cd_tipo_atividade inner join atividade_cliente ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade where a.ds_status = \'P\' and a.dt_previsao < current_date and ac.cd_cliente = ${pIdCliente} group by tv.cd_tipo_atividade, tv.ds_tipo_atividade order by tv.ds_tipo_atividade`
  };

  return body;
}

//Retorna atividades pendentes (qtde - tipo atividade) pIdCliente
export function bodyAtividesPendentesPorClienteTipo(
  pIdCliente,
  pIdTipoAtividade
) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select a.cd_atividade "id_atividade", a.ds_atividade "atividade", a.dt_previsao "data_previsao" from atividade a inner join atividade_cliente ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade where a.ds_status = \'P\' and a.dt_previsao < current_date and ac.cd_cliente = ${pIdCliente} and a.cd_tipo_atividade = ${pIdTipoAtividade} order by a.dt_previsao`
  };

  return body;
}

//Retorna atividades pendentes cliente pIdCliente
export function bodyAtividesPendentesId(pIdCliente, pIdTipoAtividade) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select a.cd_atividade "id_atividade", a.ds_atividade "atividade", a.dt_previsao "data_previsao", tv.ds_tipo_atividade "tipo_atividade" from atividade a inner join tipo_atividade tv on tv.cd_tipo_atividade = a.cd_tipo_atividade inner join atividade_cliente ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade where a.ds_status = \'P\' and a.dt_previsao < current_date and ac.cd_cliente = ${pIdCliente} and a.cd_tipo_atividade = ${pIdTipoAtividade} order by a.dt_previsao`
  };
  return body;
}

//Retorna projetos ativos (tipo <qtde>) pIdCliente
export function bodyProjetosAtivosPorTipo(pIdCliente) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select tp.cd_tipo_projeto "id_tipo_projeto", tp.ds_tipo_projeto "tipo_projeto", count(p.cd_projeto) "qtde_projeto" from projeto p inner join tipo_projeto tp on tp.cd_tipo_projeto = p.cd_tipo_projeto where p.ds_status = \'A\' and p.cd_cliente = ${pIdCliente} group by tp.cd_tipo_projeto, tp.ds_tipo_projeto order by tp.ds_tipo_projeto`
  };
  return body;
}

//Retorna projetos ativos (tipo)
export function bodyProjetosAtivosPorClienteTipo(pIdCliente, pidTipo) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select p.cd_projeto \"id_projeto\", p.ds_projeto \"projeto\", p.dt_previsao \"data_previsao\" from projeto p where p.ds_status = 'A' and p.cd_cliente = ${pIdCliente} and p.cd_tipo_projeto = ${pidTipo} order by p.dt_previsao`
  };
  return body;
}

*/

//Retorna execuções gerais
export function bodyExecucaoGeral() {
  const body = {
    tipo_retorno: "",
    instrucao_sql:
      'select a.cd_atividade "id_atividade", a.ds_atividade "atividade" from atividade a where a.qt_colaborador_ativo > 0'
  };
  return body;
}

/*
export function montaFiltroSql(pInstrucaoSql, pFiltros) {
  let filtroSql = pFiltros;
  console.log("xx>" + filtroSql);

  let instrucao_sql = pInstrucaoSql;
  console.log("xxxx>" + instrucao_sql);

  instrucao_sql = instrucao_sql.replace("<filtros>", filtroSql);
  console.log("xxxxxx>" + instrucao_sql);

  return instrucao_sql;
}
*/

export function montaBody(pInstrucaoSql, pFiltros) {
  if (pFiltros.substr(0, 6) !== "where ") {
    pFiltros = "where (0 = 1)";
  }

  let sql = pInstrucaoSql.replace("<filtros>", pFiltros);

  const body = {
    tipo_retorno: "",
    instrucao_sql: sql
  };

  //this.montaFiltroSql(pInstrucaoSql, pFiltros)
  return body;
}

/* Atividade geral */

export function bodyAtividade(pFiltros) {
  let instrucao_sql =
    'select a.cd_atividade "id_atividade", a.ds_atividade "atividade", a.dt_previsao "data_previsao" from atividade a <filtros> order by a.dt_previsao';

  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

/* Atividade filtro por cliente */

export function bodyAtividadeCliente(pFiltros) {
  let instrucao_sql =
    'select a.cd_atividade "id_atividade", a.ds_atividade "atividade", a.dt_previsao "data_previsao" from atividade a inner join atividade_cliente ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade <filtros> order by a.dt_previsao';

  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

export function bodyAtividadeClientePorTipoAtividade(pFiltros) {
  let instrucao_sql =
    'select tv.cd_tipo_atividade "id_tipo_atividade", tv.ds_tipo_atividade "tipo_atividade", count(a.cd_atividade) "qtde_atividade" from atividade a inner join tipo_atividade tv on tv.cd_tipo_atividade = a.cd_tipo_atividade inner join atividade_cliente ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade <filtros> group by tv.cd_tipo_atividade, tv.ds_tipo_atividade order by tv.ds_tipo_atividade';

  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

export function bodyAtividadeClientePorResponsavel(pFiltros) {
  let instrucao_sql =
    'select cb.cd_colaborador "id_colaborador", cb.ds_colaborador "colaborador", count(a.cd_atividade) "qtde_atividade" from atividade a inner join colaborador cb on cb.cd_colaborador = a.cd_responsavel inner join atividade_cliente ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade <filtros> group by cb.cd_colaborador, cb.ds_colaborador order by cb.ds_colaborador';

  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

export function bodyAtividadeClientePorWorkflow(pFiltros) {
  let instrucao_sql =
    'select wf.cd_workflow "id_workflow", wf.ds_workflow "workflow", count(a.cd_atividade) "qtde_atividade" from atividade a inner join workflow wf on wf.cd_workflow = a.cd_workflow inner join atividade_cliente ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade <filtros> group by wf.cd_workflow, wf.ds_workflow order by wf.ds_workflow';

  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

export function bodyAtividadeClientePorSituacao(pFiltros) {
  let instrucao_sql =
    'select st.cd_situacao "id_situacao", st.ds_situacao "situacao", count(a.cd_atividade) "qtde_atividade" from atividade a inner join situacao st on st.cd_situacao = a.cd_situacao inner join atividade_cliente ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade <filtros> group by st.cd_situacao, st.ds_situacao order by st.ds_situacao';

  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

export function bodyAtividadeClientePorTag(pFiltros) {
  let instrucao_sql =
    'select tg.cd_tag "id_tag", tg.ds_tag "tag", count(a.cd_atividade) "qtde_atividade" from atividade a inner join atividade_cliente ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade inner join atividade_tag atg on atg.cd_empresa = a.cd_empresa and atg.cd_atividade = a.cd_atividade inner join tag tg on tg.cd_tag = atg.cd_tag <filtros> group by tg.cd_tag, tg.ds_tag order by tg.ds_tag';

  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

/* Atividade filtro por interessado */

export function bodyAtividadeInteressado(pFiltros) {
  let instrucao_sql =
    'select cb.cd_colaborador "id_colaborador", cb.ds_colaborador "colaborador", count(a.cd_atividade) "qtde_atividade" from atividade a inner join atividade_colabdorador ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade inner join colaborador cb on cb.cd_colaborador = ac.cd_colaborador <filtros> group by cb.cd_colaborador, cb.ds_colaborador order by cb.ds_colaborador';

  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

/* Atividade filtro por tag */
