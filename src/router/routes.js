import Store from "app/src/commands/autenticacao";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("src/pages/DashboardPrincipal.vue")
      }
    ]
  },
  {
    path: "/Login",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      { path: "", name: "Login", component: () => import("pages/Login.vue") },
      {
        path: "/problema-login",
        name: "ProblemaLogin",
        component: () => import("pages/ProblemaLogin.vue")
      }
    ]
  },
  {
    path: "/perfil-usuario",
    component: () => import("src/layouts/PerfilUsuario.vue"),
    children: [
      {
        path: "",
        name: "perfil-usuario",
        component: () => import("src/layouts/PerfilUsuario.vue")
      }
    ]
  },
  {
    path: "/atividade",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/atividade",
        name: "atividade",
        component: () => import("pages/Atividade.vue")
      },
      {
        path: "/atividades",
        name: "atividades",
        component: () => import("pages/LayoutAtividade.vue")
      },
      {
        path: "/pesquisa-atividade",
        name: "pesquisa-atividade",
        component: () => import("src/pages/LayoutPesquisaAtividade.vue")
      }
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
    path: "/ocorrencia",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "ocorrencia",
        component: () => import("pages/Ocorrencia.vue")
      }
    ]
  },

  {
    path: "/cliente",
    beforeEnter: Store.auth,
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "cliente",
        component: () => import("src/pages/DashboardCliente.vue")
      }
    ]
  },
  {
    path: "/agenda",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "agenda",
        component: () => import("src/pages/DashboardAgenda.vue")
      }
    ]
  },
  {
    path: "/workflow",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "workflow",
        component: () => import("pages/WorkFlow.vue")
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
        component: () => import("src/pages/DashboardColaborador.vue")
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
        component: () => import("src/pages/DashboardNotificacao.vue")
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
        component: () => import("src/pages/DashboardBI.vue")
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
        component: () => import("src/pages/DashboardProjeto.vue")
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
