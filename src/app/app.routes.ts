import { Routes } from "@angular/router";
import { PostDetailComponent } from "./components/post-detail/post-detail.component";
import { PostListComponent } from "./components/post-list/post-list.component";

export const ROUTES: Routes = [
    { path: "post", component: PostListComponent },
    { path: "post/:id", component: PostDetailComponent },
    // { path: "", pathMatch: "full", redirectTo: "home" },
    // { path: "**", pathMatch: "full", redirectTo: "home" }
]