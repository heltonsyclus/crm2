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
    instrucao_sql: `select c.cd_cliente "id_cliente", c.ds_fantasia "nome_fantasia", c.ds_cpf_cnpj "cpf_cnpj", c.ds_status "status" from cliente c where c.cd_cliente = ${pIdCliente}`
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

//Retorna execuções gerais
export function bodyExecucaoGeral() {
  const body = {
    tipo_retorno: "",
    instrucao_sql:
      'select a.cd_atividade "id_atividade", a.ds_atividade "atividade" from atividade a where a.qt_colaborador_ativo > 0'
  };
  return body;
}

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

//----------------------atividade ----------------------//

export function bodyAtividade(pFiltros) {
  let instrucao_sql =
    'select a.cd_atividade "id_atividade", a.ds_atividade "atividade", a.dt_previsao "data_previsao" from atividade a <filtros> order by a.dt_previsao';

  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

export function bodyAtividadePorTipoAtividade(pFiltros) {
  let instrucao_sql =
    'select tv.cd_tipo_atividade "id_tipo_atividade", tv.ds_tipo_atividade "tipo_atividade", count(a.cd_atividade) "qtde_atividade" from atividade a inner join tipo_atividade tv on tv.cd_tipo_atividade = a.cd_tipo_atividade <filtros> group by tv.cd_tipo_atividade, tv.ds_tipo_atividade order by tv.ds_tipo_atividade';

  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

export function bodyAtividadePorResponsavel(pFiltros) {
  let instrucao_sql =
    'select cb.cd_colaborador "id_colaborador", cb.ds_colaborador "colaborador", count(a.cd_atividade) "qtde_atividade" from atividade a inner join colaborador cb on cb.cd_colaborador = a.cd_responsavel inner join atividade_cliente ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade <filtros> group by cb.cd_colaborador, cb.ds_colaborador order by cb.ds_colaborador';

  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

export function bodyAtividadePorCliente(pFiltros) {
  let instrucao_sql =
    'select cl.cd_cliente "id_cliente", cl.ds_fantasia "cliente", count(a.cd_atividade) "qtde_atividade" from atividade a inner join atividade_cliente ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade inner join cliente cl on cl.cd_cliente = ac.cd_cliente <filtros> group by cl.cd_cliente, cl.ds_fantasia order by cl.ds_fantasia';

  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

export function bodyAtividadePorWorkflow(pFiltros) {
  let instrucao_sql =
    'select wf.cd_workflow "id_workflow", wf.ds_workflow "workflow", count(a.cd_atividade) "qtde_atividade" from atividade a inner join workflow wf on wf.cd_workflow = a.cd_workflow <filtros> group by wf.cd_workflow, wf.ds_workflow order by wf.ds_workflow';

  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

export function bodyAtividadePorTag(pFiltros) {
  let instrucao_sql =
    'select tg.cd_tag "id_tag", tg.ds_tag "tag", count(a.cd_atividade) "qtde_atividade" from atividade a inner join atividade_tag ag on ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade inner join tag tg on tg.cd_tag = ag.cd_tag <filtros> group by tg.cd_tag, tg.ds_tag order by tg.ds_tag';

  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

//----------------------atividade tag ----------------------//
export function bodyAtividadeTag(pFiltros) {
  let instrucao_sql =
    'select a.cd_atividade "id_atividade", a.ds_atividade "atividade", a.dt_previsao "data_previsao" from atividade a inner join atividade_tag ag on ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade inner join tag tg on tg.cd_tag = ag.cd_tag <filtros> order by a.dt_previsao';

  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

//----------------------atividade cliente ----------------------//

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

//Retorna atividades pendente por IdColarador
export function bodyAtividesExecucaoColaborador(pIdColaborador) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select a.cd_atividade \"id_atividade\", a.ds_atividade \"atividade\", a.dt_previsao \"data_previsao\" from atividade a where a.ds_status = 'P' and a. cd_responsavel = ${pIdColaborador}`
  };

  return body;
}

//Retorna atividades finalizadas por IdColaborador
export function bodyAtividesFinalizadaColaborador(pIdColaborador) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select a.cd_atividade \"id_atividade\", a.ds_atividade \"atividade\", a.dt_previsao \"data_previsao\" from atividade a where a.ds_status = 'F' and a. cd_responsavel = ${pIdColaborador}`
  };

  return body;
}

//----------------------colaborador ----------------------//
//Retorna dados do colaborador pIdColaborador
export function bodyProcuraIdColaborador(pValor) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select c.cd_colaborador "id_colaborador", c.ds_colaborador "colaborador", c.ds_cpf_cnpj "cpf_cnpj", c.ds_status "status" from colaborador c where c.ds_status = \'A\' and ((c.ds_colaborador like ('%${pValor}%')) or (c.ds_cpf_cnpj like ('${pValor}%')))`
  };

  return body;
}
//Retorna dados do colaborador pIdColaborador
export function bodyProcuraIdColaboradorTotal(pValor) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select c.cd_colaborador "id_colaborador", c.ds_colaborador "colaborador", c.ds_cpf_cnpj "cpf_cnpj", c.ds_status "status" from colaborador c where c.ds_status = \'A\' and ((c.ds_colaborador like ('%${pValor}%')) or (c.ds_fantasia like ('%${pValor}%')) or (c.ds_cpf_cnpj like ('${pValor}%')))`
  };

  return body;
}

//Retorna dados do colaborador em execucao pIdColaborador
export function bodyAtividadePendenteColaborador(pValor) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select a.cd_atividade \"id_atividade\", a.ds_atividade \"atividade\", a.dt_previsao \"data_previsao\" from atividade a where a.ds_status = 'P' and a. cd_responsavel = ${pValor}`
  };

  return body;
}

//Retorna dados do colaborador em finalizado pIdColaborador
export function bodyFinalizadoColaborador(pValor) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select a.cd_atividade \"id_atividade\", a.ds_atividade \"atividade\", a.dt_previsao \"data_previsao\" from atividade a where a.ds_status = 'F' and a. cd_responsavel =${pValor}`
  };

  return body;
}

//----------------------ocorrencia ----------------------//
export function bodyOcorrencia(pFiltros) {
  let instrucao_sql = `select a.cd_atividade "id_atividade", a.ds_atividade "atividade", a.dt_previsao "data_previsao" from atividade a <filtros> order by a.dt_previsao`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

export function bodyOcorrenciaPorTipoAtividade(pFiltros) {
  let instrucao_sql = `select tv.cd_tipo_atividade "id_tipo_atividade", tv.ds_tipo_atividade "tipo_atividade", count(o.cd_ocorrencia) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), O.DURACAO)) "duracao" from atividade_ocorrencia o inner join atividade a on a.cd_empresa = o.cd_empresa and a.cd_atividade = o.cd_atividade inner join tipo_atividade tv on tv.cd_tipo_atividade = a.cd_tipo_atividade <filtros> group by tv.cd_tipo_atividade, tv.ds_tipo_atividade order by tv.ds_tipo_atividade`;
  let body = montaBody(instrucao_sql, pFiltros);
  console.log(body);
  return body;
}

export function bodyOcorrenciaPorWorkflow(pFiltros) {
  let instrucao_sql = `select wf.cd_workflow "id_workflow", wf.ds_workflow "workflow", count(o.cd_ocorrencia) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), O.DURACAO)) "duracao" from atividade_ocorrencia o inner join atividade a on a.cd_empresa = o.cd_empresa and a.cd_atividade = o.cd_atividade inner join workflow wf on wf.cd_workflow = a.cd_workflow <filtros> group by wf.cd_workflow, wf.ds_workflow order by wf.ds_workflow`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

export function bodyOcorrenciaPorColaborador(pFiltros) {
  let instrucao_sql = `select cb.cd_colaborador "id_colaborador", cb.ds_colaborador "colaborador", count(o.cd_ocorrencia) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), O.DURACAO)) "duracao" from atividade_ocorrencia o inner join atividade a on a.cd_empresa = o.cd_empresa and a.cd_atividade = o.cd_atividade inner join colaborador cb on cb.cd_colaborador = o.cd_colaborador <filtros> group by cb.cd_colaborador, cb.ds_colaborador order by cb.ds_colaborador`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

export function bodyOcorrenciaPorData(pFiltros) {
  let instrucao_sql = `select cast(o.dt_ocorrencia as date) "id_sequencial", extract(day from o.dt_ocorrencia)||'/'||extract(month from o.dt_ocorrencia)||'/'||extract(year from o.dt_ocorrencia) "data_ocorrencia", count(o.cd_ocorrencia) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), O.DURACAO)) "duracao" from atividade_ocorrencia o inner join atividade a on a.cd_empresa = o.cd_empresa and a.cd_atividade = o.cd_atividade <filtros> group by cast(o.dt_ocorrencia as date), extract(day from o.dt_ocorrencia)||'/'||extract(month from o.dt_ocorrencia)||'/'||extract(year from o.dt_ocorrencia) order by 1`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

export function bodyOcorrenciaPorMesAno(pFiltros) {
  let instrucao_sql = `select extract(year from o.dt_ocorrencia)||extract(month from o.dt_ocorrencia) "id_sequencial", extract(month from o.dt_ocorrencia)||'/'||extract(year from o.dt_ocorrencia) "data_ocorrencia", count(o.cd_ocorrencia) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), O.DURACAO)) "duracao" from atividade_ocorrencia o inner join atividade a on a.cd_empresa = o.cd_empresa and a.cd_atividade = o.cd_atividade <filtros> group by extract(year from o.dt_ocorrencia)||extract(month from o.dt_ocorrencia), extract(month from o.dt_ocorrencia)||'/'||extract(year from o.dt_ocorrencia) order by 1`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

export function bodyOcorrenciaPorSemana(pFiltros) {
  let instrucao_sql = `select extract(week from o.dt_ocorrencia) "id_sequencial", 'SEMANA '||extract(week from o.dt_ocorrencia) "data_ocorrencia", count(o.cd_ocorrencia) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), O.DURACAO)) "duracao" from atividade_ocorrencia o inner join atividade a on a.cd_empresa = o.cd_empresa and a.cd_atividade = o.cd_atividade <filtros> group by extract(week from o.dt_ocorrencia), 'SEMANA '||extract(week from o.dt_ocorrencia) order by 1`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
