export const rotasMenu = {
  methods: {
    liberacaoRotas(rotas) {
      if (rotas === "colaborador") {
        this.linksList.push(
          {
            icon: "dashboard",
            rota: "/",
            text: "Dashboard"
          },
          {
            icon: "supervisor_account",
            rota: "/Cliente",
            text: "Cliente"
          },
          {
            icon: "engineering",
            rota: "/Colaborador",
            text: "Colaborador"
          },
          {
            icon: "fact_check",
            rota: "/Projetos",
            text: "Projetos"
          },
          {
            icon: "insert_chart_outlined",
            rota: "/BI",
            text: "BI"
          }
        );
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
