import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-page-expired.ftl" });

const meta = {
    title: "login/login-page-expired.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

// ====================================================================
// --- STORIES ORIGINAIS (ENGLISH DEFAULT) ---
// ====================================================================

export const Default: Story = {
    render: () => <KcPageStory />
};

/**
 * WithErrorMessage:
 * - Purpose: Tests behavior when an error message is displayed along with the page expiration message.
 * - Scenario: Simulates a case where the session expired due to an error, and an error message is displayed alongside the expiration message.
 * - Key Aspect: Ensures that error messages are displayed correctly in addition to the page expiration notice.
 */
export const WithErrorMessage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                url: {
                    loginRestartFlowUrl: "/mock-restart-flow",
                    loginAction: "/mock-continue-login"
                },
                message: {
                    type: "error",
                    summary: "An error occurred while processing your session."
                }
            }}
        />
    )
};

// ====================================================================
// --- DUPLICATAS LOCALIZADAS (PORTUGUÊS - pt-BR) ---
// ====================================================================

export const Default_ptBR: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" }
            }}
        />
    )
};

/**
 * WithErrorMessage_ptBR:
 * - Propósito: Testa o comportamento quando uma mensagem de erro é exibida junto com a mensagem de expiração da página, usando o locale 'pt-BR'.
 * - Cenário: Simula um caso em que a sessão expirou devido a um erro, e uma mensagem de erro é exibida junto com o aviso de expiração, com tradução em Português.
 */
export const WithErrorMessage_ptBR: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                url: {
                    loginRestartFlowUrl: "/mock-restart-flow",
                    loginAction: "/mock-continue-login"
                },
                message: {
                    type: "error",
                    summary: "Ocorreu um erro ao processar sua sessão."
                },
                locale: { currentLanguageTag: "pt-BR" } // LOCALIZAÇÃO ADICIONADA
            }}
        />
    )
};