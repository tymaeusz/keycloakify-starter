import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

// A página base agora é "delete-account-confirm.ftl"
const { KcPageStory } = createKcPageStory({ pageId: "delete-account-confirm.ftl" });

const meta = {
    title: "login/delete-account-confirm.ftl",
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
 * WithAIAFlow:
 * - Purpose: Tests the flow when the account deletion is triggered from the Auth-as-a-Service (AIA) flow.
 */
export const WithAIAFlow: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                triggered_from_aia: true,
                url: { loginAction: "/login-action" }
            }}
        />
    )
};

/**
 * WithoutAIAFlow:
 * - Purpose: Tests the flow when the account deletion is triggered from a standard user flow (not AIA).
 */
export const WithoutAIAFlow: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                triggered_from_aia: false,
                url: { loginAction: "/login-action" }
            }}
        />
    )
};

/**
 * WithCustomButtonStyle:
 * - Purpose: Tests the page rendering with custom button styling, typically used in AIA flows.
 */
export const WithCustomButtonStyle: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                triggered_from_aia: true,
                url: { loginAction: "/login-action" }
            }}
        />
    )
};

// ====================================================================
// --- DUPLICATAS LOCALIZADAS (PORTUGUÊS - pt-BR) ---
// ====================================================================

/**
 * Default_ptBR:
 * - Propósito: Testa a página padrão de confirmação de exclusão de conta com o locale 'pt-BR'.
 */
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
 * WithAIAFlow_ptBR:
 * - Propósito: Testa o fluxo de exclusão iniciado via AIA, usando o locale 'pt-BR'.
 */
export const WithAIAFlow_ptBR: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                triggered_from_aia: true,
                url: { loginAction: "/login-action" },
                locale: { currentLanguageTag: "pt-BR" }
            }}
        />
    )
};

/**
 * WithoutAIAFlow_ptBR:
 * - Propósito: Testa o fluxo de exclusão padrão, não via AIA, usando o locale 'pt-BR'.
 */
export const WithoutAIAFlow_ptBR: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                triggered_from_aia: false,
                url: { loginAction: "/login-action" },
                locale: { currentLanguageTag: "pt-BR" }
            }}
        />
    )
};

/**
 * WithCustomButtonStyle_ptBR:
 * - Propósito: Testa o estilo de botão personalizado (normalmente em fluxos AIA) com o locale 'pt-BR'.
 */
export const WithCustomButtonStyle_ptBR: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                triggered_from_aia: true,
                url: { loginAction: "/login-action" },
                locale: { currentLanguageTag: "pt-BR" }
            }}
        />
    )
};