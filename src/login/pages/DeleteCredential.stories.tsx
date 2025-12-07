import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

// A página base agora é "delete-credential.ftl"
const { KcPageStory } = createKcPageStory({ pageId: "delete-credential.ftl" });

const meta = {
    title: "login/delete-credential.ftl",
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

export const WithCustomCredentialLabel: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                credentialLabel: "Test Credential",
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
 * - Propósito: Testa a página de exclusão de credencial com o locale 'pt-BR'.
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
 * WithCustomCredentialLabel_ptBR:
 * - Propósito: Testa a página de exclusão de credencial com um rótulo personalizado e locale 'pt-BR'.
 * - Cenário: Simula a exclusão de uma credencial que tem um nome específico, exibindo a página traduzida.
 */
export const WithCustomCredentialLabel_ptBR: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                credentialLabel: "Credencial de Teste", // Exemplo de tradução do rótulo
                url: { loginAction: "/login-action" },
                locale: { currentLanguageTag: "pt-BR" } // LOCALIZAÇÃO ADICIONADA
            }}
        />
    )
};