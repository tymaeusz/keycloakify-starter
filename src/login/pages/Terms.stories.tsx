import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "terms.ftl" });

const meta = {
    title: "login/terms.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

// --- Default ---

export const Default: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                "x-keycloakify": {
                    messages: {
                        termsText: "<p>My terms in <strong>English</strong></p>"
                    }
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
                "x-keycloakify": {
                    messages: {
                        termsText: "<p>Meus termos em <strong>Português</strong></p>"
                    }
                }
            }}
        />
    )
};

// --- French ---

export const French: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "fr"
                },
                "x-keycloakify": {
                    // cSpell: disable
                    messages: {
                        termsText: "<p>Mes terme en <strong>Français</strong></p>"
                    }
                    // cSpell: enable
                }
            }}
        />
    )
};

// --- Spanish ---

export const Spanish: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "es"
                },
                "x-keycloakify": {
                    messages: {
                        termsText: "<p>Mis términos en <strong>Español</strong></p>"
                    }
                }
            }}
        />
    )
};

// --- Long Message ---

export const LongMessage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                "x-keycloakify": {
                    messages: {
                        termsText: `
                            <p>These are the terms and conditions. Please read them carefully.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
                            <p>Cras vehicula diam vel metus faucibus, at scelerisque lacus pretium. Donec ac consectetur justo. Morbi in sollicitudin nulla.</p>
                            <p>Suspendisse potenti. Phasellus pharetra consequat ante, at dictum ligula volutpat a. Quisque ultricies velit nec nulla gravida accumsan.</p>
                            <p>Curabitur tristique, magna id hendrerit tristique, enim nunc laoreet erat, non accumsan lacus arcu et nulla.</p>
                            <p>Fusce feugiat nisi orci, in placerat dui luctus ut. Suspendisse in velit eu urna auctor consequat a euismod enim.</p>
                            <p>Etiam et massa a sapien pharetra mollis. In lacinia quam id libero tincidunt, at egestas felis viverra.</p>
                            <p>Nunc pulvinar imperdiet facilisis. Curabitur ultricies dictum lectus, nec consectetur metus fringilla id.</p>
                            <p><strong>Please accept the terms to proceed.</strong></p>
                        `
                    }
                }
            }}
        />
    )
};

export const LongMessagePtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                "x-keycloakify": {
                    messages: {
                        termsText: `
                            <p>Estes são os termos e condições. Por favor, leia-os com atenção.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
                            <p>Cras vehicula diam vel metus faucibus, at scelerisque lacus pretium. Donec ac consectetur justo. Morbi in sollicitudin nulla.</p>
                            <p>Suspendisse potenti. Phasellus pharetra consequat ante, at dictum ligula volutpat a. Quisque ultricies velit nec nulla gravida accumsan.</p>
                            <p>Curabitur tristique, magna id hendrerit tristique, enim nunc laoreet erat, non accumsan lacus arcu et nulla.</p>
                            <p>Fusce feugiat nisi orci, in placerat dui luctus ut. Suspendisse in velit eu urna auctor consequat a euismod enim.</p>
                            <p>Etiam et massa a sapien pharetra mollis. In lacinia quam id libero tincidunt, at egestas felis viverra.</p>
                            <p>Nunc pulvinar imperdiet facilisis. Curabitur ultricies dictum lectus, nec consectetur metus fringilla id.</p>
                            <p><strong>Por favor, aceite os termos para continuar.</strong></p>
                        `
                    }
                }
            }}
        />
    )
};