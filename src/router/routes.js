import Store from "app/src/commands/autenticacao";

const routes = [
  /* {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "inicial",
        component: () => import("src/pages/DashboardInicial.vue")
      }
    ]
  },*/
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "dashboard",
        component: () => import("src/pages/Projetos/crm/DashboardPrincipal.vue")
      }
    ]
  },
  {
    path: "/cliente-producao",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/cliente-producao",
        name: "cliente-producao",
        component: () =>
          import("src/pages/Projetos/producao/DashboardProducao.vue")
      }
    ]
  },
  {
    path: "/Login",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      { path: "", name: "Login", component: () => import("pages/Login.vue") }
    ]
  },
  /*{
    path: "/projeto",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/projeto",
        name: "projeto",
        component: () => import("pages/Projeto.vue")
      },
      {
        path: "/projetos",
        name: "projetos",
        component: () => import("pages/LayoutPesquisaAtividade.vue")
      },
      {
        path: "/pesquisa-projeto",
        name: "pesquisa-projeto",
        component: () => import("pages/LayoutPesquisaProjeto.vue")
      }
    ]
  },*/

  {
    path: "/cliente",
    beforeEnter: Store.auth,
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "cliente",
        component: () => import("src/pages/Projetos/crm/DashboardCliente.vue")
      }
    ]
  },
  {
    path: "/colaborador",
    beforeEnter: Store.auth,
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "colaborador",
        component: () =>
          import("src/pages/Projetos/crm/DashboardColaborador.vue")
      }
    ]
  },
  {
    path: "/notificacao",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "notificacao",
        component: () =>
          import("src/pages/Projetos/crm/DashboardNotificacao.vue")
      }
    ]
  },
  {
    path: "/BI",
    beforeEnter: Store.auth,
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "bi",
        component: () => import("src/pages/Projetos/bi/DashboardBI.vue")
      }
    ]
  },
  {
    path: "/Projetos",
    beforeEnter: Store.auth,
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "dashboardprojetos",
        component: () => import("src/pages/Projetos/crm/DashboardProjeto.vue")
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
