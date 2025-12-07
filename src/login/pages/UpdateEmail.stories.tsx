import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "update-email.ftl" });

const meta = {
    title: "login/update-email.ftl",
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

// --- Errors ---

/**
 * WithEmailError:
 * - Purpose: Tests when there is a format error in the email input (e.g., invalid email structure).
 * - Scenario: Simulates the case where the user enters an email that fails standard format validation.
 */
export const WithEmailError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messagesPerField: {
                    existsError: (field: string) => field === "email",
                    get: () => "Invalid email format."
                }
            }}
        />
    )
};

export const WithEmailErrorPtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                messagesPerField: {
                    existsError: (field: string) => field === "email",
                    get: () => "Formato de e-mail inválido."
                }
            }}
        />
    )
};

/**
 * WithEmailAlreadyInUseError:
 * - Purpose: Tests when the provided email is already associated with another account.
 * - Scenario: Simulates the case where the email is valid but fails the uniqueness check.
 */
export const WithEmailAlreadyInUseError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messagesPerField: {
                    existsError: (field: string) => field === "email",
                    get: () => "Email address already in use."
                }
            }}
        />
    )
};

export const WithEmailAlreadyInUseErrorPtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                messagesPerField: {
                    existsError: (field: string) => field === "email",
                    get: () => "O endereço de e-mail já está em uso."
                }
            }}
        />
    )
};


// --- App Initiated Action ---

/**
 * WithAppInitiatedAction:
 * - Purpose: Tests when the form is displayed as part of an application-initiated action.
 * - Scenario: The component renders the form with additional buttons like "Cancel."
 * - Key Aspect: Ensures the "Cancel" button is visible and functional during app-initiated actions.
 */
export const WithAppInitiatedAction: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                url: {
                    loginAction: "/mock-login-action"
                },
                messagesPerField: {
                    exists: () => false
                },
                isAppInitiatedAction: true
            }}
        />
    )
};

export const WithAppInitiatedActionPtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                url: {
                    loginAction: "/mock-login-action"
                },
                messagesPerField: {
                    exists: () => false
                },
                isAppInitiatedAction: true
            }}
        />
    )
};