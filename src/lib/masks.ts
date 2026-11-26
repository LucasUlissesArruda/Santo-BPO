/**
 * Máscaras e utilitários de telefone (Brasil).
 * Aceita números com 8/9 dígitos + DDD (10 ou 11 dígitos no total).
 */

/** Remove tudo que não é dígito. */
export function onlyDigits(value: string): string {
  return value.replace(/\D/g, '');
}

/**
 * Aplica a máscara de telefone enquanto o usuário digita.
 *  - até 10 dígitos: (44) 9762-0317
 *  - 11 dígitos:     (44) 99762-0317
 */
export function maskPhone(value: string): string {
  const digits = onlyDigits(value).slice(0, 11);

  if (digits.length === 0) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

/** Telefone completo? (DDD + 8 ou 9 dígitos) */
export function isValidPhone(value: string): boolean {
  const digits = onlyDigits(value);
  if (digits.length !== 10 && digits.length !== 11) return false;
  const ddd = Number(digits.slice(0, 2));
  return ddd >= 11 && ddd <= 99;
}

/** Link `tel:` internacional. */
export function telHref(digits: string): string {
  return `tel:+55${onlyDigits(digits)}`;
}

/** Link de WhatsApp com mensagem opcional. */
export function whatsappHref(digits: string, message?: string): string {
  const base = `https://wa.me/55${onlyDigits(digits)}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
