import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "error.ftl" });

const meta = {
    title: "login/error.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

// --- Histórias Originais ---

export const Default: Story = {
    render: () => <KcPageStory />
};

export const WithAnotherMessage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                message: { summary: "With another error message" }
            }}
        />
    )
};

export const WithHtmlErrorMessage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                message: {
                    summary: "<strong>Error:</strong> Something went wrong. <a href='https://example.com'>Go back</a>"
                }
            }}
        />
    )
};
export const FrenchError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "fr" },
                message: { summary: "Une erreur s'est produite" }
            }}
        />
    )
};
export const WithSkipLink: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                message: { summary: "An error occurred" },
                skipLink: true,
                client: {
                    baseUrl: "https://example.com"
                }
            }}
        />
    )
};

// --- Histórias Duplicadas com Localização (pt-BR) ---

/**
 * História duplicada: Default com localização pt-BR.
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
 * História duplicada: WithAnotherMessage com localização pt-BR.
 */
export const WithAnotherMessage_ptBR: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                message: { summary: "Com outra mensagem de erro" }
            }}
        />
    )
};

/**
 * História duplicada: WithHtmlErrorMessage com localização pt-BR.
 */
export const WithHtmlErrorMessage_ptBR: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                message: {
                    summary: "<strong>Erro:</strong> Algo deu errado. <a href='https://example.com'>Voltar</a>"
                }
            }}
        />
    )
};

/**
 * História duplicada: FrenchError (agora Português) com localização pt-BR.
 */
export const PortugueseError_ptBR: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                message: { summary: "Ocorreu um erro" }
            }}
        />
    )
};

/**
 * História duplicada: WithSkipLink com localização pt-BR.
 */
export const WithSkipLink_ptBR: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                message: { summary: "Ocorreu um erro" },
                skipLink: true,
                client: {
                    baseUrl: "https://example.com"
                }
            }}
        />
    )
};