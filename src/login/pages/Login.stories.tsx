import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login.ftl" });

const meta = {
    title: "login/login.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

// --- Default ---

export const Default: Story = {
    render: () => <KcPageStory />
};

export const DefaultPtBr: Story = {
    render: () => <KcPageStory 
        kcContext={{
            locale: { currentLanguageTag: "pt-BR" }
        }}
    />
};

// --- Invalid Credential ---

export const WithInvalidCredential: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                login: { username: "johndoe" },
                messagesPerField: {
                    existsError: (fieldName: string, ...otherFieldNames: string[]) => {
                        const fieldNames = [fieldName, ...otherFieldNames];
                        return (
                            fieldNames.includes("username") ||
                            fieldNames.includes("password")
                        );
                    },
                    get: (fieldName: string) => {
                        if (fieldName === "username" || fieldName === "password") {
                            return "Invalid username or password.";
                        }
                        return "";
                    }
                }
            }}
        />
    )
};

export const WithInvalidCredentialPtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                login: { username: "johndoe" },
                messagesPerField: {
                    existsError: (fieldName: string, ...otherFieldNames: string[]) => {
                        const fieldNames = [fieldName, ...otherFieldNames];
                        return (
                            fieldNames.includes("username") ||
                            fieldNames.includes("password")
                        );
                    },
                    get: (fieldName: string) => {
                        if (fieldName === "username" || fieldName === "password") {
                            return "Usuário ou senha inválidos.";
                        }
                        return "";
                    }
                }
            }}
        />
    )
};

// --- Without Registration ---

export const WithoutRegistration: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: { registrationAllowed: false }
            }}
        />
    )
};

export const WithoutRegistrationPtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                realm: { registrationAllowed: false }
            }}
        />
    )
};

// --- Without Remember Me ---

export const WithoutRememberMe: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: { rememberMe: false }
            }}
        />
    )
};

export const WithoutRememberMePtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                realm: { rememberMe: false }
            }}
        />
    )
};

// --- Without Password Reset ---

export const WithoutPasswordReset: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: { resetPasswordAllowed: false }
            }}
        />
    )
};

export const WithoutPasswordResetPtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                realm: { resetPasswordAllowed: false }
            }}
        />
    )
};

// --- Email As Username ---

export const WithEmailAsUsername: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: { loginWithEmailAllowed: false }
            }}
        />
    )
};

export const WithEmailAsUsernamePtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                realm: { loginWithEmailAllowed: false }
            }}
        />
    )
};

// --- Preset Username ---

export const WithPresetUsername: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                login: { username: "max.mustermann@mail.com" }
            }}
        />
    )
};

export const WithPresetUsernamePtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                login: { username: "max.mustermann@mail.com" }
            }}
        />
    )
};

// --- Immutable Preset Username ---

export const WithImmutablePresetUsername: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                auth: {
                    attemptedUsername: "max.mustermann@mail.com",
                    showUsername: true
                },
                usernameHidden: true,
                message: {
                    type: "info",
                    summary: "Please re-authenticate to continue."
                }
            }}
        />
    )
};

export const WithImmutablePresetUsernamePtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                auth: {
                    attemptedUsername: "max.mustermann@mail.com",
                    showUsername: true
                },
                usernameHidden: true,
                message: {
                    type: "info",
                    summary: "Por favor, re-autentique para continuar."
                }
            }}
        />
    )
};

// --- Social Providers (Full List) ---

const socialProvidersMock = [
    { loginUrl: "google", alias: "google", providerId: "google", displayName: "Google", iconClasses: "fa fa-google" },
    { loginUrl: "microsoft", alias: "microsoft", providerId: "microsoft", displayName: "Microsoft", iconClasses: "fa fa-windows" },
    { loginUrl: "facebook", alias: "facebook", providerId: "facebook", displayName: "Facebook", iconClasses: "fa fa-facebook" },
    { loginUrl: "instagram", alias: "instagram", providerId: "instagram", displayName: "Instagram", iconClasses: "fa fa-instagram" },
    { loginUrl: "twitter", alias: "twitter", providerId: "twitter", displayName: "Twitter", iconClasses: "fa fa-twitter" },
    { loginUrl: "linkedin", alias: "linkedin", providerId: "linkedin", displayName: "LinkedIn", iconClasses: "fa fa-linkedin" },
    { loginUrl: "stackoverflow", alias: "stackoverflow", providerId: "stackoverflow", displayName: "Stackoverflow", iconClasses: "fa fa-stack-overflow" },
    { loginUrl: "github", alias: "github", providerId: "github", displayName: "Github", iconClasses: "fa fa-github" },
    { loginUrl: "gitlab", alias: "gitlab", providerId: "gitlab", displayName: "Gitlab", iconClasses: "fa fa-gitlab" },
    { loginUrl: "bitbucket", alias: "bitbucket", providerId: "bitbucket", displayName: "Bitbucket", iconClasses: "fa fa-bitbucket" },
    { loginUrl: "paypal", alias: "paypal", providerId: "paypal", displayName: "PayPal", iconClasses: "fa fa-paypal" },
    { loginUrl: "openshift", alias: "openshift", providerId: "openshift", displayName: "OpenShift", iconClasses: "fa fa-cloud" }
];

export const WithSocialProviders: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                social: {
                    displayInfo: true,
                    providers: socialProvidersMock
                }
            }}
        />
    )
};

export const WithSocialProvidersPtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                social: {
                    displayInfo: true,
                    providers: socialProvidersMock
                }
            }}
        />
    )
};

// --- Without Password Field ---

export const WithoutPasswordField: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: { password: false }
            }}
        />
    )
};

export const WithoutPasswordFieldPtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                realm: { password: false }
            }}
        />
    )
};

// --- Error Message ---

export const WithErrorMessage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                message: {
                    summary: "Connection timeout expired.<br/>The login process will be restarted.",
                    type: "error"
                }
            }}
        />
    )
};

export const WithErrorMessagePtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                message: {
                    summary: "O tempo limite da conexão expirou.<br/>O processo de login será reiniciado.",
                    type: "error"
                }
            }}
        />
    )
};

// --- One Social Provider ---

export const WithOneSocialProvider: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                social: {
                    displayInfo: true,
                    providers: [
                        { loginUrl: "google", alias: "google", providerId: "google", displayName: "Google", iconClasses: "fa fa-google" }
                    ]
                }
            }}
        />
    )
};

export const WithOneSocialProviderPtBr: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                social: {
                    displayInfo: true,
                    providers: [
                        { loginUrl: "google", alias: "google", providerId: "google", displayName: "Google", iconClasses: "fa fa-google" }
                    ]
                }
            }}
        />
    )
};

// --- Two Social Providers ---

export const WithTwoSocialProviders: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                social: {
                    displayInfo: true,
                    providers: [
                        { loginUrl: "google", alias: "google", providerId: "google", displayName: "Google", iconClasses: "fa fa-google" },
                        { loginUrl: "microsoft", alias: "microsoft", providerId: "microsoft", displayName: "Microsoft", iconClasses: "fa fa-windows" }
                    ]
                }
            }}
        />
    )
};

export const WithTwoSocialProvidersPtBr: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                social: {
                    displayInfo: true,
                    providers: [
                        { loginUrl: "google", alias: "google", providerId: "google", displayName: "Google", iconClasses: "fa fa-google" },
                        { loginUrl: "microsoft", alias: "microsoft", providerId: "microsoft", displayName: "Microsoft", iconClasses: "fa fa-windows" }
                    ]
                }
            }}
        />
    )
};

// --- No Social Providers ---

export const WithNoSocialProviders: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                social: {
                    displayInfo: true,
                    providers: []
                }
            }}
        />
    )
};

export const WithNoSocialProvidersPtBr: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                social: {
                    displayInfo: true,
                    providers: []
                }
            }}
        />
    )
};

// --- More Than Two Social Providers ---

export const WithMoreThanTwoSocialProviders: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                social: {
                    displayInfo: true,
                    providers: [
                        { loginUrl: "google", alias: "google", providerId: "google", displayName: "Google", iconClasses: "fa fa-google" },
                        { loginUrl: "microsoft", alias: "microsoft", providerId: "microsoft", displayName: "Microsoft", iconClasses: "fa fa-windows" },
                        { loginUrl: "facebook", alias: "facebook", providerId: "facebook", displayName: "Facebook", iconClasses: "fa fa-facebook" },
                        { loginUrl: "twitter", alias: "twitter", providerId: "twitter", displayName: "Twitter", iconClasses: "fa fa-twitter" }
                    ]
                }
            }}
        />
    )
};

export const WithMoreThanTwoSocialProvidersPtBr: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                social: {
                    displayInfo: true,
                    providers: [
                        { loginUrl: "google", alias: "google", providerId: "google", displayName: "Google", iconClasses: "fa fa-google" },
                        { loginUrl: "microsoft", alias: "microsoft", providerId: "microsoft", displayName: "Microsoft", iconClasses: "fa fa-windows" },
                        { loginUrl: "facebook", alias: "facebook", providerId: "facebook", displayName: "Facebook", iconClasses: "fa fa-facebook" },
                        { loginUrl: "twitter", alias: "twitter", providerId: "twitter", displayName: "Twitter", iconClasses: "fa fa-twitter" }
                    ]
                }
            }}
        />
    )
};

// --- Social Providers Without Remember Me ---

export const WithSocialProvidersAndWithoutRememberMe: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                social: {
                    displayInfo: true,
                    providers: [
                        { loginUrl: "google", alias: "google", providerId: "google", displayName: "Google", iconClasses: "fa fa-google" }
                    ]
                },
                realm: { rememberMe: false }
            }}
        />
    )
};

export const WithSocialProvidersAndWithoutRememberMePtBr: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                social: {
                    displayInfo: true,
                    providers: [
                        { loginUrl: "google", alias: "google", providerId: "google", displayName: "Google", iconClasses: "fa fa-google" }
                    ]
                },
                realm: { rememberMe: false }
            }}
        />
    )
};