import { Middleware } from "redux";
import { logAction } from "../metrics/logAction";
import { ContactActions } from "./actions";
import { RootState } from "./store";

export const logActionMiddleware: Middleware<
    {},
    RootState
> = (storeAPI) => (next) => (action: unknown) => {
    if (isContactAction(action)) {
        logAction(action);
    }
    return next(action);
};
function isContactAction(action: unknown): action is ContactActions {
    return typeof action === 'object' && action !== null && 'type' in action;
}