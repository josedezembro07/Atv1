import { Routes } from '@angular/router';
import { Home } from './exercicio1/home/home';
import { Sobre } from './exercicio1/sobre/sobre';
import { Contato } from './exercicio1/contato/contato';
import { GaleriaComponent } from './exercicio2/galeria/galeria';
import { DetalheImagemComponent } from './exercicio2/detalhe-imagem/detalhe-imagem';
import { LoginComponent } from './exercicio3/login/login';
import { Dashboard } from './exercicio3/dashboard/dashboard';
import { ProdutosComponent } from './exercicio4/produtos/produtos';
import { DetalheProdutoComponent } from './exercicio4/detalhe-produto/detalhe-produto';
import { NoticiasComponent } from './exercicio5/noticias/noticias';
import { DetalheNoticiaComponent } from './exercicio5/detalhe-noticia/detalhe-noticia';
import { AdminDashboardComponent } from './exercicio6/admin-dashboard/admin-dashboard';
import { UsuariosComponent } from './exercicio6/usuarios/usuarios';
import { DetalheUsuarioComponent } from './exercicio6/detalhe-usuario/detalhe-usuario';
import { RelatoriosComponent } from './exercicio6/relatorios/relatorios';
import { VendasComponent } from './exercicio6/vendas/vendas';
import { EstoqueComponent } from './exercicio6/estoque/estoque';
import { HomeCursosComponent } from './exercicio7/home-cursos/home-cursos';
import { CursosComponent } from './exercicio7/cursos/cursos';
import { DetalheCursoComponent } from './exercicio7/detalhe-curso/detalhe-curso';
import { ProfessoresComponent } from './exercicio7/professores/professores';
import { DetalheProfessorComponent } from './exercicio7/detalhe-professor/detalhe-professor';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'sobre', component: Sobre },
  { path: 'contato', component: Contato},
  { path: 'galeria', component: GaleriaComponent },
{ path: 'detalhe', component: DetalheImagemComponent },
{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: Dashboard },
{ path: 'produtos', component: ProdutosComponent },
{ path: 'produto', component: DetalheProdutoComponent },
{ path: 'noticias', component: NoticiasComponent },
{ path: 'noticia', component: DetalheNoticiaComponent },
{
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'usuarios/detalhe', component: DetalheUsuarioComponent },
      { path: 'relatorios', component: RelatoriosComponent },
      { path: 'relatorios/vendas', component: VendasComponent },
      { path: 'relatorios/estoque', component: EstoqueComponent }
    ]
  },
  {
    path: 'portal-cursos',
    component: HomeCursosComponent,
    children: [
      { path: 'cursos', component: CursosComponent },
      { path: 'cursos/detalhe', component: DetalheCursoComponent },
      { path: 'professores', component: ProfessoresComponent },
      { path: 'professores/detalhe', component: DetalheProfessorComponent }
    ]
  }
  
];