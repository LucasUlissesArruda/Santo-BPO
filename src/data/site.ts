import { maskPhone } from '@/lib/masks';

export { telHref, whatsappHref } from '@/lib/masks';

/**
 * Fonte única dos dados de contato do site.
 * Para trocar um telefone/e-mail, altere apenas aqui.
 */

export const SITE_URL = 'https://www.santobpo.com.br';

export const EMAIL = 'santobpo.financeiro@gmail.com';

export const INSTAGRAM_URL = 'https://www.instagram.com/santobpo';

export type Partner = {
  id: 'annie' | 'andreia';
  name: string;
  /** Somente dígitos: DDD + número */
  phone: string;
};

export const PARTNERS: Record<Partner['id'], Partner> = {
  annie: { id: 'annie', name: 'Annie', phone: '4497620317' },
  andreia: { id: 'andreia', name: 'Andréia', phone: '6282789714' },
};

/** Telefone já formatado com máscara, ex.: (44) 9762-0317 */
export function displayPhone(partner: Partner): string {
  return maskPhone(partner.phone);
}

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio', id: 'inicio' },
  { label: 'Sobre a Santo', href: '#quem-somos', id: 'quem-somos' },
  { label: 'Serviços', href: '#servicos', id: 'servicos' },
  { label: 'Contato', href: '#contato', id: 'contato' },
  { label: 'Depoimentos', href: '#feedbacks', id: 'feedbacks' },
] as const;
