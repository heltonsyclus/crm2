export const rotasMenu = {
  methods: {
    liberacaoRotas(rotas) {
      if (rotas.dashboard_area_trabalho) {
        this.linksList.push({
          icon: "dashboard",
          rota: "/dashboard",
          text: "Dashboard"
        });
      }
      if (rotas.dashboard_cliente) {
        this.linksList.push({
          icon: "supervisor_account",
          rota: "/Cliente",
          text: "Cliente"
        });
      }
      if (rotas.dashboard_colaborador) {
        this.linksList.push({
          icon: "engineering",
          rota: "/Colaborador",
          text: "Colaborador"
        });
      }
      if (rotas.dashboard_projeto) {
        this.linksList.push({
          icon: "fact_check",
          rota: "/Projetos",
          text: "Projetos"
        });
      }

      if (rotas.dashboard_bi_x) {
        this.linksList.push({
          icon: "insert_chart_outlined",
          rota: "/BI",
          text: "BI"
        });
      }

      if (rotas === "cliente") {
        this.linksList.push({
          icon: "precision_manufacturing",
          rota: "/cliente-producao",
          text: "Producao"
        });
      }
    }
  }
};
