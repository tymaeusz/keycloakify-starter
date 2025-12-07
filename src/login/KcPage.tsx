import { Suspense, lazy } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import Template from "./Template";
import "./main.css";
import "./fonts.css";
const UserProfileFormFields = lazy(
    
    () => import("keycloakify/login/UserProfileFormFields")
);
const Error = lazy(() => import("./pages/Error"));
const DeleteAccountConfirm = lazy(() => import("./pages/DeleteAccountConfirm"));
const DeleteCredential = lazy(() => import("./pages/DeleteCredential"));
const LoginPageExpired = lazy(() => import("./pages/LoginPageExpired"));
const doMakeUserConfirmPassword = true;

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    const { i18n } = useI18n({ kcContext });

    return (
        <Suspense>
{(() => {
    switch (kcContext.pageId) {
        case "delete-account-confirm.ftl":
            return (
                <DeleteAccountConfirm
                    {...{ kcContext, i18n, classes }}
                    Template={Template}
                    doUseDefaultCss={true}
                />
            );

        case "delete-credential.ftl": return (
            <DeleteCredential
                          {...{ kcContext, i18n, classes }}
                          Template={Template}
                           doUseDefaultCss={true}
                       />
                    );



                      case "login-page-expired.ftl": return (
                        <LoginPageExpired
                            {...{ kcContext, i18n, classes }}
                            Template={Template}
                            doUseDefaultCss={true}
                        />
                    );  
                    
                    
                    case "error.ftl": return (
                        <Error
                            {...{ kcContext, i18n, classes }}
                            Template={Template}
                            doUseDefaultCss={true}
                        />
                    );
        default:
            return (
                <DefaultPage
                    kcContext={kcContext}
                    i18n={i18n}
                    classes={classes}
                    Template={Template}
                    doUseDefaultCss={true}
                    UserProfileFormFields={UserProfileFormFields}
                    doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                />
            );
            
        
    }
})()}
        </Suspense>
    );
}




const classes = {} satisfies { [key in ClassKey]?: string };
