import { RouterStateSerializer } from "@ngrx/router-store";
import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from "@angular/router";


export interface RouterState {
    url: string;
    params: Params;
    queryParams: Params;
    fragment: string | null;
}

export class CustomRouterSerializer implements RouterStateSerializer<RouterState> {
    serialize(routerState: RouterStateSnapshot): RouterState {
        const { url } = routerState;
        const { fragment } = routerState.root;
        const { queryParams } = routerState.root;

        let route: ActivatedRouteSnapshot | null = routerState.root;
        const params: Params = {};

        do {
            if (!!route.params) {
                Object.keys(route.params).forEach(key => {
                    params[key] = route?.params[key];
                });
            }

            route = route.firstChild;

        }while(!!route);

        return { url, params, queryParams, fragment };
    }
    
}