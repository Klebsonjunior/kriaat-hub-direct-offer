// Direção visual: Editorial de Oficina — configuração separada da interface para que decisões comerciais mudem sem hardcode espalhado.

export const OFFER_CONFIG = {
  deliveryTime: "O prazo é combinado depois do briefing, de acordo com o escopo escolhido.",
  creativeCount: 5,
  whatsapp: "",
  email: "",
  socialLinks: {
    instagram: "",
  },
  briefingEndpoint: "",
  checkoutUrls: {
    produto: "",
    vender: "",
    divulgar: "",
  },
  prices: {
    produto: "R$ 37",
    vender: "R$ 97",
    divulgar: "R$ 197",
  },
} as const;

export type PackageId = keyof typeof OFFER_CONFIG.checkoutUrls;

export const packageLabels: Record<PackageId, string> = {
  produto: "Produto pronto",
  vender: "Pronto para vender",
  divulgar: "Pronto para vender + divulgar",
};
