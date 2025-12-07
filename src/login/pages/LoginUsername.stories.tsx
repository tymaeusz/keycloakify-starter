import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-username.ftl" });

const meta = {
    title: "login/login-username.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

// --- Default ---

export const Default: Story = {
    render: () => <KcPageStory />
};

export const DefaultPtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" }
            }}
        />
    )
};

// --- With Email as Username ---

export const WithEmailAsUsername: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: {
                    loginWithEmailAllowed: true,
                    registrationEmailAsUsername: true
                }
            }}
        />
    )
};

export const WithEmailAsUsernamePtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                realm: {
                    loginWithEmailAllowed: true,
                    registrationEmailAsUsername: true
                }
            }}
        />
    )
};

/**
 * WithUsernameError:
 * - Purpose: Tests behavior when an error occurs with the username input (e.g., invalid username or email).
 * - Scenario: The component displays an error message next to the input field.
 * - Key Aspect: Ensures the input field shows error messages when validation fails.
 */
export const WithUsernameError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: {
                    loginWithEmailAllowed: true,
                    registrationEmailAsUsername: false
                },
                url: {
                    loginAction: "/mock-login-action"
                },
                messagesPerField: {
                    existsError: (field: string) => field === "username",
                    get: () => "Invalid username or email"
                },
                auth: {
                    attemptedUsername: "invalid_user"
                }
            }}
        />
    )
};

export const WithUsernameErrorPtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                realm: {
                    loginWithEmailAllowed: true,
                    registrationEmailAsUsername: false
                },
                url: {
                    loginAction: "/mock-login-action"
                },
                messagesPerField: {
                    existsError: (field: string) => field === "username",
                    get: () => "Nome de usuário ou e-mail inválido"
                },
                auth: {
                    attemptedUsername: "usuario_invalido"
                }
            }}
        />
    )
};