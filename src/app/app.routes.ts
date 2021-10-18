import { Routes } from "@angular/router";
import { Error404Component } from "./components/error404/error404.component";
import { PostDetailComponent } from "./components/post-detail/post-detail.component";
import { PostListComponent } from "./components/post-list/post-list.component";

export const ROUTES: Routes = [
    { path: "", component: PostListComponent },
    { path: "post/:id", component: PostDetailComponent },
    { path: "not_found", component: Error404Component },
    { path: "**", pathMatch: "full", redirectTo: "not_found" }
]