import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VsCodeSetupComponent } from './vs-code-setup/vs-code-setup.component';
import { HeaderComponent } from './header/header.component';
import { NodeSetupComponent } from './node-setup/node-setup.component';
import { AngularSetupComponent } from './angular-setup/angular-setup.component';
import { GitSetupComponent } from './git-setup/git-setup.component';
import { AngularProjectComponent } from './angular-project/angular-project.component';
import { GitRepoCreComponent } from './git-repo-cre/git-repo-cre.component';

@NgModule({
  declarations: [
    AppComponent,
    VsCodeSetupComponent,
    HeaderComponent,
    NodeSetupComponent,
    AngularSetupComponent,
    GitSetupComponent,
    AngularProjectComponent,
    GitRepoCreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
