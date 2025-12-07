import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";
import type { Attribute } from "keycloakify/login";

const { KcPageStory } = createKcPageStory({ pageId: "register.ftl" });

const meta = {
    title: "login/register.ftl",
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

// --- With Email Already Exists ---

export const WithEmailAlreadyExists: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                profile: {
                    attributesByName: {
                        username: { value: "johndoe" },
                        email: { value: "jhon.doe@gmail.com" },
                        firstName: { value: "John" },
                        lastName: { value: "Doe" }
                    }
                },
                messagesPerField: {
                    existsError: (fieldName: string, ...otherFieldNames: string[]) => [fieldName, ...otherFieldNames].includes("email"),
                    get: (fieldName: string) => (fieldName === "email" ? "Email already exists." : undefined)
                }
            }}
        />
    )
};

export const WithEmailAlreadyExistsPtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                profile: {
                    attributesByName: {
                        username: { value: "johndoe" },
                        email: { value: "jhon.doe@gmail.com" },
                        firstName: { value: "John" },
                        lastName: { value: "Doe" }
                    }
                },
                messagesPerField: {
                    existsError: (fieldName: string, ...otherFieldNames: string[]) => [fieldName, ...otherFieldNames].includes("email"),
                    get: (fieldName: string) => (fieldName === "email" ? "Este e-mail já existe." : undefined)
                }
            }}
        />
    )
};

// --- With Restricted To MIT Students ---

export const WithRestrictedToMITStudents: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                profile: {
                    attributesByName: {
                        email: {
                            validators: {
                                pattern: {
                                    pattern: "^[^@]+@([^.]+\\.)*((mit\\.edu)|(berkeley\\.edu))$",
                                    "error-message": "${profile.attributes.email.pattern.error}"
                                }
                            },
                            annotations: {
                                inputHelperTextBefore: "${profile.attributes.email.inputHelperTextBefore}"
                            }
                        }
                    }
                },
                "x-keycloakify": {
                    messages: {
                        "profile.attributes.email.inputHelperTextBefore": "Please use your MIT or Berkeley email.",
                        "profile.attributes.email.pattern.error":
                            "This is not an MIT (<strong>@mit.edu</strong>) nor a Berkeley (<strong>@berkeley.edu</strong>) email."
                    }
                }
            }}
        />
    )
};

export const WithRestrictedToMITStudentsPtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                profile: {
                    attributesByName: {
                        email: {
                            validators: {
                                pattern: {
                                    pattern: "^[^@]+@([^.]+\\.)*((mit\\.edu)|(berkeley\\.edu))$",
                                    "error-message": "${profile.attributes.email.pattern.error}"
                                }
                            },
                            annotations: {
                                inputHelperTextBefore: "${profile.attributes.email.inputHelperTextBefore}"
                            }
                        }
                    }
                },
                "x-keycloakify": {
                    messages: {
                        "profile.attributes.email.inputHelperTextBefore": "Por favor, use seu e-mail do MIT ou Berkeley.",
                        "profile.attributes.email.pattern.error":
                            "Este não é um e-mail do MIT (<strong>@mit.edu</strong>) nem de Berkeley (<strong>@berkeley.edu</strong>)."
                    }
                }
            }}
        />
    )
};

// --- With Favorite Pet ---

export const WithFavoritePet: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                profile: {
                    attributesByName: {
                        favoritePet: {
                            name: "favorite-pet",
                            displayName: "${profile.attributes.favoritePet}",
                            validators: {
                                options: {
                                    options: ["cat", "dog", "fish"]
                                }
                            },
                            annotations: {
                                inputOptionLabelsI18nPrefix: "profile.attributes.favoritePet.options"
                            },
                            required: false,
                            readOnly: false
                        } satisfies Attribute
                    }
                },
                "x-keycloakify": {
                    messages: {
                        "profile.attributes.favoritePet": "Favorite Pet",
                        "profile.attributes.favoritePet.options.cat": "Fluffy Cat",
                        "profile.attributes.favoritePet.options.dog": "Loyal Dog",
                        "profile.attributes.favoritePet.options.fish": "Peaceful Fish"
                    }
                }
            }}
        />
    )
};

export const WithFavoritePetPtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                profile: {
                    attributesByName: {
                        favoritePet: {
                            name: "favorite-pet",
                            displayName: "${profile.attributes.favoritePet}",
                            validators: {
                                options: {
                                    options: ["cat", "dog", "fish"]
                                }
                            },
                            annotations: {
                                inputOptionLabelsI18nPrefix: "profile.attributes.favoritePet.options"
                            },
                            required: false,
                            readOnly: false
                        } satisfies Attribute
                    }
                },
                "x-keycloakify": {
                    messages: {
                        "profile.attributes.favoritePet": "Animal Favorito",
                        "profile.attributes.favoritePet.options.cat": "Gato Fofo",
                        "profile.attributes.favoritePet.options.dog": "Cão Leal",
                        "profile.attributes.favoritePet.options.fish": "Peixe Pacífico"
                    }
                }
            }}
        />
    )
};

// --- With Newsletter ---

export const WithNewsletter: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                profile: {
                    attributesByName: {
                        newsletter: {
                            name: "newsletter",
                            displayName: "Sign up to the newsletter",
                            validators: {
                                options: {
                                    options: ["yes"]
                                }
                            },
                            annotations: {
                                inputOptionLabels: {
                                    yes: "I want my email inbox filled with spam"
                                },
                                inputType: "multiselect-checkboxes"
                            },
                            required: false,
                            readOnly: false
                        } satisfies Attribute
                    }
                }
            }}
        />
    )
};

export const WithNewsletterPtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                profile: {
                    attributesByName: {
                        newsletter: {
                            name: "newsletter",
                            displayName: "Assine a newsletter",
                            validators: {
                                options: {
                                    options: ["yes"]
                                }
                            },
                            annotations: {
                                inputOptionLabels: {
                                    yes: "Quero receber novidades por e-mail"
                                },
                                inputType: "multiselect-checkboxes"
                            },
                            required: false,
                            readOnly: false
                        } satisfies Attribute
                    }
                }
            }}
        />
    )
};

// --- Email As Username ---

export const WithEmailAsUsername: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: {
                    registrationEmailAsUsername: true
                },
                profile: {
                    attributesByName: {
                        username: undefined
                    }
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
                    registrationEmailAsUsername: true
                },
                profile: {
                    attributesByName: {
                        username: undefined
                    }
                }
            }}
        />
    )
};

// --- Recaptcha ---

export const WithRecaptcha: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                scripts: ["https://www.google.com/recaptcha/api.js?hl=en"],
                recaptchaRequired: true,
                recaptchaSiteKey: "6LfQHvApAAAAAE73SYTd5vS0lB1Xr7zdiQ-6iBVa"
            }}
        />
    )
};

export const WithRecaptchaPtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                scripts: ["https://www.google.com/recaptcha/api.js?hl=pt-BR"],
                recaptchaRequired: true,
                recaptchaSiteKey: "6LfQHvApAAAAAE73SYTd5vS0lB1Xr7zdiQ-6iBVa"
            }}
        />
    )
};

// Mantendo o francês separado como um caso específico de teste de i18n
export const WithRecaptchaFrench: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "fr"
                },
                scripts: ["https://www.google.com/recaptcha/api.js?hl=fr"],
                recaptchaRequired: true,
                recaptchaSiteKey: "6LfQHvApAAAAAE73SYTd5vS0lB1Xr7zdiQ-6iBVa"
            }}
        />
    )
};

// --- Password Policy ---

export const WithPasswordMinLength8: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                passwordPolicies: {
                    length: 8
                }
            }}
        />
    )
};

export const WithPasswordMinLength8PtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                passwordPolicies: {
                    length: 8
                }
            }}
        />
    )
};

// --- Terms Acceptance ---

export const WithTermsAcceptance: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                termsAcceptanceRequired: true,
                "x-keycloakify": {
                    messages: {
                        termsText: "<a href='https://example.com/terms'>Service Terms of Use</a>"
                    }
                }
            }}
        />
    )
};

export const WithTermsAcceptancePtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                termsAcceptanceRequired: true,
                "x-keycloakify": {
                    messages: {
                        termsText: "<a href='https://example.com/terms'>Termos de Uso do Serviço</a>"
                    }
                }
            }}
        />
    )
};

// --- Terms Not Accepted ---

export const WithTermsNotAccepted: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                termsAcceptanceRequired: true,
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "termsAccepted",
                    get: (fieldName: string) => (fieldName === "termsAccepted" ? "You must accept the terms." : undefined)
                }
            }}
        />
    )
};

export const WithTermsNotAcceptedPtBr: Story = {
    render: args => (
        <KcPageStory
            {...args}
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                termsAcceptanceRequired: true,
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "termsAccepted",
                    get: (fieldName: string) => (fieldName === "termsAccepted" ? "Você deve aceitar os termos." : undefined)
                }
            }}
        />
    )
};

// --- Field Errors ---

export const WithFieldErrors: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                profile: {
                    attributesByName: {
                        username: { value: "" },
                        email: { value: "invalid-email" }
                    }
                },
                messagesPerField: {
                    existsError: (fieldName: string) => ["username", "email"].includes(fieldName),
                    get: (fieldName: string) => {
                        if (fieldName === "username") return "Username is required.";
                        if (fieldName === "email") return "Invalid email format.";
                    }
                }
            }}
        />
    )
};

export const WithFieldErrorsPtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                profile: {
                    attributesByName: {
                        username: { value: "" },
                        email: { value: "invalid-email" }
                    }
                },
                messagesPerField: {
                    existsError: (fieldName: string) => ["username", "email"].includes(fieldName),
                    get: (fieldName: string) => {
                        if (fieldName === "username") return "Nome de usuário é obrigatório.";
                        if (fieldName === "email") return "Formato de e-mail inválido.";
                    }
                }
            }}
        />
    )
};

// --- Read Only Fields ---

export const WithReadOnlyFields: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                profile: {
                    attributesByName: {
                        username: { value: "johndoe", readOnly: true },
                        email: { value: "jhon.doe@gmail.com", readOnly: false }
                    }
                }
            }}
        />
    )
};

export const WithReadOnlyFieldsPtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                profile: {
                    attributesByName: {
                        username: { value: "johndoe", readOnly: true },
                        email: { value: "jhon.doe@gmail.com", readOnly: false }
                    }
                }
            }}
        />
    )
};

// --- Auto Generated Username ---

export const WithAutoGeneratedUsername: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                profile: {
                    attributesByName: {
                        username: { value: "autogenerated_username" }
                    }
                }
            }}
        />
    )
};

export const WithAutoGeneratedUsernamePtBr: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: { currentLanguageTag: "pt-BR" },
                profile: {
                    attributesByName: {
                        username: { value: "autogenerated_username" }
                    }
                }
            }}
        />
    )
};