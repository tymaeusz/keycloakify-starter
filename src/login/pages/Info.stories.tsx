import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "info.ftl" });

const meta = {
    title: "login/info.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

// --- Default ---

export const Default: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messageHeader: "Message header",
                message: {
                    summary: "Server info message"
                }
            }}
        />
    )
};

export const DefaultPtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                messageHeader: "Cabeçalho da Mensagem",
                message: {
                    summary: "Mensagem de informação do servidor"
                }
            }}
        />
    )
};

// --- With Link Back ---

export const WithLinkBack: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messageHeader: "Message header",
                message: {
                    summary: "Server message"
                },
                actionUri: undefined // Keycloak define `actionUri` como `undefined` quando não há link de volta
            }}
        />
    )
};

export const WithLinkBackPtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                messageHeader: "Cabeçalho da Mensagem",
                message: {
                    summary: "Mensagem do servidor"
                },
                actionUri: undefined
            }}
        />
    )
};

// --- With Required Actions ---

export const WithRequiredActions: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messageHeader: "Message header",
                message: {
                    summary: "Required actions:"
                },
                requiredActions: ["CONFIGURE_TOTP", "UPDATE_PROFILE", "VERIFY_EMAIL", "CUSTOM_ACTION"],
                "x-keycloakify": {
                    messages: {
                        "requiredAction.CUSTOM_ACTION": "Custom action"
                    }
                }
            }}
        />
    )
};

export const WithRequiredActionsPtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                messageHeader: "Cabeçalho da Mensagem",
                message: {
                    summary: "Ações obrigatórias:"
                },
                requiredActions: ["CONFIGURE_TOTP", "UPDATE_PROFILE", "VERIFY_EMAIL", "CUSTOM_ACTION"],
                "x-keycloakify": {
                    messages: {
                        // O valor do requiredAction.CUSTOM_ACTION é traduzido aqui
                        "requiredAction.CUSTOM_ACTION": "Ação personalizada"
                    }
                }
            }}
        />
    )
};