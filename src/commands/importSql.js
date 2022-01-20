import {
  bodyAtividade,
  bodyAtividadePorTipoAtividade,
  bodyAtividadePorCliente,
  bodyAtividadePorTag,
  bodyAtividadePorResponsavel,
  bodyAtividadePorWorkflow,
  bodyAtividadePorSituacao,
  bodyAtividadePorGut,
  bodyAtividadePorData,
  bodyAtividadePorMesAno,
  bodyAtividadePorSemana,
  bodyAtividadePorTipoAtividadeStatus,
  bodyAtividadeCliente,
  bodyAtividadeClientePorTipoAtividade,
  bodyAtividadeClientePorResponsavel,
  bodyAtividadeClientePorTag,
  bodyAtividadeClientePorSituacao,
  bodyAtividadeClientePorWorkflow,
  bodyAtividadeColaborador,
  bodyAtividadeColaboradorPorTipoAtividade,
  bodyAtividadeTag,
  bodyAtividadeTagPorTipoAtividade,
  bodyAtividadeTagPorCliente,
  bodyAtividadeTagPorResponsavel,
  bodyAtividadeTagPorWorkflow,
  bodyAtividadeTagPorSituacao,
  bodyAtividadeTagPorGut,
  bodyAtividadeTagPorData,
  bodyAtividadeTagPorMesAno,
  bodyAtividadeTagPorSemana,
  bodyOcorrenciaPorTipoAtividade,
  bodyOcorrenciaPorWorkflow,
  bodyOcorrenciaPorColaborador,
  bodyOcorrenciaPorData,
  bodyOcorrenciaPorMesAno,
  bodyOcorrenciaPorSemana,
  bodyProjeto,
  bodyProjetoPorTipoProjeto,
  bodyProjetoPorResponsavel,
  bodyProjetoPorSituacao,
  bodyProjetoPorCliente,
  bodyProjetoPorTag,
  bodyProjetoColaborador,
  bodyProjetoColaboradorPorTipoProjeto,
  bodyProjetoColaboradorPorSituacao,
  bodyProjetoTag,
  bodyProjetoTagPorTipoProjeto,
  bodyProjetoTagPorSituacao,
  bodyProjetoTagPorMesAno,
  bodyNotificacao,
  bodyNotificacaoPorAtividade,
  bodyNotificacaoPorTipoAtividade,
  bodyTeste
} from "src/boot/consultaSql.js";

export default {
  data() {
    return {
      value: 71,
      carregarKnob: false,
      carregarText: false,
      ObjConteudo: {},
      larguraCard: null,
      alturaCard: null,
      alturaCorpo: null
    };
  },
  methods: {
    getUrlItem(pIndexGrupo, pIndexItem) {
      let url = this.link_item.replace(
        "<id_item>",
        this.ObjConteudo.grupos[pIndexGrupo].itens[pIndexItem].id
      );
      return url;
    },
    abrirItem(pIndexGrupo, pIndexItem) {
      window.open(this.getUrlItem(pIndexGrupo, pIndexItem), "_blank");
    },
    limparConteudoItens(pIndex) {
      this.ObjConteudo.grupos[pIndex].itens = [];
    },
    atualizarConteudoItens(pIndex) {
      this.limparConteudoItens(pIndex);
      this.handleResize();
      let body = this.getBody(
        this.conteudo_card.body_item,
        this.ObjConteudo.grupos[pIndex].id
      );
      this.$api.post("consultasql", body).then(res => {
        let arrRetorno = res.data;

        for (let i = 0; i < arrRetorno.length; i++) {
          let item = {
            id: Object.values(arrRetorno[i])[0],
            item: Object.values(arrRetorno[i])[1]
          };
          this.ObjConteudo.grupos[pIndex].itens.push(item);
        }
      });
    },
    showItem(pIndex) {
      this.atualizarConteudoItens(pIndex);
    },
    getBody(pNomeBody, pIdGrupo) {
      let filtros = this.conteudo_card.filtro_sql_grupo.replace(
        "<id_principal>",
        this.idPrincipal
      );
      if (
        pNomeBody === "bodyAtividade" ||
        pNomeBody === "bodyAtividadeCliente" ||
        pNomeBody === "bodyAtividadeTag" ||
        pNomeBody === "bodyAtividadeColaborador" ||
        pNomeBody === "bodyProjeto" ||
        pNomeBody === "bodyProjetoTag" ||
        pNomeBody === "bodyProjetoColaborador" ||
        pNomeBody === "bodyNotificacao" ||
        pNomeBody === "bodyNotificacaoPorAtividade" ||
        pNomeBody === "bodyAtividadePorTipoAtividadeStatus" ||
        pNomeBody === "bodyTeste"
      ) {
        filtros = this.conteudo_card.filtro_sql_item.replace(
          "<id_principal>",
          this.idPrincipal
        );
      }
      filtros = filtros.replace("<id_grupo>", pIdGrupo);
      if (pNomeBody === "bodyTeste") {
        return bodyTeste(filtros);
      }
      if (pNomeBody === "bodyAtividade") {
        return bodyAtividade(filtros);
      }
      if (pNomeBody === "bodyAtividadePorTipoAtividade") {
        return bodyAtividadePorTipoAtividade(filtros);
      }
      if (pNomeBody === "bodyAtividadePorCliente") {
        return bodyAtividadePorCliente(filtros);
      }
      if (pNomeBody === "bodyAtividadePorTag") {
        return bodyAtividadePorTag(filtros);
      }
      if (pNomeBody === "bodyAtividadePorWorkflow") {
        return bodyAtividadePorWorkflow(filtros);
      }
      if (pNomeBody === "bodyAtividadePorResponsavel") {
        return bodyAtividadePorResponsavel(filtros);
      }
      if (pNomeBody === "bodyAtividadePorSituacao") {
        return bodyAtividadePorSituacao(filtros);
      }
      if (pNomeBody === "bodyAtividadePorGut") {
        return bodyAtividadePorGut(filtros);
      }
      if (pNomeBody === "bodyAtividadePorData") {
        return bodyAtividadePorData(filtros);
      }
      if (pNomeBody === "bodyAtividadePorMesAno") {
        return bodyAtividadePorMesAno(filtros);
      }
      if (pNomeBody === "bodyAtividadePorSemana") {
        return bodyAtividadePorSemana(filtros);
      }
      if (pNomeBody === "bodyAtividadePorTipoAtividadeStatus") {
        return bodyAtividadePorTipoAtividade(filtros);
      }

      if (pNomeBody === "bodyAtividadeCliente") {
        return bodyAtividadeCliente(filtros);
      }
      if (pNomeBody === "bodyAtividadeClientePorTipoAtividade") {
        return bodyAtividadeClientePorTipoAtividade(filtros);
      }
      if (pNomeBody === "bodyAtividadeClientePorResponsavel") {
        return bodyAtividadeClientePorResponsavel(filtros);
      }
      if (pNomeBody === "bodyAtividadeClientePorTag") {
        return bodyAtividadeClientePorTag(filtros);
      }
      if (pNomeBody === "bodyAtividadeClientePorSituacao") {
        return bodyAtividadeClientePorSituacao(filtros);
      }
      if (pNomeBody === "bodyAtividadeClientePorWorkflow") {
        return bodyAtividadeClientePorWorkflow(filtros);
      }
      if (pNomeBody === "bodyAtividadeTag") {
        return bodyAtividadeTag(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorTipoAtividade") {
        return bodyAtividadeTagPorTipoAtividade(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorCliente") {
        return bodyAtividadeTagPorCliente(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorWorkflow") {
        return bodyAtividadeTagPorWorkflow(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorResponsavel") {
        return bodyAtividadeTagPorResponsavel(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorSituacao") {
        return bodyAtividadeTagPorSituacao(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorGut") {
        return bodyAtividadeTagPorGut(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorData") {
        return bodyAtividadeTagPorData(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorMesAno") {
        return bodyAtividadeTagPorMesAno(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorSemana") {
        return bodyAtividadeTagPorSemana(filtros);
      }

      if (pNomeBody === "bodyAtividadeColaborador") {
        return bodyAtividadeColaborador(filtros);
      }
      if (pNomeBody === "bodyAtividadeColaboradorPorTipoAtividade") {
        return bodyAtividadeColaboradorPorTipoAtividade(filtros);
      }

      if (pNomeBody === "bodyOcorrenciaPorTipoAtividade") {
        return bodyOcorrenciaPorTipoAtividade(filtros);
      }
      if (pNomeBody === "bodyOcorrenciaPorWorkflow") {
        return bodyOcorrenciaPorWorkflow(filtros);
      }
      if (pNomeBody === "bodyOcorrenciaPorColaborador") {
        return bodyOcorrenciaPorColaborador(filtros);
      }
      if (pNomeBody === "bodyOcorrenciaPorData") {
        return bodyOcorrenciaPorData(filtros);
      }
      if (pNomeBody === "bodyOcorrenciaPorMesAno") {
        return bodyOcorrenciaPorMesAno(filtros);
      }
      if (pNomeBody === "bodyOcorrenciaPorSemana") {
        return bodyOcorrenciaPorSemana(filtros);
      }

      if (pNomeBody === "bodyProjeto") {
        return bodyProjeto(filtros);
      }
      if (pNomeBody === "bodyProjetoPorTipoProjeto") {
        return bodyProjetoPorTipoProjeto(filtros);
      }
      if (pNomeBody === "bodyProjetoPorResponsavel") {
        return bodyProjetoPorResponsavel(filtros);
      }
      if (pNomeBody === "bodyProjetoPorSituacao") {
        return bodyProjetoPorSituacao(filtros);
      }
      if (pNomeBody === "bodyProjetoPorCliente") {
        return bodyProjetoPorCliente(filtros);
      }
      if (pNomeBody === "bodyProjetoPorTag") {
        return bodyProjetoPorTag(filtros);
      }

      if (pNomeBody === "bodyProjetoColaborador") {
        return bodyProjetoColaborador(filtros);
      }
      if (pNomeBody === "bodyProjetoColaboradorPorTipoProjeto") {
        return bodyProjetoColaboradorPorTipoProjeto(filtros);
      }
      if (pNomeBody === "bodyProjetoColaboradorPorSituacao") {
        return bodyProjetoColaboradorPorSituacao(filtros);
      }

      if (pNomeBody === "bodyProjetoTag") {
        return bodyProjetoTag(filtros);
      }
      if (pNomeBody === "bodyProjetoTagPorTipoProjeto") {
        return bodyProjetoTagPorTipoProjeto(filtros);
      }
      if (pNomeBody === "bodyProjetoTagPorSituacao") {
        return bodyProjetoTagPorSituacao(filtros);
      }
      if (pNomeBody === "bodyProjetoTagPorMesAno") {
        return bodyProjetoTagPorMesAno(filtros);
      }

      if (pNomeBody === "bodyNotificacao") {
        return bodyNotificacao(filtros);
      }
      if (pNomeBody === "bodyNotificacaoPorAtividade") {
        return bodyNotificacaoPorAtividade(filtros);
      }
      if (pNomeBody === "bodyNotificacaoPorTipoAtividade") {
        return bodyNotificacaoPorTipoAtividade(filtros);
      }
    },

    atualizarConteudo() {
      this.limparConteudo();
      if (this.idPrincipal !== null) {
        let body = this.getBody(this.conteudo_card.body_grupo);
        if (body == null) {
          return false;
        }
        this.carregarKnob = true;
        this.$api.post("consultasql", body).then(res => {
          let arrRetorno = res.data;

          for (let i = 0; i < arrRetorno.length; i++) {
            let item = {
              id: Object.values(arrRetorno[i])[0],
              grupo: Object.values(arrRetorno[i])[1],
              qtde: Object.values(arrRetorno[i])[2],
              duracao: Object.values(arrRetorno[i])[3]
            };
            this.carregarKnob = false;
            this.ObjConteudo.grupos.push(item);
          }
          setTimeout(() => {
            arrRetorno == "";
          }, 2000);
          if (arrRetorno == "") {
            this.carregarText = true;
            this.carregarKnob = false;
          } else {
            this.carregarText = false;
          }
        });
      }
    },
    limparConteudo() {
      this.ObjConteudo.grupos = [];
    },
    formataCaptionGrupo(pQtde, pDuracao) {
      let texto = "";
      if (pQtde > 0) {
        texto = pQtde + " itens";
        if (pDuracao > 0) {
          texto =
            texto +
            " (" +
            pDuracao +
            " mim - " +
            Math.round(pDuracao / pQtde) +
            " med)";
        }
      }
      return texto;
    },
    medidaCard() {
      this.alturaCard = this.height + "vh";
      this.alturaCorpo = this.height - 7 + "vh";
    },
    handleResize() {
      console.log(window.innerWidth);
      if (window.innerWidth <= 500) {
        this.alturaCorpo = "100%";
      }
    }
  },
  computed: {
    UrlItem() {
      return this.ObjConteudo.grupos;
    }
  },
  watch: {
    msg: {
      handler: function(newValue, oldValue) {
        if (newValue === "limpar_conteudo") {
          this.limparConteudo();
        }
        if (newValue === "atualizar_conteudo") {
          this.atualizarConteudo();
        }
      },
      deep: true,
      immediate: true
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.medidaCard();
  }
};
